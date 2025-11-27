import React from 'react'
import headerStyle from './Header.module.scss'
import OutsideClickHandler from 'react-outside-click-handler'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

interface NavLink {
  to: string
  label: string
}

interface SmallScreenFunction {
  open: boolean
  closeFn: () => void
  navLinks: NavLink[]
}

const NavSmallScreen: React.FC<SmallScreenFunction> = ({ open, closeFn, navLinks }) => {
  const { theme, toggleTheme } = useTheme()

  if (!open) return null

  return (
    <div className={headerStyle.mobileOverlay}>
      <OutsideClickHandler onOutsideClick={closeFn}>
        <div className={headerStyle.mobileSheet}>
          <div className={headerStyle.mobileHeader}>
            <span>Navigation</span>
            <button onClick={closeFn} aria-label="Close menu">
              ×
            </button>
          </div>
          <div className={headerStyle.mobileLinks}>
            <button className={headerStyle.themeToggle} onClick={toggleTheme}>
              {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
            {navLinks.map((item) => (
              <Link key={item.to} to={item.to} onClick={closeFn}>
                {item.label}
              </Link>
            ))}
            <div className={headerStyle.mobileCTA}>
              <Link to="/login" onClick={closeFn}>
                Login
              </Link>
              <Link to="/signup" onClick={closeFn} className={headerStyle.solidBtn}>
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  )
}

export default NavSmallScreen
