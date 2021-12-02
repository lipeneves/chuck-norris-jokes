import Logo from '../../assets/logo.jpeg';

import { Link } from 'react-router-dom';

const Header = () => {


  return(
    <nav>
      <div className="navContainer">
        <Link to='/'>
          <div>
            <img src={Logo} alt="Logo"/>
            <h1>Chuck Norris Jokes</h1>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;