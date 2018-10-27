import styled from 'styled-components'
import Nav from './Nav'

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
                <span>Welcome, Guest</span>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Signup</a>
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
