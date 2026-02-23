export const ExpenseCard = ({ title, category, amount }) => {
  return (
    <div className="expense">
      <div>
        {title}
        <div className="category">{category}</div>
      </div>
      <div className="amount">${amount.toFixed(2)}</div>
    </div>
  )
}