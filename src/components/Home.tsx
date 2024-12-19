import React from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const Home: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <div className="wrapper">
        <h1>환영합니다!</h1>
        <p>어디에나 어우러질 수 있는 퍼즐같은</p>
        <div>
          <span>프론트엔드</span>
          <span>김영은입니다.</span>
        </div>
        <span>
          사용자의 이목을 끌 수 있는 매력적이고 유쾌한 사이트를 제작하고
          싶습니다.
          <br />
          포트폴리오 사이트를 방문해주셔서 감사합니다.
        </span>
      </div>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 100%;
  padding-left: 5vw;
  padding-top: 14vh;

  .wrapper {
    width: 100%;

    h1 {
      font-size: ${theme.fontSize.xxxl};
      color: ${theme.colors.white};
      margin-bottom: 6vh;
    }

    p {
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.sm};
      margin: 10px 0;
      color: ${theme.colors.gray};
    }

    div {
      display: flex;
      gap: 16px;
      span {
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize.lg};
      }
      span:first-child {
        color: ${theme.colors.orange};
      }
    }

    span {
      font-size: ${theme.fontSize.xxxs};
      line-height: 1.8;
      color: ${theme.colors.white};
    }
  }
`

export default Home
