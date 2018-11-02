import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import { CURRENT_USER_QUERY } from './User'

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      firstName
    }
  }
`

class Signin extends Component {
  state = {
    email: '',
    password: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { error, loading }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await signin()
              this.setState({ email: '', password: '' })
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h5>Sign into your account</h5>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email id"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </div>

              <button type="submit">Sign In!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default Signin
