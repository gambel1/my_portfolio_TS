import css from '../About/About.module.css';
import sprite from '../../images/sprite.svg';
import technology270 from '../../images/technology270.jpg';
import technology354 from '../../images/technology354.jpg';
import technology450 from '../../images/technology450.jpg';

export default function About() {
  return (
    <>
      <section id="sectionAbout" className={css.about}>
        <div className="container">
          <div className={css.aboutWrap}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={`${technology270} 270w`}
                sizes="270px"
              />
              <source
                media="(min-width: 768px)"
                srcSet={`${technology354} 354w`}
                sizes="354px"
              />
              <source
                media="(max-width: 767px)"
                srcSet={`${technology450} 450w`}
                sizes="450px"
              />
              <img src={technology270} alt="MyPhoto" />
            </picture>
            <div className={css.aboutWrapBox}>
              <h2 className={css.aboutWrapBoxTitle}>Alexey Potapenko</h2>
              <p className={css.aboutWrapBoxItem}>
                Junior Full Stack Developer interested in developing both
                front-end and back-end software. The main feature is the desire
                to improve your skills and grow in the field of web development.
                My goal is to gain more experience, work on more complex
                projects and continue to learn.
              </p>
            </div>
          </div>
          <div>
            <h3 className={css.aboutSkillsTitle}>SKILLS</h3>
            <ul className={css.aboutSkillsGrid}>
              <li className={css.aboutSkillsList}>
                <svg className={css.aboutSkillsIcon}>
                  <use href={sprite + '#icon-html'}></use>
                </svg>
                HTML
              </li>
              <li className={css.aboutSkillsList}>
                <svg className={css.aboutSkillsIcon}>
                  <use href={sprite + '#icon-CSS'}></use>
                </svg>
                CSS
              </li>
              <li className={css.aboutSkillsList}>
                <svg className={css.aboutSkillsIcon}>
                  <use href={sprite + '#icon-JavaScript'}></use>
                </svg>
                JavaScript
              </li>
              <li className={css.aboutSkillsList}>
                <svg className={css.aboutSkillsIconCurrent}>
                  <use href={sprite + '#icon-react'}></use>
                </svg>
                React
              </li>
              <li className={css.aboutSkillsList}>
                <svg className={css.aboutSkillsIcon}>
                  <use href={sprite + '#icon-nodejs'}></use>
                </svg>
                Node.js
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
