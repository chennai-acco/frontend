import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import { cloudinaryEndpoint } from '../config'

const CREATE_PICTURE_MUTATION = gql`
  mutation CREATE_PICTURE_MUTATION($url: String!, $id: ID!) {
    createPicture(data: { url: $url, place: { connect: { id: $id } } }) {
      id
      url
    }
  }
`

class AddPictureItem extends Component {
  state = {
    url: '',
    id: ''
  }

  uploadPicture = async (e, createPicture) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'chennai-acco')

    const res = await fetch(cloudinaryEndpoint, {
      method: 'POST',
      body: data
    })
    const file = await res.json()
    this.setState({
      url: file.eager[0].secure_url,
      id: this.props.id
    })

    await createPicture()
  }

  render() {
    return (
      <Mutation mutation={CREATE_PICTURE_MUTATION} variables={this.state}>
        {(createPicture, { loading, error }) => {
          if (error) return <p>error...</p>

          return (
            <form onSubmit={e => e.preventDefault()}>
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="file">Upload a picture</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  placeholder="Upload a picture"
                  onChange={e => this.uploadPicture(e, createPicture)}
                />
                {this.state.url && (
                  <img width="200" src={this.state.url} alt="Upload Preview" />
                )}
              </fieldset>
            </form>
          )
        }}
      </Mutation>
    )
  }
}

export default AddPictureItem
