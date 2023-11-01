import css from '../Home/Home.module.css';
import sprite from '../../images/sprite.svg';
import photo270 from '../../images/photo270.jpg';
import photo354 from '../../images/photo354.jpg';
import photo450 from '../../images/photo450.jpg';
import cv from '../../cv.pdf';
import { forwardRef } from 'react';

function Home() {
  return (
    <section id="sectionHome" className={css.home}>
      <div className="container">
        <div className={css.homeWrap}>
          <p className={css.homeWrapItem}>Full-Stack developer</p>

          <div>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${photo270} 270w`}
                sizes="270px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${photo354} 354w`}
                sizes="354px"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${photo450} 400w`}
                sizes="400px"
              />
              <img className={css.homeWrapImg} src={photo270} alt="MyPhoto" />
            </picture>
          </div>
          <h1 className={css.homeWrapTitle}>Alexey Potapenko</h1>
          <p className={css.homeWrapSubtitle}>
            I am a Junior Full-Stack developer
          </p>
          <ul className={css.homeWrapList}>
            <li>
              <a
                href="https://github.com/gambel1"
                target="_blank"
                rel="noreferrer noopener"
                className={css.homeWrapLink}
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
                className={css.homeWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-linkedin'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/gambel123"
                className={css.homeWrapLink}
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-telegram'}></use>
                </svg>
              </a>
            </li>
            <li>
              <a
                href={cv}
                download
                title="download_CV"
                className={css.homeWrapLink}
              >
                <svg width="25" height="25">
                  <use href={sprite + '#icon-cv'}></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default forwardRef(Home);
