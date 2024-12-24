import React, { useState } from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const Skill: React.FC = () => {
  const [tabMenu, setTabMenu] = useState(0)

  const handleTabChange = (index: number) => {
    setTabMenu(index)
  }

  return (
    <div css={wrapperStyle}>
      <div className="title">
        <div>
          <span>이런</span>&nbsp;&nbsp;&nbsp;
          <span>기술</span>
          <span>들을 사용해봤습니다.</span>
        </div>
      </div>

      <div className="tab-container">
        {['언어', '프론트엔드', '백엔드', '디자인', '기타'].map(
          (tab, index) => (
            <div key={index} className="tab-group">
              <button
                onClick={() => handleTabChange(index)}
                css={tabMenuStyle(index === tabMenu)}
              >
                {tab}
              </button>
              {tabMenu === index && (
                <div className="tab-content">
                  {index === 0 && (
                    <>
                      <p>HTML5</p>
                      <p>CSS</p>
                      <p>SCSS</p>
                      <p>Javascript</p>
                      <p>Typescript</p>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p>React</p>
                      <p>Zustand</p>
                      <p>Emotion</p>
                    </>
                  )}
                  {index === 2 && <p>Firebase</p>}
                  {index === 3 && (
                    <>
                      <p>Figma</p>
                      <p>Photoshop</p>
                      <p>Illustrator</p>
                      <p>Shotcut</p>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <p>Git</p>
                      <p>GitHub</p>
                      <p>Netlify</p>
                      <p>Vercel</p>
                    </>
                  )}
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  .title {
    margin-bottom: 4rem;
    text-align: center;

    div {
      display: flex;
      justify-content: center;

      span {
        font-size: ${theme.fontSize.lg};
        font-weight: ${theme.fontWeight.bold};
      }

      span:nth-child(2) {
        color: ${theme.colors.orange};
      }
    }
  }

  .tab-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    width: 100%;
  }

  .tab-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .tab-group button {
    background: none;
    font-size: ${theme.fontSize.xxs};
    font-weight: ${theme.fontWeight.bold};
    cursor: pointer;
    outline: none;
    border: none;
    padding: 0.5rem 1rem;
    text-align: center;
    transition: color 0.5s ease;
  }

  .tab-content {
    font-size: ${theme.fontSize.xxxs};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    min-height: 250px;
    overflow-y: auto;
    padding: 1rem;
  }
`

const tabMenuStyle = (isActive: boolean) => css`
  color: ${isActive ? theme.colors.orange : theme.colors.gray};
  transition: color 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
  padding-bottom: 0.5rem;

  &:focus {
    outline: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${isActive ? '50%' : '0'};
    height: 3px;
    background-color: ${isActive ? theme.colors.orange : 'transparent'};
    transition:
      width 0.5s ease-in-out,
      background-color 0.5s ease-in-out;
  }

  &:hover {
    color: ${theme.colors.orange};
  }
`

export default Skill
