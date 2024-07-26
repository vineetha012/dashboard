import styles from '../dashboard.module.css'
import { Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { Select } from 'antd';

const TableView = ({ listOfUsers, listOfUsersApiSuccess, listOfUsersApIsLoading }: any) => {
    const { Option } = Select;
    const [category, setCategory] = useState<string>('All')

    const columns: any = [
        {
            title: 'S No',
            dataIndex: 'S_No',
            key: 'S_No',
            width: '10%',

            render: (title: any, data: any, index: any) => {

                return (
                    <span className={styles.customTableHeader}>{index + 1}</span>
                )

            },
        },

        {
            title: 'User Name',
            dataIndex: 'userName',
            key: 'userName',
            render: (title: any, key: any) => {

                return (
                    <span className={styles.customTableHeader}>{title}</span>
                )

            }
        },

        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (title: any, key: any) => {

                return (
                    <span className={styles.customTableHeader} key={key.id}>{title}</span>
                )

            }
        },



        {
            title: 'Ip Address',
            dataIndex: 'ipAddress',
            key: 'ipAddress',
            render: (title: any, key: any) => {
                return (
                    <span className={styles.customTableHeader} key={key.id}>{title}</span>
                )

            }
        },
        {
            title: 'Details',
            dataIndex: 'details',
            key: 'details',
            render: (title: any, key: any) => {
                return (
                    <span className={styles.customTableHeader} key={key.id}>{title}</span>
                )

            }
        },


    ];
    function getCategory(value: string) {
        setCategory(value)
    }
    const doFormArrayOfObject = (apiValue: any) => {
        if (listOfUsersApiSuccess) {
            const ResultArr: any = []
            apiValue?.forEach((list: any) => {
                ResultArr.push({
                    userName: list.user,
                    category: list.category,
                    ipAddress: list.ip_address,
                    timestamp: list.timestamp,
                    details: list.details,
                    id: list.id,
                })
            })
            if (category === 'All') {
                return ResultArr;
            }

            return ResultArr?.filter((user: any) => user.category === category);
        }
    }
    const usersList = useMemo(() => doFormArrayOfObject(listOfUsers), [listOfUsers, category]);
    useEffect(() => {
        return () => {
            setCategory('All')
        }
    }, [])
    return (

        <div className={styles.ticketCardBody}>
            <div className='col-sm-12 col-lg-auto table-title '>
                <div className="row">
                    <div className="col-6">
                        <h4 className='title-head'>Users List</h4>
                    </div>
                    <div className="col-6">
                        <div className='formGroup noBorder d-flex justify-content-end align-items-center mb-2'>
                            <label className="px-2">Category: </label>
                            <Select
                                showSearch style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={getCategory}
                                value={category}
                            >
                                <Option value="All">All</Option>
                                <Option value="Malware">Malware</Option>
                                <Option value="Phishing">Phishing</Option>
                                <Option value="Spyware">Spyware</Option>
                                <Option value="Ransomware">Ransomware</Option>
                            </Select>
                        </div>
                    </div>
                </div>
              
            </div>
            <div className='col-sm-12 col-lg-auto'>


            </div>
            <Table className="commonTable" columns={columns} dataSource={usersList} pagination={true} loading={listOfUsersApIsLoading} />
        </div>
    )
}
export default TableView