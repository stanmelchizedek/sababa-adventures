import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener( 'DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        slidesPerGroup: 1,
        breakpoints: {
            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 8
            },
            640: {
                spaceBetween: 16,
                slidesPerGroup: 2,
                slidesPerView: 2,
            },
            1024: {
                spaceBetween: 16
            },
            1280: {
                spaceBetween: 20,
            }
        }
      });
});