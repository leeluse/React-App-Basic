import React from "react";
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Fed', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nob', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  for (const expense of props.expenses) {
    // 내장 메소드 getMonth()
    const expenseMonth = expense.date.getMonth();
   chartDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <Chart dataPoints={chartDataPoints} />
  )
};

export default ExpensesChart;