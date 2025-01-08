import { css } from '@emotion/react'
import React, { useState } from 'react'
import theme from '../styles/Theme'
import { motion, AnimatePresence } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import StyledCursor from './Cursor'

const About: React.FC = () => {
  const [openSection, setOpenSection] = useState<
    null | 'first' | 'second' | 'third'
  >(null)

  const handleOpen = (section: 'first' | 'second' | 'third') => {
    setOpenSection(prev => (prev === section ? null : section))
  }

  return (
    <>
      <StyledCursor />
      <div css={wrapperStyle}>
        {/* 첫 번째 섹션 */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <motion.div
            className="header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}>
            <div css={headerContentStyle}>
              <h2>프론트엔드</h2>
              <h2>에 빠지게 된 이유</h2>
              <motion.div
                onClick={() => handleOpen('first')}
                css={iconStyle}
                className="cursor-hover"
                animate={{ rotate: openSection === 'first' ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <KeyboardArrowDownIcon />
              </motion.div>
            </div>
          </motion.div>
          <AnimatePresence>
            {openSection === 'first' && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}>
                처음 관심을 갖게 된 계기는 단순한 우연이었습니다.
                <br />
                제가 좋아하는 게임은 매 이벤트마다 신선하고 재미있는 반응형
                웹사이트를 선보였고,
                <br />그 과정에서 코딩만으로 애니메이션을 구현할 수 있다는 점이
                저에게 큰 매력으로 다가왔습니다.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 두 번째 섹션 */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <motion.div
            className="header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}>
            <div css={headerContentStyle}>
              <h2>새로운 것</h2>
              <h2>에 대한 성취감</h2>
              <motion.div
                onClick={() => handleOpen('second')}
                css={iconStyle}
                className="cursor-hover"
                animate={{ rotate: openSection === 'second' ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <KeyboardArrowDownIcon />
              </motion.div>
            </div>
          </motion.div>
          <AnimatePresence>
            {openSection === 'second' && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}>
                새로운 언어를 배우며 느낀 성취감과 흥미는 저에게 큰 보람을
                주었습니다.
                <br />
                끊임없이 새로운 라이브러리와 기술이 등장하기 때문에 지속적인
                학습이 필수적입니다.
                <br />
                이러한 환경은 성취감을 중요하게 생각하는 제게 큰 동기부여가
                되었습니다.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* 세 번째 섹션 */}
        <motion.div
          className="section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}>
          <motion.div
            className="header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}>
            <div css={headerContentStyle}>
              <h2>함께</h2>
              <h2>만드는 가치</h2>
              <motion.div
                onClick={() => handleOpen('third')}
                css={iconStyle}
                className="cursor-hover"
                animate={{ rotate: openSection === 'third' ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                <KeyboardArrowDownIcon />
              </motion.div>
            </div>
          </motion.div>
          <AnimatePresence>
            {openSection === 'third' && (
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, delay: 0.1 }}>
                개발은 마라톤과 같습니다.
                <br />
                각 팀의 작업이 이어지는 개발에서는 역량과 책임감이 중요합니다.
                <br />
                팀워크를 통해 서로를 보완하며 긍정적인 시너지가 생깁니다.
                <br />이 경험들은 저에게 배움과 동기부여가 되었습니다.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  )
}

export default About

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 9rem 18vw;

  .section {
    margin-top: 7vh;
    line-height: 35px;
    height: 150px;

    p {
      font-size: ${theme.fontSize.xxxs};
      margin-top: 0;
    }
  }
`

const headerContentStyle = css`
  display: flex;
  align-items: center;
  gap: 8px;
  h2 {
    font-size: ${theme.fontSize.xs};
  }
  h2:first-child {
    color: ${theme.colors.orange};
  }
`

const iconStyle = css`
  cursor: pointer;
  font-size: 36px;

  &:hover {
    color: ${theme.colors.orange};
  }
`
