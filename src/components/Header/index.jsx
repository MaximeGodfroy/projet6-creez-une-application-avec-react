import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {


    return (
        <header className={styles.header}>
          <Link to="/">
        <img src={logo} alt='logo'/>
      </Link>
          <nav className={styles.nav}>
        <NavLink to="/" className={({isActive}) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)} >
          Accueil
        </NavLink>
        <NavLink to="/about" className={({isActive}) => (isActive ? `${styles.link} ${styles.linkActive}` : `${styles.link}`)}>
          A Propos
        </NavLink>
      </nav>  
        </header>
        
    )
}