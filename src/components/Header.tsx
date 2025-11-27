import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import headerStyle from './Header.module.scss'
import NavSmallScreen from './NavSmallScreen'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/order', label: 'Order' },
  { to: '/compare', label: 'Compare' },
  { to: '/about', label: 'About' },
  { to: '/dashboard/sellers', label: 'Sell with us' },
]

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme } = useTheme()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.inner}>
        <Link to="/" className={headerStyle.brand} onClick={closeMenu}>
          <span className={headerStyle.brandDot} />
          2Sunflowers
        </Link>

        <nav className={headerStyle.nav}>
          {navLinks.map((item) => (
            <Link key={item.to} to={item.to} className={location.pathname === item.to ? headerStyle.active : ''}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={headerStyle.actions}>
          <button className={headerStyle.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
          <Link to="/login" className={headerStyle.ghostBtn}>
            Login
          </Link>
          <Link to="/signup" className={headerStyle.solidBtn}>
            Sign up
          </Link>
        </div>

        <button className={headerStyle.burger} onClick={() => setMenuOpen((prev) => !prev)} aria-label="Toggle menu">
          <span />
          <span />
        </button>
      </div>

      <NavSmallScreen open={menuOpen} closeFn={closeMenu} navLinks={navLinks} />
    </header>
  )
}

export default Header
