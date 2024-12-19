import { Global, css } from '@emotion/react'
import { useEffect, useState } from 'react'
import theme from './Theme'

const GlobalStyles = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0)

  // 스크롤 이벤트 핸들러
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
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Arial', sans-serif;
          background-color: ${theme.colors.background};
          color: ${theme.colors.white};
          height: 100%;
          width: 100%;
          overflow-x: hidden;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Roboto', sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul {
          list-style: none;
        }

        html {
          font-size: 16px;
          height: 100%;
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
          cursor: pointer;
          transition: border-color 0.25s;
        }

        button:focus,
        button:focus-visible {
          outline: 4px auto -webkit-focus-ring-color;
        }

        .scroll-bar {
          position: fixed;
          bottom: 6vh;
          left: 50%;
          transform: translateX(-50%);
          width: 20%;
          height: 3px;
          background-color: ${theme.colors.white};
          z-index: 9;
        }

        .scroll-bar-progress {
          height: 100%;
          width: ${scrollPercentage}%;
          background-color: ${theme.colors.orange};
        }
      `}
    />
  )
}

export default GlobalStyles
