import React from 'react'
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);


// defaults.global.tooltips.enabled = false
// defaults.global.legend.position = 'bottom'

const PieChart = () => {

    return (
        <div className= "PieChart">
            <Pie
            data={{
                labels: ['yute', 'man', 'gyal', 'dem'],
                datasets: [
                  {
                    label: ' Bread',
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              height={400}
              width={600}
              options={{
                maintainAspectRatio: false,
              }}
            />
            
        </div>
    )
}

export default PieChart