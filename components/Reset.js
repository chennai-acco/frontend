import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import { CURRENT_USER_QUERY } from './User'

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      firstName
      email
    }
  }
`

class Reset extends Component {
  static propTypes = {
    resetToken: PropTypes.string.isRequired
  }

  state = {
    password: '',
    confirmPassword: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={RESET_MUTATION}
        variables={{
          resetToken: this.props.resetToken,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(resetPassword, { error, loading, called }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await resetPassword()
              this.setState({ password: '', confirmPassword: '' })
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h5>Reset your password</h5>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password id"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Your Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={this.state.confirmPassword}
                  onChange={this.saveToState}
                />
              </div>

              <button type="submit">Reset Your Password!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Reset
