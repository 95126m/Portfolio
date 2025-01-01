import { css } from '@emotion/react'
import theme from '../styles/Theme'
import { motion } from 'framer-motion'

const About: React.FC = () => {
  return (
    <div css={wrapperStyle}>
      {/* 첫 번째 섹션 */}
      <motion.div
        className="first-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>프론트엔드</span>
          <span>에 빠지게 된 이유</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          멈춰있지 않은 반응형 이벤트 웹사이트를 보며, 웹사이트만으로도 사람의
          마음을 움직일 수 있는 것에 흥미를 느꼈습니다.
        </motion.p>
      </motion.div>

      {/* 두 번째 섹션 */}
      <motion.div
        className="second-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>새로운 것을 알아가는 </span>
          <span>즐거움</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          새로운 언어를 접하며 초반에는 눈앞이 어지러웠고, 협업을 하며
          팀원들에게 피해를 주면 안된다는 생각에 심적으로 불안했던 시기를
          겪었습니다.
          <br />
          하지만 새로운 라이브러리 혹은 흥미로운 애니메이션들의 향연에 배움이
          막연하게 스트레스로 다가오지 않았고, 오히려 더 흥미가 생겼던 것
          같습니다.
        </motion.p>
      </motion.div>

      {/* 세 번째 섹션 */}
      <motion.div
        className="third-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        viewport={{ once: false, amount: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span>팀</span>
          <span>이 주는 안정감</span>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          예전 근무지에서는 혼자서 근무했기에, 배울 수 있는 곳이 없었습니다.
          <br />
          하지만 프론트엔드라는 직군은 팀원이 존재하여 배울수도 있고, 의지,
          도움도 서로 나눌 수 있다는 점이 매력적으로 다가왔습니다.
          <br />저 또한 타인에게 도움을 줄 수 있다는 점이 어려운 공부를 잊게
          해주는 하나의 원동력이 된 것 같습니다.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default About

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 9rem 18vw;

  .first-section,
  .second-section,
  .third-section {
    margin-top: 80px;

    div {
      display: flex;
      gap: 8px;
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
