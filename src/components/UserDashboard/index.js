import {Link} from 'react-router-dom'
import {Component} from 'react'
import {BiSolidHome} from 'react-icons/bi'
import {BsPersonFill} from 'react-icons/bs'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import Accounts from '../Accounts'
import './index.css'

class UserDashboard extends Component {
  render() {
    return (
      <div className="user-dashboard-container">
        <div className="user-dashboard-page">
          <div className="user-access-card">
            <div className="money-matters-logo-card">
              <img
                src="https://www.linkpicture.com/q/Screenshot-34_14.png"
                className="money-matter-logo-image"
                alt="money-matters-logo"
              />
            </div>
            <ul className="dashboard-list-container">
              <li>
                <Link to="/dashboard" className="list-item">
                  <BiSolidHome className="dashboards-icon" />
                  <h1 className="list-title">Dashboard</h1>
                </Link>
              </li>
              <li>
                <Link to="/transactions" className="list-item">
                  <FaFileInvoiceDollar className="dashboards-icon" />
                  <h1 className="list-title">Transactions</h1>
                </Link>
              </li>
              <li>
                <Link to="/profile" className="list-item">
                  <BsPersonFill className="dashboards-icon" />
                  <h1 className="list-title">Profile</h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-bg-container">
          <Accounts />
        </div>
      </div>
    )
  }
}

export default UserDashboard
