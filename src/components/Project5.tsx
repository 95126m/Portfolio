import React from 'react'
import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import image1 from '../assets/designer-portfolio.jpg'
import theme from '../styles/Theme'

const Project5: React.FC = () => {
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
            <h1>PORTFOLIO</h1>
            <span>포트폴리오 사이트</span>
            <p>2025.02.12 - 2025.02.28</p>
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
              <span>Vite</span>
              <span>Emotion</span>
              <span>Styled-components</span>
            </div>
          </div>
          <div className="fourth-section">
            <h2>작업 기여도</h2>
            <li>
              유려한 애니메이션 효과를 적용하여 각 섹션이 자연스럽게 전환되도록
              디자인의 완성도를
              <br />
              극대화하였습니다.
            </li>
            <li>
              새로운 스타일의 디자인을 탐구하며, 세련된 스타일링과 정교한 필터
              효과를 추가하여
              <br />
              시각적 완성도를 향상시켰습니다.
            </li>
            <li>
              유지보수성을 극대화하기 위해 직관적이고 체계적인 변수명을
              도입하였으며, 섹션별 구획을
              <br />
              명확히 분할하여 체계적으로 구성하였습니다.
            </li>
          </div>
          <div css={buttonWrapperStyle}>
            <a
              href="https://portfolio-designer-three.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}>
              웹사이트 보기
            </a>
            <a
              href="https://github.com/95126m/portfolio-designer"
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
      line-height: 30px;
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
  height: 500px;
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

export default Project5
