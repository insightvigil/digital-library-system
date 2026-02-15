import atitalaquiaLogo from '../../../assets/logo-Atitalaquia.png'
import tecNMLogo from '../../../assets/logo-TECNM-white.png'
import {Link,useNavigate} from 'react-router'

//Components
//import SearchBar from '../SearchBar/SearchBar.component';

import './Navbar.styles.scss';
//import { Link } from 'react-router';
const Navbar = () => {
  const navigate = useNavigate();
    return(
    <nav className = 'navbar'>
      <div className='navbar__left' onClick={()=> {navigate('/')}}>
        <img src={tecNMLogo} alt="" />
        <img src={atitalaquiaLogo} alt="" />
        <span> ¡Bienvenido al Catálogo Digital! </span>
        
      </div>
      <div className='navbar__center'>

      </div>
      <div className='navbar__right'>
        <ul className='navbar__links'>
          <li className='navbar__item'><Link to="/" className='navbar__link'>Inicio</Link></li>
          <li className='navbar__item'><Link href="https://elibro.net/es/lc/itatitalaquia/login_usuario/?next=/es/lc/itatitalaquia/inicio/" className='navbar__link'>Libros Digitales</Link></li>
          <li className='navbar__item'><Link href="https://cursos.itatitalaquia.edu.mx/" className='navbar__link'>Moodle</Link></li>
          <li className='navbar__item'><Link href="http://201.132.29.146/" className='navbar__link'>SII</Link></li>
          <li className='navbar__item'><Link href="#" className='navbar__link'>Reglamento</Link></li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar