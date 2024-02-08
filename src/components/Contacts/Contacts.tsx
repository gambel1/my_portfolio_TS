import css from '../Contacts/Contacts.module.css';
import sprite from '../../images/sprite.svg';

interface IContactsProps {
  title?: string;
}

export default function Contacts({ title }: IContactsProps) {
  return (
    <section id="sectionContacts" className={css.contact}>
      <div className="container">
        <h3 className={css.contactTitle}>{{ title } ? title : null}</h3>
        <address className={css.address}>
          <ul>
            <li className={css.addressBox}>
              <h4 className={css.addressSubtitle}>Location</h4>
              <p className={css.addressItem}>
                <svg width="22" height="24">
                  <use href={sprite + '#icon-location'}></use>
                </svg>
                Kyiv, Ukraine
              </p>
            </li>
            <li className={css.addressBox}>
              <h4 className={css.addressSubtitle}>Telegram / Contact number</h4>
              <a
                className={css.addressLink}
                href="tel:+380960164016"
                rel="noreferrer noopener"
              >
                <svg style={{ marginRight: '5px' }} width="12" height="17">
                  <use href={sprite + '#icon-tel'}></use>
                </svg>
                096 016 4 016
              </a>
            </li>
            <li className={css.addressBox}>
              <h4 className={css.addressSubtitle}>Email</h4>
              <a className={css.addressLink} href="mailto:electrifyx@gmail.com">
                <svg style={{ marginRight: '5px' }} width="16" height="12">
                  <use href={sprite + '#icon-mail'}></use>
                </svg>
                electrifyx@gmail.com
              </a>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
