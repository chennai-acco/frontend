import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`

class RequestReset extends Component {
  state = {
    email: ''
  }

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(requestReset, { error, loading, called }) => (
          <form
            method="post"
            onSubmit={async e => {
              e.preventDefault()
              await requestReset()
              this.setState({ email: '' })
            }}
          >
            <fieldset disabled={loading} aria-busy={loading}>
              <h5>Request a password reset</h5>

              {!error &&
                !loading &&
                called && <p>Success! Check your email for a reset link!</p>}

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

              <button type="submit">Request Reset!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    )
  }
}

export default RequestReset
