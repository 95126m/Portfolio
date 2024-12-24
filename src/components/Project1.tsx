import React from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const Project1: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <h1 css={textStyle}>프로젝트</h1>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`

const textStyle = css`
  text-align: center;
  font-size: ${theme.fontSize.xxxl};
  color: ${theme.colors.orange};
`

export default Project1
