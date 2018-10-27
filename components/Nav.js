import { Navbar, Nav as BootNav, NavItem } from 'react-bootstrap'
// import Link from 'next/link'

const Nav = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        {/* <Link href="/"> */}
        <a href="/">
          <span className="logo1">
            <span>
              <img
                src="../static/images/logo-brand-white.png"
                alt="Chennai Acco"
              />
            </span>
            <span className="text-white">&nbsp;&nbsp;Chennai Acco</span>
          </span>
          <span className="logo2">
            <span>
              <img
                src="../static/images/logo-brand-green.png"
                alt="Chennai Acco"
              />
            </span>
            <span style={{ color: '#27ae60' }}>&nbsp;&nbsp;Chennai Acco</span>
          </span>
        </a>
        {/* </Link> */}
      </Navbar.Brand>
    </Navbar.Header>

    <BootNav>
      <NavItem eventKey={1} href="/">
        Home
      </NavItem>
      <NavItem eventKey={2} href="/propertylist">
        Properties
      </NavItem>
      <NavItem eventKey={3} href="/">
        Contact
      </NavItem>
      <NavItem className="nav-btn" href="/">
        <i className="fa fa-phone" /> +91 11111 11111
      </NavItem>
    </BootNav>
  </Navbar>
)

export default Nav
