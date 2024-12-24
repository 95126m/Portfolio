import React from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'

const About: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      <div className="first-section">
        <div>
          <span>프론트엔드</span>
          <span>에 빠지게 된 이유</span>
        </div>
        <p>
          멈춰있지 않은 반응형 이벤트 웹사이트를 보며, 웹사이트만으로도 사람의
          마음을 움직일 수 있는 것에 흥미를 느꼈습니다.
        </p>
      </div>
      <div className="second-section">
        <div>
          <span>새로운 것을 알아가는 </span>
          <span>즐거움</span>
        </div>
        <p>
          새로운 언어를 접하며 초반에는 눈앞이 어지러웠고, 협업을 하며
          팀원들에게 피해를 주면 안된다는 생각에 심적으로 불안했던 시기를
          겪었습니다.
          <br />
          하지만 새로운 라이브러리 혹은 흥미로운 애니메이션들의 향연에 배움이
          막연하게 스트레스로 다가오지 않았고, 오히려 더 흥미가 생겼던 것
          같습니다.
        </p>
      </div>
      <div className="third-section">
        <div>
          <span>팀</span>
          <span>이 주는 안정감</span>
        </div>
        <p>
          예전 근무지에서는 혼자서 근무했기에, 배울 수 있는 곳이 없었습니다.
          <br />
          하지만 프론트엔드라는 직군은 팀원이 존재하여 배울수도 있고, 의지,
          도움도 서로 나눌 수 있다는 점이 매력적으로 다가왔습니다.
          <br />저 또한 타인에게 도움을 줄 수 있다는 점이 어려운 공부를 잊게
          해주는 하나의 원동력이 된 것 같습니다.
        </p>
      </div>
    </div>
  )
}

export default About

const wrapperStyle = css`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 5vw;
  padding-right: 5vw;

  .first-section {
    div {
      dispaly: flex;
      margin-top: 80px;
      span {
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.bold};
      }
      span:first-child {
        color: ${theme.colors.orange};
      }
    }
    p {
      font-size: ${theme.fontSize.xxxs};
      margin-top: 12px;
    }
  }

  .second-section {
    div {
      dispaly: flex;
      margin-top: 80px;
      span {
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.bold};
      }
      span:last-child {
        color: ${theme.colors.orange};
      }
    }
    p {
      font-size: ${theme.fontSize.xxxs};
      margin-top: 12px;
    }
  }
  .third-section {
    div {
      dispaly: flex;
      margin-top: 80px;
      span {
        font-size: ${theme.fontSize.xs};
        font-weight: ${theme.fontWeight.bold};
      }
      span:first-child {
        color: ${theme.colors.orange};
      }
    }
    p {
      font-size: ${theme.fontSize.xxxs};
      margin-top: 12px;
    }
  }
`
