import React from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const Project3: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <div css={contentStyle}>
        <div className="text-section">
          <div className="first-section">
            <p>MOBILE</p>
            <h1>MAZI</h1>
            <span>운동 영상 공유 SNS 플랫폼</span>
            <p>2024.09.02 - 2024.09.27</p>
          </div>
          <div className="second-section">
            <h2>프로젝트 인원</h2>
            <span>프론트엔드 4명</span>
          </div>
          <div className="third-section">
            <h2>기술스택</h2>
            <div>
              <span>React</span>
              <span>Typescript</span>
              <span>Zustand</span>
              <span>Tanstack-Query</span>
              <span>Vite</span>
              <span>Axios</span>
              <span>Emotion</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="fourth-section">
            <h2>작업 기여도</h2>
            <li>
              여러 팀원들의 중도하차에도 흔들림 없이 작업하여 프로젝트 진행에
              차질이 생기지 않도록 하였습니다.
            </li>
            <li>
              와이어프레임을 디테일하게 작업하여 디자인 작업의 시간을
              앞당겼습니다.
            </li>
            <li>
              유저플로우를 최대한 상세하게 제작하여 작업 진행에 있어 수월하도록
              하였습니다.
            </li>
          </div>
          <div css={buttonWrapperStyle}>
            <a
              href="https://sysmetic.kr/"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}>
              웹사이트 보기
            </a>
            <a
              href="https://github.com/95126m/BeginAgain"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}>
              깃허브
            </a>
          </div>
        </div>
        <div className="image-section">
          <div css={imageStyle}>이미지 삽입</div>
          <div>
            <div css={subImageStyle}>이미지 삽입</div>
            <div css={subImageStyle}>이미지 삽입</div>
            <div css={subImageStyle}>이미지 삽입</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 4rem;
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
  height: 350px;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs};
`

const subImageStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(33.33% - 10px);
  height: 150px;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
  font-size: ${theme.fontSize.xs};
`

export default Project3