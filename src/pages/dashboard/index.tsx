import { useGetDashboarInfoQuery } from "../../services/dashboard"
import TableView from '../dashboard/table/index'
import { LuLayoutDashboard } from 'react-icons/lu'
import styles from './dashboard.module.css'
import { Select } from "antd"
import { useMemo, useState } from "react"
import PieChart from "./pieChart/pieChart"
type user = {
    category: string,
    details: string,
    id: Number,
    ip_address: string,
    timestamp: string,
    user: string
}
type Accumulator = {
    [key: string]: number;
};

const Dashboard = () => {
    const [view, setView] = useState<string>('Both')
    const { data: listOfUsers, isSuccess: listOfUsersApiSuccess, isLoading: listOfUsersApIsLoading } = useGetDashboarInfoQuery()
    const { Option } = Select;
    const showTable = () => view !== 'Pie';
    const showPie = () => view !== 'Table';


    function getViewInfo(value: string) {
        setView(value)
    }
    console.log(listOfUsers)
    const pieChartDataTat = useMemo(() => {
        const categories = listOfUsers?.reduce((acc: Accumulator, user: user) => {
            acc[user.category] = (acc[user.category] || 0) + 1;
            return acc;
        }, {} as Accumulator);
        return Object.keys(categories || {}).map((key) => ({ type: key, value: categories[key] }));
    }, [listOfUsers]);
    return (
        <>
            <div className={styles.crmDashboard + " DashboardSec"}>
                <div className={styles.pageTitleBox + " Pageitle d-sm-flex align-items-center justify-content-between text-center"}>
                    <h4><LuLayoutDashboard /> Dashboard</h4>
                    <div className='formGroup noBorder d-flex justify-content-center align-items-center'>
                        <label className="px-2"> View: </label>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={getViewInfo}
                            value={view}
                        >
                            <Option value="Table">Table View</Option>
                            <Option value="Pie">Pie Chart View</Option>
                            <Option value="Both">Both Views</Option>
                        </Select>
                    </div>
                </div>

                <div className="DashboardWrapper">
                    <div className="container-fluid">
                        <div className="card-body">
                            <div className={styles.DashboardWarapperBodyNoBG + " DashboardWarapperBody pt-2"}>
                                <div className={styles.dashboardHomeTicketWraper + " row gy-3"}>
                                    <div className="col-md-12">
                                        <div className={`${styles.ticketCards} card ${styles.card3}`}>
                                            {showTable() && <TableView listOfUsers={listOfUsers} listOfUsersApiSuccess={listOfUsersApiSuccess} listOfUsersApIsLoading={listOfUsersApIsLoading} />}
                                            {showPie() && listOfUsers?.length > 0 && <PieChart pieChartDataTat={pieChartDataTat} />}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dashboard