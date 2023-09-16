import { Link, useLocation } from 'react-router-dom';
import "../styles/Nav.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"; 

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Navigate() {
  const currentPage = useLocation().pathname;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-transparent">
        <Navbar.Brand className="name">Tyler Woods</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-black"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" variant="tabs">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
          <Link
            to="/Portfolio"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
          <Link
            to="/Resume"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
          <Link
            to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>    
  );
}

export default Navigate;

// old nav bar code

    // <div className="">
    //   <ul className="nav nav-tabs justify-content-end">
    //     <li className="nav-item">
    //       <Link
    //         to="/"
    //         // This is a conditional (ternary) operator that checks to see if the current page is "Home"
    //         // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
    //         className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    //       >
    //         About Me
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link
    //         to="/Portfolio"
    //         // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Portfolio
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link
    //         to="/Resume"
    //         // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Resume
    //       </Link>
    //     </li>
    //     <li className="nav-item">
    //       <Link
    //         to="/Contact"
    //         // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
    //         className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
    //       >
    //         Contact
    //       </Link>
    //     </li>
    //   </ul>
    // </div>