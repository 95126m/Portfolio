import { useState } from 'react'
import { css } from '@emotion/react'
import theme from '../styles/Theme'
import { motion } from 'framer-motion'
import EmailIcon from '@mui/icons-material/Email'
import DraftsIcon from '@mui/icons-material/Drafts'

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const handleEmailClick = () => {
    window.location.href = 'mailto:95126m@naver.com'
  }

  return (
    <div css={wrapperStyle}>
      <div className="content">
        <motion.div
          className="wrapper"
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
          <motion.h1
            animate={{
              color: [theme.colors.white, theme.colors.orange, theme.colors.orange],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >감사합니다!</motion.h1>
          <p>
            제자리에 머무는 것이 아닌 발전을 위해 새로운 시도와 배움을 꾸준히
            하는 개발자가 되고싶습니다.
          </p>
          <div
            css={iconWrapperStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleEmailClick}>
            {isHovered ? (
              <DraftsIcon css={emailIconStyle} />
            ) : (
              <EmailIcon css={emailIconStyle} />
            )}
          </div>
        </motion.div>
      </div>
      <div className="last-section">
        <span>본 사이트는 포트폴리오용으로 제작되었습니다.</span>
      </div>
    </div>
  )
}

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100vh;

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    h1 {
      padding-bottom: 20px;
      font-size: ${theme.fontSize.xxl};
    }
    p {
      padding-bottom: 20px;
      font-size: ${theme.fontSize.xxxs};
    }
  }

  .last-section {
    margin-top: auto;
    padding: 10px 0;
    span {
      font-size: 14px;
      color: ${theme.colors.gray};
    }
  }
`

const iconWrapperStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const emailIconStyle = css`
  font-size: ${theme.fontSize.md};
`

export default Contact
