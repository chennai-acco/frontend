import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const POSSIBLE_PERMISSIONS = ['ADMIN', 'USER']

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      firstName
      lastName
      email
      permission
    }
  }
`

const Permissions = () => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => {
      if (error) return <p>{error.message}</p>
      if (loading) return <p>loading...</p>
      return (
        <div>
          <h5>Manage Permissions</h5>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {POSSIBLE_PERMISSIONS.map((permission, index) => (
                  <th key={index}>{permission}</th>
                ))}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <User key={user.id} user={user} />
              ))}
            </tbody>
          </table>
        </div>
      )
    }}
  </Query>
)

class User extends React.Component {
  render() {
    const user = this.props.user

    return (
      <tr>
        <td>{`${user.firstName} ${user.lastName}`}</td>
        <td>{user.email}</td>
        {POSSIBLE_PERMISSIONS.map((permission, index) => (
          <td key={index}>
            <label htmlFor={`${user.id}-permission-${permission}`}>
              <input type="checkbox" />
            </label>
          </td>
        ))}
        <td>
          <button className="btn btn-success">Update</button>
        </td>
      </tr>
    )
  }
}

export default Permissions
