import css from '../Header/Header.module.css';
import styles from '../Footer/Footer.module.css';
import { navLinks } from '../NavMenu';
import classNames from 'classnames';

export default function Footer() {
  const navBar = () => {
    return (
      <nav className={classNames(css.nav, styles.footerNav)}>
        <ul className={css.navList}>
          {navLinks.map(({ link, text }) => (
            <li key={link}>
              <a
                href={link}
                className={classNames(
                  css.navListItem,
                  styles.navListItemCurrent
                )}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {navBar()}

        <h2 className={styles.footerTitle}>PORTFOLIO</h2>
        <p className={styles.footerSubtitle}>
          Copyright by Alexey Potapenko 2023
        </p>
      </div>
    </footer>
  );
}
