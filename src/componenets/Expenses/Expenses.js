import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFliter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  // 년도를 Select 하면 Filter 하는 기능
  const filteredExpenses = props.items.filter(expense => {
    // getFullYear() : date에서 4자리수 연도를 가져옴
    // toString() : 문자열로 반환
    return expense.date.getFullYear().toString() === filteredYear;
  });


        
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />        
    

      </Card>
    </div>
  );
};

export default Expenses;