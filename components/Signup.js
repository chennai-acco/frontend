import React, { Component } from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $phone: String!
  ) {
    signup(
      email: $email
      password: $password
      firstName: $firstName
      lastName: $lastName
      phone: $phone
    ) {
      id
      email
      firstName
      lastName
    }
  }
`

class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: ''
  }

  saveToState = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION} variables={this.state}>
        {(signup, { error, loading }) => {
          if (error) return <p>error...</p>
          if (loading) return <p>loading...</p>

          return (
            <form
              method="post"
              onSubmit={async e => {
                e.preventDefault()
                await signup()
                this.setState({
                  email: '',
                  password: '',
                  firstName: '',
                  lastName: '',
                  phone: ''
                })
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h5>Signup for an account</h5>

                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />

                <label htmlFor="firstName">FirstName</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="firstName"
                  value={this.state.firstName}
                  onChange={this.saveToState}
                />

                <label htmlFor="lastName">LastName</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="lastName"
                  value={this.state.lastName}
                  onChange={this.saveToState}
                />

                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  value={this.state.phone}
                  onChange={this.saveToState}
                />

                <button type="submit">Sign Up!</button>
              </fieldset>
            </form>
          )
        }}
      </Mutation>
    )
  }
}

export default Signup
