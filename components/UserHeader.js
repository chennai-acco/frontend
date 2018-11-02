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

          <User>
            {({ data: { me } }) => (
              <div className="col-md-6 col-sm-6 col-xs-7">
                <ul className="header-links pull-right">
                  {me && (
                    <>
                      <li>
                        <span>Welcome, {me.firstName}!</span>
                      </li>
                      <li>
                        <Link href="/sell">
                          <a>Create Property</a>
                        </Link>
                      </li>
                    </>
                  )}

                  <li>
                    <a href="#">About Us</a>
                  </li>

                  {!me && (
                    <li>
                      <Link href="/signup">
                        <a>Sign In</a>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            )}
          </User>
        </div>
      </div>
    </div>

    <Nav />
  </header>
)

export default UserHeader
