import React, { useState } from 'react'
import Logo from '../assets/logo.png'

const Header: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const handleMouseEnter = (link: string) => setHoveredLink(link)
  const handleMouseLeave = () => setHoveredLink(null)

  const linkStyle = (link: string): React.CSSProperties => ({
    color: hoveredLink === link ? '#ff9500' : '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    transition: 'color 0.3s'
  })

  return (
    <header style={headerStyle}>
      <img
        src={Logo}
        alt="Logo"
        style={logoStyle}
      />
      <nav style={navContainerStyle}>
        <ul style={navStyle}>
          <li style={navItemStyle}>
            <div style={numberStyle}>
              <h3>01</h3>
              <a
                href="#home"
                style={linkStyle('home')}
                onMouseEnter={() => handleMouseEnter('home')}
                onMouseLeave={handleMouseLeave}>
                소개
              </a>
            </div>
          </li>
          <li style={navItemStyle}>
            <div style={numberStyle}>
              <h3>02</h3>
              <a
                href="#about"
                style={linkStyle('about')}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}>
                기술
              </a>
            </div>
          </li>
          <li style={navItemStyle}>
            <div style={numberStyle}>
              <h3>03</h3>
              <a
                href="#projects"
                style={linkStyle('projects')}
                onMouseEnter={() => handleMouseEnter('projects')}
                onMouseLeave={handleMouseLeave}>
                프로젝트
              </a>
            </div>
          </li>
          <li style={navItemStyle}>
            <div style={numberStyle}>
              <h3>04</h3>
              <a
                href="#contact"
                style={linkStyle('contact')}
                onMouseEnter={() => handleMouseEnter('contact')}
                onMouseLeave={handleMouseLeave}>
                이메일
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  padding: '20px 72px',
  position: 'sticky',
  top: 0,
  width: '100%',
  zIndex: 9,
  display: 'flex',
  justifyContent: 'space-between'
}

const navContainerStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center'
}

const navStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'end',
  listStyleType: 'none',
  margin: 0,
  padding: 0
}

const navItemStyle: React.CSSProperties = {
  margin: '0 15px'
}

const logoStyle: React.CSSProperties = {
  width: '60px',
  height: 'auto'
}

const numberStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#ff9500'
}

export default Header
