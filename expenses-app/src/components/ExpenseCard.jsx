
interface IExpenseCardProps {
  title: string
  category: IExpenseType
  amount: number
  
  necessary?: boolean
}

const ExpenseCard = ({ title, category, amount }: IExpenseCardProps) => {
  return (
    <div className={`expense${necessary ? "expense--necessary" : ""}`}>
      <div>
        {title}
        <div className="category">{category}</div>
      </div>
      <div className="amount">${amount.toFixed(2)}</div>
    </div>
  )
}