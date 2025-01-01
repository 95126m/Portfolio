import { css } from '@emotion/react';
import theme from '../styles/Theme';
import Puzzle from '../assets/puzzle.png';
import Puzzle2 from '../assets/puzzle2.png';
import Puzzle3 from '../assets/puzzle3.png';
import Puzzle4 from '../assets/puzzle4.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  // 스크롤 값 가져오기
  const { scrollY } = useScroll();

  // 스크롤 값을 투명도에 매핑
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // 부모 컨테이너 애니메이션 설정
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
  };

  // 각 퍼즐 이미지의 애니메이션 설정
  const puzzleAnimations = {
    puzzle1: {
      hidden: { x: '-100vw', rotate: -180, opacity: 0 },
      visible: {
        x: 14,
        y: 205,
        rotate: 0,
        opacity: 1,
        transition: { stiffness: 50, duration: 1 },
      },
    },
    puzzle2: {
      hidden: { y: '-100vh', rotate: 180, opacity: 0 },
      visible: {
        x: 5,
        y: 16,
        rotate: 0,
        opacity: 1,
        transition: { stiffness: 50, duration: 1 },
      },
    },
    puzzle3: {
      hidden: { x: '100vw', rotate: -180, opacity: 0 },
      visible: {
        x: 187,
        y: 75,
        rotate: 0,
        opacity: 1,
        transition: { stiffness: 50, duration: 1 },
      },
    },
    puzzle4: {
      hidden: { y: '100vh', rotate: 180, opacity: 0 },
      visible: {
        x: 187,
        y: 216,
        rotate: 0,
        opacity: 1,
        transition: { stiffness: 50, duration: 1 },
      },
    },
  };

  return (
    <motion.div css={wrapperStyle} style={{ opacity }}>
      <motion.div
        className="content"
        variants={container}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 왼쪽 텍스트 섹션 */}
        <div className="text-section">
          <motion.h1 variants={container}>환영합니다!</motion.h1>
          <motion.p variants={container}>
            어디에나 어우러질 수 있는 퍼즐같은
          </motion.p>
          <motion.div variants={container}>
            <span>프론트엔드</span>
            <span>김영은입니다.</span>
          </motion.div>
          <motion.span variants={container}>
            사용자의 이목을 끌 수 있는 매력적이고 유쾌한 사이트를 제작하고
            싶습니다.
            <br />
            포트폴리오 사이트를 방문해주셔서 감사합니다.
          </motion.span>
        </div>

        {/* 오른쪽 퍼즐 이미지 섹션 */}
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
      </motion.div>
    </motion.div>
  );
};

// 스타일 정의
const wrapperStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-left: 5vw;

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
`;

export default Home;
