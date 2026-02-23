import { useState } from 'react'
import './App.css'
import { ExpenseCard } from './components/ExpenseCard'

type IExpenseType = "food" | "transport" | "fun"

interface IExpense {
  title: string,
  amount: number,
  category: IExpenseType,
}

export const App = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([{
    title: "Burgers",
    amount: 10.52,
    category: "food",
  }, {
    title: "Movie",
    amount: 5.57,
    category: "fun", // Исправлено: "Movie" → "fun" (должен быть тип IExpenseType)
  }])
  
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState<IExpenseType | ''>('')

  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0)

  const handleAddExpense = () => {
    if (!title || !amount || !category) return
    
    const parsedAmount = parseFloat(amount)
    if (isNaN(parsedAmount) || parsedAmount <= 0) return
    
    const newExpense: IExpense = {
      title,
      amount: parsedAmount,
      category: category as IExpenseType
    }
    
    setExpenses([...expenses, newExpense])
    setTitle('')
    setAmount('')
    setCategory('')
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>
      {/* Input Form */}
      <div className="form">
        <input 
          type="text" 
          placeholder="Expense title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Amount" 
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select 
          value={category}
          onChange={(e) => setCategory(e.target.value as IExpenseType | '')}
        >
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="transport">Transport</option>
          <option value="fun">Fun</option>
        </select>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>
      <div className="total">Total: ${total.toFixed(2)}</div>
      {/* Expense List */}
      {expenses.map((expense, index) => (
        <ExpenseCard 
          key={index}
          title={expense.title}
          category={expense.category}
          amount={expense.amount}
        />
      ))}
    </div>
  )
}