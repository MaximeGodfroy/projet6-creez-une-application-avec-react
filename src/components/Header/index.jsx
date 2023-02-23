import logo from '../../assets/logo.svg'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className={styles.header}>
          <Link to="/">
        <img src={logo} alt='logo'/>
      </Link>
          <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Accueil
        </Link>
        <Link to="/about" className={styles.link}>
          A Propos
        </Link>
      </nav>  
        </header>
        
    )
}