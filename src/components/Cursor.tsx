import React, { useEffect } from 'react'
import { css } from '@emotion/react'

const Cursor: React.FC = () => {
  useEffect(() => {
    const cursor = document.createElement('div')
    cursor.id = 'custom-cursor'
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('button, a')) {
        cursor.classList.add('hover')
      } else {
        cursor.classList.remove('hover')
      }
    }

    document.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseover', handleHover)
    document.addEventListener('mouseout', handleHover)

    return () => {
      document.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseover', handleHover)
      document.removeEventListener('mouseout', handleHover)
      cursor.remove()
    }
  }, [])

  return null
}

const cursorStyle = css`
  body {
    cursor: none;
  }

  #custom-cursor {
    position: fixed;
    width: 14px;
    height: 14px;
    background-color: rgba(255, 165, 0, 0.8);
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: 9999;
    mix-blend-mode: difference;
    transition: background-color 0.2s ease, transform 0.1s ease-out;
  }

  #custom-cursor.hover {
    background-color: rgba(0, 102, 255, 0.8); 
    transform: scale(1.5);
  }
`

const StyledCursor = () => (
  <>
    <style>{cursorStyle.styles}</style>
    <Cursor />
  </>
)

export default StyledCursor
