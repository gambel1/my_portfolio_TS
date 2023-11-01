import css from '../../components/Modal/Modal.module.css';
import Contacts from '../Contacts/Contacts';
import sprite from '../../images/sprite.svg';
import cv from '../../cv.pdf';
import { createPortal } from 'react-dom';

interface IModalProps {
  setActive: (active: boolean) => void;
}

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ setActive }: IModalProps) {
  // Проверяем на Null
  if (!modalRoot) {
    return null;
  }

  const handleClickModal = () => {
    setActive(false);
  };

  return createPortal(
    <div className="container">
      <div className={css.backdrop} onClick={handleClickModal}>
        <div className={css.modal} onClick={e => e.stopPropagation()}>
          <button
            onClick={handleClickModal}
            className={css.modalButton}
            type="button"
          >
            <svg width="40px" height="40px">
              <use href={sprite + '#icon-close'}></use>
            </svg>
          </button>
          <h2 className={css.modalTitle}>Welcome to modal</h2>
          <Contacts />
          <ul className={css.modalWrapList}>
            <li>
              <a
                href="https://github.com/gambel1"
                target="_blank"
                rel="noreferrer noopener"
                className={css.modalWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-github'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexpotapenko/"
                target="_blank"
                rel="noreferrer noopener"
                className={css.modalWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-linkedin'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/gambel123"
                className={css.modalWrapLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-telegram'}></use>
                </svg>
              </a>
            </li>
          </ul>
          <a
            className={css.modalWrapButton}
            href={cv}
            download
            title="download_CV"
          >
            <svg width="25" height="25">
              <use href={sprite + '#icon-cv'}></use>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
