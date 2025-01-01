import React from 'react'
import { motion } from 'framer-motion'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const Project1: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <motion.h1
        css={textStyle}
        initial={{
          opacity: 0, y: 100
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          type: 'spring',
          delay: 0.1
        }}
        
      >
        프로젝트
      </motion.h1>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 19rem;
`

const textStyle = css`
  text-align: center;
  font-size: ${theme.fontSize.xxxl};
  color: ${theme.colors.orange};
`

export default Project1
