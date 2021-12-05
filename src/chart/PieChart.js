import React, { useState, useEffect } from 'react'
import BillService from "../services/BillService";
import DepositService from "../services/DepositService";
import WithdrawalsService from "../services/WithdrawalsService";
import { Link, useParams } from 'react-router-dom';
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const PieChart = () => {

  useEffect(() => {

     getBillsByAccountId();
     getDepositsByAccountId();
     getEveryWithdrawalByID();

     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [billSlice, setBillSlice] = useState('');
  const [depositSlice, setDepositSlice] = useState('');
  const [withdrawalSlice, setWithdrawalSlice] = useState('');

  const { id } = useParams();

  const url1 = `http://localhost:8080/bills/accounts/${id}/bills`;
  const url2 = `http://localhost:8080/deposits/accounts/${id}/deposits`;
  const url3 = `http://localhost:8080/withdrawals/accounts/${id}/withdrawals`;
                
  const getBillsByAccountId = () => {

    BillService.getBillsByAccountId(id).then((response) => {
      response.data.data.length === 0 ? setBillSlice(0) : setBillSlice(response.data.data.length)
    }).catch(error => {
        console.log(error)
    })

}

const getDepositsByAccountId = () => {

  DepositService.getDepositsByAccountId(id).then((response) => {
    response.data.data.length === 0 ? setDepositSlice(0) : setDepositSlice(response.data.data.length)
  }).catch(error =>{
      console.log(error);
  })
  
}

const getEveryWithdrawalByID = () => {

  WithdrawalsService.getEveryWithdrawalByID(id).then((response) => {
    response.data.data.length === 0 ? setWithdrawalSlice(0) : setWithdrawalSlice(response.data.data.length)
  }).catch(error =>{
      console.log(error);
  })
  
}

 const ShowPie = () => {

    let http = new XMLHttpRequest();

    http.open('GET', url1, false);
    http.send();

    let http2 = new XMLHttpRequest();

    http2.open('GET', url2, false);
    http2.send();

    let http3 = new XMLHttpRequest();

    http3.open('GET', url3, false);
    http3.send();


    if (http.status !== 404 || http2.status !== 404 || http3.status !== 404) {

      return (

        <div className= "PieChart">
        <Pie
        data={{
            labels: ['Amount Of Bills', 'Amount of Deposits', 'Amount Of Withdrawals'],
            datasets: [
              {
                label: ' Bread',
                data: [billSlice, depositSlice, withdrawalSlice],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
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
       
    } else {

      console.log("Nothing to see here!")

      return <b className="NO_DATA_FOUND_text">No data found in this account...</b>
       
  }
}

    return (

      <div>
        <br /> 
        <Link to="/accounts" className="btn btn-secondary mb-2">
          Return To Accounts
        </Link>
        <h2 className="text-center">Account {id}'s Data</h2>
        <br />
          {ShowPie()}
      </div>

    )

}

export default PieChart