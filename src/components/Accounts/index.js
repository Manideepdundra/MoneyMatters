import {Component} from 'react'
import Transaction from '../Transaction'
import AddTransaction from '../AddTransaction'

import './index.css'

class Accounts extends Component {
  state = {credit: 0, debit: 0, lastTransaction: [], showPopup: false}

  componentDidMount() {
    this.fetchData()
    this.fetchLastTransaction()
  }

  addTransaction = () => {
    this.setState(prev => ({showPopup: !prev.showPopup}))
  }

  fetchLastTransaction = async () => {
    const userId = localStorage.getItem('userId')
    const url = `https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=3&offset=0`
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const fetchedData = data.transactions
    const dataCamelCaseConvert = fetchedData.map(each => ({
      transactionName: each.transaction_name,
      type: each.type,
      id: each.id,
      date: each.date,
      category: each.category,
      amount: each.amount,
    }))
    this.setState({lastTransaction: dataCamelCaseConvert})
  }

  fetchData = async () => {
    const userId = localStorage.getItem('userId')
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals'
    const options = {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
        'x-hasura-role': 'user',
        'x-hasura-user-id': userId,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const debitCreditList = data.totals_credit_debit_transactions
    const debitTotal = debitCreditList.find(each => each.type === 'debit')
    const creditTotal = debitCreditList.find(each => each.type === 'credit')
    this.setState({credit: creditTotal.sum, debit: debitTotal.sum})
  }

  render() {
    const {credit, debit, lastTransaction, showPopup} = this.state
    return (
      <div className="accounts-card-container">
        <div className="accounts-title-card">
          <h1>Accounts</h1>
          <button
            type="button"
            onClick={this.addTransaction}
            className="add-transaction-button"
          >
            + Add Transaction
          </button>
        </div>
        <div>{showPopup && <AddTransaction />}</div>

        <div className="account-details-card">
          <div className="debit-credit-card">
            <div className="credit-card">
              <div>
                <h1>{credit}</h1>
                <p>Credit</p>
              </div>
              <img
                src="https://www.linkpicture.com/q/Screenshot-38_8.png"
                className="debit-credit-img"
                alt="credit"
              />
            </div>
            <div className="debit-card">
              <div>
                <h1>{debit}</h1>
                <p>Debit</p>
              </div>
              <img
                src="https://www.linkpicture.com/q/Screenshot-37_9.png"
                className="debit-credit-img"
                alt="credit"
              />
            </div>
          </div>
          <div className="last-transaction-card">
            <h1>Last Transaction</h1>
            {lastTransaction.map(each => (
              <Transaction
                each={each}
                key={each.id}
                updateTransaction={this.updateTransaction}
                deleteTransaction={this.deleteTransaction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Accounts
