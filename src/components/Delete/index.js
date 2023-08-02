import {Component} from 'react'
import {FcCancel} from 'react-icons/fc'
import './index.css'

class Delete extends Component {
  state = {}

  deleteTransaction = async () => {
    const {id} = this.state
    const userId = localStorage.getItem('userId')
    const userData = {id}
    const url =
      'https://bursting-gelding-24.hasura.app/api/rest/delete-transaction'
    const options = {
      method: 'DELETE',
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

  render() {
    return (
      <div className="update-container">
        <div className="update-top-container">
          <h1>Are you sure you want to delete</h1>
          <FcCancel />
        </div>
        <p>You can delete your transaction here.</p>
        <button type="button" onClick={this.deleteTransaction}>
          Yes, Delete
        </button>
        <button type="button">NO, Leave it</button>
      </div>
    )
  }
}

export default Delete
