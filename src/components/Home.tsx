import React from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'
import Puzzle from '../assets/puzzle.png'
import Puzzle2 from '../assets/puzzle2.png'
import Puzzle3 from '../assets/puzzle3.png'
import Puzzle4 from '../assets/puzzle4.png'

const Home: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <div className="content">
        {/* 왼쪽 텍스트 섹션 */}
        <div className="text-section">
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

        {/* 오른쪽 퍼즐 이미지 섹션 */}
        <div className="image-section">
          <div className="puzzle-container">
            <img
              src={Puzzle2}
              alt="puzzle"
              className="puzzle puzzle-2"
            />
            <img
              src={Puzzle3}
              alt="puzzle"
              className="puzzle puzzle-3"
            />
            <img
              src={Puzzle}
              alt="puzzle"
              className="puzzle puzzle-1"
            />
            <img
              src={Puzzle4}
              alt="puzzle"
              className="puzzle puzzle-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
const wrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 5vw;
  padding-top: 5vw;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: 10rem;
  }

  .text-section {
    flex: 1;
    text-align: left;

    h1 {
      font-size: ${theme.fontSize.xxxl};
      color: ${theme.colors.white};
      margin-bottom: 6vh;
    }

    p {
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.sm};
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
      display: block;
      margin-top: 20px;
    }
  }

  .image-section {
    flex: 1;
    position: relative;
    width: 300px;
    height: 600px;
    overflow: hidden;

    .puzzle-container {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .puzzle {
      position: absolute;
      width: 300px;
      height: auto;
    }

    .puzzle-2 {
      top: 16px;
      left: 5px;
      z-index: 2;
    }

    .puzzle-3 {
      top: 75px;
      left: 187px;
      z-index: 3;
    }

    .puzzle-1 {
      top: 205px;
      left: 14px;
      z-index: 1;
    }

    .puzzle-4 {
      top: 216px;
      left: 187px;
      z-index: 4;
    }
  }
`

export default Home
