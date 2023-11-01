import css from '../Portfolio/Portfolio.module.css';
import imageFinder from '../../images/imageFinder.jpg';
import mimino from '../../images/mimino.jpg';
import movies from '../../images/movies.jpg';
import news from '../../images/news.jpg';
import phonebook from '../../images/phonebook.jpg';
import portfolio from '../../images/portfolio.jpg';

import taskPro from '../../images/taskPro.jpg';
import test from '../../images/test.jpg';
import webstudio from '../../images/webstudio.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';

import {
  Navigation,
  Pagination,
  Scrollbar,
  EffectCoverflow,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

export default function Portfolio() {
  return (
    <section id="sectionPortfolio" className={css.portfolio}>
      <div className="container">
        <h2 className={css.portfolioTitle}>MY WORKS</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, EffectCoverflow]}
          effect={'coverFlow'}
          grabCursor={true}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          preventClicks={true}
          rewind={true}
          breakpoints={{
            // when window width is >= 576px
            0: { spaceBetween: 30, slidesPerView: 1 },
            // when window width is >= 768px
            768: { spaceBetween: 40, slidesPerView: 2 },
            // when window width is >= 1024px
            1440: {
              spaceBetween: 50,
              slidesPerView: 3,
            },
          }}
          className="swiper_container"
        >
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-04-images/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={imageFinder} alt="PictureFinder" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-05-movies/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={movies} alt="Movies finder" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/taskProjectFront/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={taskPro} alt="Task Pro application" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://gambel1.github.io/news-site/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={news} alt="News site" />
            </a>
          </SwiperSlide>

          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-react-hw-08-phonebook/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={phonebook} alt="Phonebook registration" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/testGoIT/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={test} alt="Tweets application" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/my_portfolio/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={portfolio} alt="Portfolio" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/mimino-project-13/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={mimino} alt="Mimino restaurant" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a
              href="https://gambel1.github.io/goit-markup-hw-08/index.html"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={webstudio} alt="Webstudio" />
            </a>
          </SwiperSlide>

          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </Swiper>
      </div>
    </section>
  );
}
