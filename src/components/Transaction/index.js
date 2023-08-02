import {Component} from 'react'
import {BsPencil} from 'react-icons/bs'
import {RiDeleteBinLine} from 'react-icons/ri'
import Update from '../Update'
import Delete from '../Delete'
import './index.css'

class Transaction extends Component {
  state = {update: false, del: ''}

  onclickUpdate = () => {
    this.setState(prev => ({update: !prev.update}))
  }

  onclickDelete = () => {
    this.setState(prev => ({del: !prev.del}))
  }

  render() {
    const {update, del} = this.state
    const {each} = this.props
    const {transactionName, id, type, date, category, amount} = each
    return (
      <>
        <div className="transaction-details">
          <p>{transactionName}</p>
          <p>{category}</p>
          <p>{date}</p>
          <p>{amount}</p>
          <button type="button" onClick={this.onclickUpdate}>
            <BsPencil />
          </button>
          <RiDeleteBinLine onClick={this.onclickDelete} />
        </div>
        <div>{update && <Update id={id} />}</div>
        <div>{del && <Delete id={id} />}</div>
      </>
    )
  }
}

export default Transaction
