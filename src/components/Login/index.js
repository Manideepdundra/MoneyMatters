import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {BiSolidShow, BiSolidHide} from 'react-icons/bi'

import AdminDashboard from '../AdminDashboard'
import UserDashboard from '../UserDashboard'
import './index.css'

class Login extends Component {
  state = {
    email: '',
    password: '',
    showHidePassword: true,
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  showHidePasswordToggle = () => {
    this.setState(prevState => ({
      showHidePassword: !prevState.showHidePassword,
    }))
  }

  renderPasswordField = () => {
    const {password, showHidePassword} = this.state
    const type = showHidePassword ? 'password' : 'text'
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <div className="password-input-container">
          <input
            type={type}
            id="password"
            className="password-input-field"
            value={password}
            onChange={this.onChangePassword}
            placeholder="Password"
          />
          {showHidePassword ? (
            <BiSolidHide
              onClick={this.showHidePasswordToggle}
              className="password-show-hide-icon"
            />
          ) : (
            <BiSolidShow
              onClick={this.showHidePasswordToggle}
              className="password-show-hide-icon"
            />
          )}
        </div>
      </>
    )
  }

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          Email
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email"
        />
      </>
    )
  }

  onSuccessAdminDashboard = () => {
    const {history} = this.props
    history.replace('/admin-dashboard')
  }

  onSuccessUserDashboard = () => {
    const {history} = this.props
    history.replace('/dashboard')
  }

  submitCredentials = async event => {
    event.preventDefault()
    const {email, password} = this.state
    const userDetails = {email, password}
    const url = 'https://bursting-gelding-24.hasura.app/api/rest/get-user-id'
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-hasura-admin-secret':
          'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const user = data.get_user_id
    const userId = user[0].id
    if (userId === 3) {
      localStorage.setItem('userId', userId)
      this.onSuccessAdminDashboard(userId)
    } else {
      localStorage.setItem('userId', userId)
      this.onSuccessUserDashboard(userId)
    }
  }

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://www.linkpicture.com/q/How-To-Calculate-The-Retained-Earning-For-Your-Business.png"
          className="login-img"
          alt="website login"
        />
        <div className="form-container">
          <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button
            type="submit"
            onClick={this.submitCredentials}
            className="login-button"
          >
            Login
          </button>
        </div>
      </div>
    )
  }
}

export default Login
