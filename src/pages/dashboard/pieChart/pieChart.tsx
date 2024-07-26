import { Pie } from "@ant-design/charts";
import styles from '../dashboard.module.css'
import { useMemo } from "react";
const PieChart = ({ pieChartDataTat }: any) => {

    const configTat = useMemo(() => ({

        appendPadding: 10,
        data: pieChartDataTat?.length > 0 ? pieChartDataTat : [],
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],

    }), [pieChartDataTat])
    return (
        <div className={styles.ticketCardBody}>
            <h4 className='title-head'>Category Pie Chart</h4>
            <Pie {...configTat} />

        </div>

    )
}
export default PieChart