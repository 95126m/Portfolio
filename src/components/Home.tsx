import { css } from '@emotion/react'
import theme from '../styles/Theme'
import Puzzle from '../assets/puzzle.png'
import Puzzle2 from '../assets/puzzle2.png'
import Puzzle3 from '../assets/puzzle3.png'
import Puzzle4 from '../assets/puzzle4.png'
import { motion } from 'framer-motion'

const Home = () => {
  const puzzleAnimations = {
    puzzle1: {
      hidden: { x: '-100vw', rotate: -360, opacity: 0 },
      visible: {
        x: 14,
        y: 190,
        rotate: 0,
        opacity: 1,
        transition: {
          stiffness: 50,
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut'
        }
      }
    },
    puzzle2: {
      hidden: { y: '-100vh', rotate: 360, opacity: 0 },
      visible: {
        x: 5,
        y: 0,
        rotate: 0,
        opacity: 1,
        transition: {
          stiffness: 50,
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut'
        }
      }
    },
    puzzle3: {
      hidden: { x: '100vw', rotate: -360, opacity: 0 },
      visible: {
        x: 187,
        y: 58,
        rotate: 0,
        opacity: 1,
        transition: {
          stiffness: 50,
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut'
        }
      }
    },
    puzzle4: {
      hidden: { y: '100vh', rotate: 360, opacity: 0 },
      visible: {
        x: 187,
        y: 202,
        rotate: 0,
        opacity: 1,
        transition: {
          stiffness: 50,
          duration: 1.5,
          delay: 0.5,
          ease: 'easeInOut'
        }
      }
    }
  }

  return (
    <motion.div
      css={wrapperStyle}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}>
      <div className="content">
        {/* 왼쪽 텍스트 섹션 */}
        <div className="text-section">
          {/* h1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}>
            안녕하세요.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }}>
            어디에나 어우러질 수 있는 퍼즐같은
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeInOut' }}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: 'easeInOut' }}>
              프론트엔드
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease: 'easeInOut' }}>
              김영은입니다.
            </motion.h2>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 1.4, ease: 'easeInOut' }}>
            사용자의 이목을 끌 수 있는 매력적이고 유쾌한 사이트를 제작하고
            싶습니다.
            <br />
            포트폴리오 사이트를 방문해주셔서 감사합니다.
          </motion.span>
        </div>

        <div className="image-section">
          <div className="puzzle-container">
            <motion.img
              src={Puzzle2}
              alt="puzzle"
              className="puzzle puzzle-2"
              variants={puzzleAnimations.puzzle2}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src={Puzzle3}
              alt="puzzle"
              className="puzzle puzzle-3"
              variants={puzzleAnimations.puzzle3}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src={Puzzle}
              alt="puzzle"
              className="puzzle puzzle-1"
              variants={puzzleAnimations.puzzle1}
              initial="hidden"
              animate="visible"
            />
            <motion.img
              src={Puzzle4}
              alt="puzzle"
              className="puzzle puzzle-4"
              variants={puzzleAnimations.puzzle4}
              initial="hidden"
              animate="visible"
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Home

const wrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 24vh;
  padding-left: 18vw;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .text-section {
    flex: 1;
    text-align: left;

    h1 {
      font-size: ${theme.fontSize.xxxl};
      color: ${theme.colors.white};
      margin-bottom: 6vh;
    }

    h2 {
      font-weight: ${theme.fontWeight.bold};
      font-size: ${theme.fontSize.sm};
      color: ${theme.colors.gray};
      margin-bottom: 2vh;
    }

    div {
      display: flex;
      gap: 16px;

      h2 {
        margin: 0;
        font-weight: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize.lg};
        color: ${theme.colors.white};
      }

      h2:first-child {
        color: ${theme.colors.orange};
      }
    }

    span {
      font-size: ${theme.fontSize.xxxs};
      line-height: 1.8;
      color: ${theme.colors.white};
      display: block;
      margin-top: 40px;
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
      z-index: 2;
    }

    .puzzle-3 {
      z-index: 3;
    }

    .puzzle-1 {
      z-index: 1;
    }

    .puzzle-4 {
      z-index: 4;
    }
  }
`
