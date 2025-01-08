/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import theme from '../styles/Theme'

const Header: React.FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  const handleMouseEnter = (link: string) => setHoveredLink(link)
  const handleMouseLeave = () => setHoveredLink(null)

  return (
    <header css={headerStyle}>
      <a href="#home">
        <img
          src={Logo}
          alt="Logo"
          css={logoStyle}
        />
      </a>
      <nav css={navContainerStyle}>
        <ul css={navStyle}>
          <li css={navItemStyle}>
            <div css={numberStyle}>
              <h3>01</h3>
              <a
                href="#about"
                css={linkStyle(hoveredLink === 'about')}
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}>
                소개
              </a>
            </div>
          </li>
          <li css={navItemStyle}>
            <div css={numberStyle}>
              <h3>02</h3>
              <a
                href="#project1"
                css={linkStyle(hoveredLink === 'project1')}
                onMouseEnter={() => handleMouseEnter('project1')}
                onMouseLeave={handleMouseLeave}>
                프로젝트
              </a>
            </div>
          </li>
          <li css={navItemStyle}>
            <div css={numberStyle}>
              <h3>03</h3>
              <a
                href="#contact"
                css={linkStyle(hoveredLink === 'contact')}
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

export default Header

const headerStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0 11rem;
  width: 100%;
  z-index: 8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background-color: rgba(0, 0, 0, 0.9);
`;

const navContainerStyle = css`
  display: flex;
  align-items: center;
`

const navStyle = css`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const navItemStyle = css`
  padding: 0 15px;
`

const logoStyle = css`
  width: 50px;
  height: auto;
`

const numberStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${theme.colors.orange};
`

const linkStyle = (isHovered: boolean) => css`
  color: ${isHovered ? theme.colors.orange : theme.colors.white};
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s;
`
