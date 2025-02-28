import { useState } from "react";
import { css } from "@emotion/react";
import { motion } from "framer-motion";
import theme from "../styles/Theme";
import Modal from "../components/Modal";
import image1 from "../assets/sysmetic1.png";
import video1 from "../assets/symetic.mp4";

const modalMedia = [image1, video1];

const Project2: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = () => {
    setCurrentIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevMedia = () => {
    setCurrentIndex((prev) => (prev === 0 ? modalMedia.length - 1 : prev - 1));
  };

  const nextMedia = () => {
    setCurrentIndex((prev) => (prev === modalMedia.length - 1 ? 0 : prev + 1));
  };

  return (
    <div css={wrapperStyle}>
      <div css={contentStyle}>
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <div className="first-section">
            <p>WEB</p>
            <h1>SYSMETIC</h1>
            <span>투자 매매 전략 공유 플랫폼 서비스</span>
            <p>2024.10.23 - 2024.12.12</p>
          </div>
          <div className="second-section">
            <h2>프로젝트 인원</h2>
            <span>UI/UX 디자이너 1명</span>
            <span>백엔드 7명</span>
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
            </div>
          </div>
          <div className="fourth-section">
            <h2>작업 기여도</h2>
            <li>맡은 작업량을 기한보다 빠르게 완료한 후, 다른 팀원들의 작업을 지원했습니다.</li>
            <li>공통 컴포넌트를 다양한 상황에 쉽게 적용할 수 있도록 세분화했습니다.</li>
            <li>백엔드 요구사항을 적극적으로 수용하고 협력했습니다.</li>
            <li>유저 플로우를 상세하게 설계해 개발을 원활하게 진행했습니다.</li>
          </div>
          <div css={buttonWrapperStyle}>
            <a
              href="https://github.com/95126m/FinalProject_Be3C_FE"
              target="_blank"
              rel="noopener noreferrer"
              css={buttonStyle}
            >
              깃허브
            </a>
          </div>
        </motion.div>

        <motion.div
          className="image-section"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 1 }}
        >
          <img
            src={image1}
            alt="thumbnail"
            css={imageStyle}
            onClick={openModal}
          />
        </motion.div>
      </div>

      {isModalOpen && (
        <Modal
          images={modalMedia}
          currentIndex={currentIndex}
          onClose={closeModal}
          onPrev={prevMedia}
          onNext={nextMedia}
        />
      )}
    </div>
  );
};

export default Project2;
const wrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 10rem;
`;

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
`;

const buttonWrapperStyle = css`
  display: flex;
  gap: 16px;
  justify-content: flex-start;
  margin-top: 20px;
`;

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
`;

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
  cursor: pointer;

  &:hover {
    filter: brightness(1);
    transform: scale(1.05);
  }
`;
