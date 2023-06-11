import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables)

export const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Viewers',
      },
    },
  };

const ViewersLine = ({data}) => {
    
    return(
        <Line
        data={data}
        options={options}
        />
    )
}

export default ViewersLine;