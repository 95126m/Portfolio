import React from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import image1 from '../assets/daldalog1.jpg'
import theme from '../styles/Theme'

const Project4: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <motion.div
        css={contentStyle}
        initial={{
          opacity: 0,
          x: -200
        }}
        whileInView={{
          opacity: 1,
          x: 0
        }}
        transition={{
          type: 'spring',
          delay: 1
        }}>
        <div className="text-section">
          <div className="first-section">
            <p>WEB</p>
            <h1>DALDALOG</h1>
            <span>콘텐츠 퍼블리싱 플랫폼 (블로그)</span>
            <p>2025.01.10 - 2025.02.03</p>
          </div>
          <div className="second-section">
            <h2>프로젝트 규모</h2>
            <span>개인 프로젝트</span>
          </div>
          <div className="third-section">
            <h2>기술스택</h2>
            <div>
              <span>React</span>
              <span>Typescript</span>
              <span>Zustand</span>
              <span>Vite</span>
              <span>Emotion</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="fourth-section">
            <h2>작업 기여도</h2>
            <li>
              Zustand를 활용하여 코드의 가독성을 개선하고, 유지보수성을
              향상시켰습니다.
            </li>
            <li>
              게시글뿐만 아니라 Todos 및 Scheduler 기능을 추가하여 블로그의
              활용성을 극대화하고, 사용자 경험을 확장했습니다.
            </li>
            <li>
              Grid 레이아웃과 애니메이션 효과를 적용하여 디자인 완성도를 높이고,
              시각적인 몰입감을 강화했습니다.
            </li>
          </div>
          <div css={buttonWrapperStyle}>
            <a
              href="https://daldalog.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}>
              웹사이트 보기
            </a>
            <a
              href="https://github.com/95126m/Daldalog"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}>
              깃허브
            </a>
          </div>
        </div>
        <motion.div
          className="image-section"
          initial={{
            opacity: 0,
            x: 200
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          transition={{
            type: 'spring',
            delay: 1
          }}>
          <img
            src={image1}
            alt="img1"
            css={imageStyle}></img>
        </motion.div>
      </motion.div>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 10rem;
`

const contentStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;

  .text-section {
    flex: 1;
    text-align: left;
    padding: 20px;
  }

  .image-section {
    flex: 1;
    text-align: right;
    padding: 20px;
    align-self: center;
    > div {
      display: flex;
      gap: 10px;
      margin-top: 10px;
    }
  }

  .first-section,
  .second-section,
  .third-section,
  .fourth-section {
    margin-bottom: 28px;
  }

  .first-section {
    h1 {
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 10px;
    }
    span {
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.bold};
    }
    p {
      font-size: ${theme.fontSize.xxxxs};
    }
    p:first-child {
      color: ${theme.colors.orange};
    }
  }

  .second-section {
    h2 {
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.bold};
    }
    span {
      display: flex;
      flex-direction: column;
      font-size: ${theme.fontSize.xxxxs};
    }
  }

  .third-section {
    h2 {
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.bold};
      margin-bottom: 10px;
    }
    div {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    span {
      font-size: ${theme.fontSize.xxxxs};
      border: 1px solid ${theme.colors.white};
      border-radius: 50px;
      padding: 5px 10px;
    }
  }

  .fourth-section {
    h2 {
      font-size: ${theme.fontSize.xs};
      font-weight: ${theme.fontWeight.bold};
    }
    li {
      font-size: ${theme.fontSize.xxxxs};
    }
  }
`

const buttonWrapperStyle = css`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 20px;
`

const buttonStyle = css`
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background-color: transparent;
  color: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  padding: 10px 20px;

  border-radius: 0;
  cursor: pointer;

  &:hover {
    border: 1px solid ${theme.colors.orange};
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.colors.orange};
  }
`

const imageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  border-radius: 6px;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs};
  object-fit: cover;
  z-index: 2;
  position: relative;
  filter: brightness(0.2);
  transition: 0.5s;
  &:hover {
    filter: brightness(1);
    transform: scale(1.05);
  }
`

export default Project4
