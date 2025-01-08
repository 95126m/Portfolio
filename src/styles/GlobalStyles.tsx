import { Global, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import theme from './Theme'
import backgroundImg from '../assets/background.jpg'

interface GlobalStylesProps {
  isLoading: boolean
}

const GlobalStyles: React.FC<GlobalStylesProps> = ({ isLoading }) => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = (scrollTop / docHeight) * 100
    setScrollPercentage(scrolled)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        @font-face {
          font-family: 'Freesentation-9Black';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2404@1.0/Freesentation-9Black.woff2')
            format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'S-CoreDream-3Light';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff')
            format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'STUNNING-Bd';
          src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2410-2@1.0/STUNNING-Bd.woff2')
            format('woff2');
          font-weight: normal;
          font-style: normal;
        }

        body {
          font-family: 'Freesentation-9Black', sans-serif;
          color: ${theme.colors.white};
          width: 100%;
          height: 100%;
          overflow-y: scroll;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          position: relative;
        }

        p,
        span,
        div {
          font-family: 'S-CoreDream-3Light';
        }

        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: url(${backgroundImg}) no-repeat center center fixed;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          filter: brightness(0.2);
          z-index: -1;
        }

        h1,
        h2 {
          font-family: 'STUNNING-Bd', 'Roboto';
        }

        h3,
        h4,
        h5,
        h6 {
          font-family: 'Roboto', sans-serif;
        }

        a {
          text-decoration: none;
          color: none;
        }

        ul {
          list-style: none;
        }

        html {
          font-size: 16px;
          scroll-behavior: smooth;
        }

        button {
          border-radius: 8px;
          border: 1px solid transparent;
          padding: 0.6em 1.2em;
          font-size: 1em;
          font-weight: 500;
          font-family: inherit;
          background-color: #1a1a1a;
          color: none;
          transition: border-color 0.25s;
        }

        button:hover,
        a:hover {
          cursor: none;
        }

        button:focus,
        button:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }

        .scroll-bar {
          position: fixed;
          top: 95%;
          left: 50%;
          transform: translateX(-50%);
          width: 20%;
          height: 3px;
          background-color: ${theme.colors.white};
          z-index: 9;
          display: ${isLoading ? 'none' : 'block'};
        }

        .scroll-bar-progress {
          height: 100%;
          width: ${scrollPercentage}%;
          background-color: ${theme.colors.orange};
        }

        body::-webkit-scrollbar {
          height: 12px;
          width: 0px;
        }

        body::-webkit-scrollbar-thumb {
          background: ${theme.colors.orange};
          border-radius: 10px;
        }

        body::-webkit-scrollbar:vertical {
          display: none;
        }
      `}
    />
  )
}

export default GlobalStyles
