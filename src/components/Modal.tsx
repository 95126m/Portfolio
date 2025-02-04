import { css } from '@emotion/react'
import { motion } from 'framer-motion'
import theme from '../styles/Theme'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

interface ModalProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

const Modal: React.FC<ModalProps> = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext
}) => {
  const isVideo = images[currentIndex].endsWith('.mp4')

  return (
    <div
      css={modalOverlayStyle}
      onClick={onClose}>
      <motion.div
        css={modalContentStyle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}>
        {isVideo ? (
          <video
            css={modalMediaStyle}
            controls
            autoPlay>
            <source
              src={images[currentIndex]}
              type="video/mp4"
            />
            브라우저가 비디오 태그를 지원하지 않습니다.
          </video>
        ) : (
          <img
            src={images[currentIndex]}
            alt={`modal-img-${currentIndex}`}
            css={modalMediaStyle}
          />
        )}

        <button
          css={prevButtonStyle}
          onClick={onPrev}>
          <ArrowBackIosIcon fontSize="large" />
        </button>
        <button
          css={nextButtonStyle}
          onClick={onNext}>
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </motion.div>
    </div>
  )
}

export default Modal

const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const modalContentStyle = css`
  background-color: ${theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 1200px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const modalMediaStyle = css`
  max-width: 100%;
  max-height: 80vh;
  border-radius: 6px;
`

const prevButtonStyle = css`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: transparent;
  border: none;
  color: ${theme.colors.orange};
  cursor: pointer;
  outline: none;
  box-shadow: none;
  user-select: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    background: transparent;
    box-shadow: none;
  }
`

const nextButtonStyle = css`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 40px;
  background: transparent;
  border: none;
  color: ${theme.colors.orange};
  cursor: pointer;
  outline: none;
  box-shadow: none;
  user-select: none;

  &:focus,
  &:active {
    outline: none;
    border: none;
    background: transparent;
    box-shadow: none;
  }
`
