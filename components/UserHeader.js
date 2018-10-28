import styled from 'styled-components'
import Link from 'next/link'

import Nav from './Nav'
import User from './User'

const HiddenDiv = styled.div`
  display: none;
`

const UserHeader = () => (
  <header className="style2">
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-5 header-info">
            <HiddenDiv />
          </div>

          <div className="col-md-6 col-sm-6 col-xs-7">
            <ul className="header-links pull-right">
              <li>
                <User>
                  {({ data: { me } }) => {
                    if (me) return <span>Welcome, {me.firstName}!</span>
                    return <span>Welcome, Guest!</span>
                  }}
                </User>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <Nav />
  </header>
)

export default UserHeader
