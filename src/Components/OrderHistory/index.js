import './index.css'

const OrderHistory = props => {
  const {eachHistoryDetails, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistoryDetails

  const onDeleteClick = () => {
    onDelete(id)
  }

  return (
    <li className="listItem">
      <div className="product-set">
        <p className="time">{timeAccessed}</p>
        <div className="text-container">
          <img src={logoUrl} className="logo-url" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domainUrl">{domainUrl}</p>
        </div>
      </div>
      <button className="button" type="button" data-testId="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete-icon"
          alt="delete"
          onClick={onDeleteClick}
        />
      </button>
    </li>
  )
}
export default OrderHistory
