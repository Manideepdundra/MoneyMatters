import {Component} from 'react'
import {FcCancel} from 'react-icons/fc'
import './index.css'

class Update extends Component {
  state = {name: '', type: '', category: '', date: '', amount: ''}

  submitForm = async event => {
    const {name, type, category, amount, date} = this.state
    event.preventDefault()
    const userId = localStorage.getItem('userId')
    const {id} = this.props

    const userData = {id, name, type, category, amount, date}
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/update-transaction'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
      body: JSON.stringify(userData),
    }
    const response = await fetch(url, options)
    console.log(response)
  }

  transactionType = event => {
    this.setState({type: event.target.value})
  }

  category = event => {
    this.setState({category: event.target.value})
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  date = event => {
    this.setState({date: event.target.value})
  }

  amount = event => {
    this.setState({amount: event.target.value})
  }

  render() {
    const {popup, action} = this.props
    return (
      <div className="update-container">
        <div className="update-top-container">
          <h1>Update Transaction</h1>
          <FcCancel />
        </div>
        <p>You can update your transaction here.</p>
        <form onClick={this.submitForm} className="form-container">
          <label htmlFor="name">Transaction Name</label>
          <input type="text" id="name" onChange={this.getName} />
          <label htmlFor="transactionType">Transaction Type</label>
          <select id="transactionType" onChange={this.transactionType}>
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
          <label htmlFor="category">Category </label>
          <select id="category" onChange={this.category}>
            <option value="Shopping">Shopping</option>
            <option value="Food">Food</option>
            <option value="Loan">Loan</option>
            <option value="Rent">Rent</option>
          </select>
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="number" onChange={this.amount} />
          <label htmlFor="date">date</label>
          <input id="date" type="text" onChange={this.date} />
          <button type="submit">Add Transaction</button>
        </form>
      </div>
    )
  }
}

export default Update
