import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import Puzzle from '../assets/puzzle.png'
import theme from '../styles/Theme'

interface LoadingProps {
  progress: number
}

const Loading: React.FC<LoadingProps> = ({ progress }) => {
  return (
    <div
      className="container"
      css={wrapperStyle}>
      <motion.img
        src={Puzzle}
        className="img"
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'circOut'
        }}
        animate={{
          y: -40
        }}
      />
      <motion.h2
        css={textStyle}
        animate={{
          color: [theme.colors.white, theme.colors.orange, theme.colors.orange],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >{Math.floor(progress)}%</motion.h2>
    </div>
  )
}

export default Loading

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1.5rem;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  .img {
    width: 7.5rem;
    height: 7.5rem;
    object-fit: cover;
    margin-left: 2rem;
  }
`

const textStyle = css`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.bold};
`
