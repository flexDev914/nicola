import {
  facebook,
  gameImg,
  habr,
  linkedin,
  telegram,
  vcru,
  x,
  youtube_dark,
  telegram1, vcru1, habr1, facebook1, linkedin1, x1, youtube_dark1
} from ".";

import vcruImg from "../assets/icon/vcru.png";
import youtubeImg from "../assets/icon/youtube.png";
import habrImg from "../assets/icon/habr.png";
import car1Img from "../assets/car1.png";
import car2Img from "../assets/car2.png";
import car3Img from "../assets/car3.png";
import car4Img from "../assets/car4.png";
import car5Img from "../assets/car5.png";
import car6Img from "../assets/car6.png";
import eyeImg from "../assets/icon/eye.png";
import heartImg from "../assets/icon/heart.png";
import circleImg from "../assets/icon/circle.png";
import rectImg from "../assets/icon/rect.png";

import swiper1 from "../assets/swiper1.png";
import swiper2 from "../assets/swiper2.png";

import slide1 from '../assets/slide/slide1.png'
import slide2 from '../assets/slide/slide2.png'
import slide3 from '../assets/slide/slide3.png'
import slide4 from '../assets/slide/slide4.png'
import slide5 from '../assets/slide/slide5.png'
import slide6 from '../assets/slide/slide6.png'
import slide7 from '../assets/slide/slide7.png'
import slide8 from '../assets/slide/slide8.png'
import slide9 from '../assets/slide/slide9.png'
import slide10 from '../assets/slide/slide10.png'
import slide11 from '../assets/slide/slide11.png'
import slide12 from '../assets/slide/slide12.png'
import slide13 from '../assets/slide/slide13.png'
import slide14 from '../assets/slide/slide14.png'
import slide15 from '../assets/slide/slide15.png'
import slide16 from '../assets/slide/slide16.png'

const publicationCards = [
  {
    purpleText: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    title: "5 dolor",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo ligula eget",
  },
  {
    purpleText: "Lorem ipsum dolor sit",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
    title: "amet",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo",
  },
  {
    purpleText: "Lorem ipsum dolor",
    text: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo`,
    title: "13 sit",
    content: "Lorem ipsum dolor sit '\n amet, consectetuer adipiscing elit",
  },
  {
    purpleText: "опишите задачу",
    text: "Отправляя форму, вы соглашаетесь  на обработку персоналных",
    title: "a 7 adipiscing",
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit Aenean commodo eget",
  },
];

const userDescriptionDatas = [
  {
    count: 20,
    title: " + ",
    content: ["Lorem", "Ipsum Dolor"],
  },
  {
    count: 50,
    title: " + ",
    content: ["Consectetuer", "adipiscing"],
  },
  {
    count: 187,
    title: " + sit",
    content: ["Lorem", "Ipsum Dolor"],
  },
  {
    count: 5,
    title: "amet",
    content: ["Consectetuer", "adipiscing"],
  },
  {
    count: 30,
    title: " + ",
    content: ["Lorem", "Ipsum Dolor"],
  },
];

const carLocationList = [
  {
    title: "The More Important the Work, the More Important the Rest",
    date: "29 февраля 2024",
    briefDescription:
      "Physiological respiration involves the mechanisms that ensure that the composition of the functional",
    image: car1Img,
    platform: vcruImg,
    linkTitle: "Читать на VC",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
  {
    title: "The More Important the Work, the More Important the Rest",
    date: "27 декабря 2023",
    briefDescription:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves",
    image: car2Img,
    platform: vcruImg,
    linkTitle: "Читать на VC",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
  {
    title: "How to design a product that can grow itself 10x in year:",
    date: "21 декабря 2023",
    briefDescription:
      "For athletes, high altitude produces two contradictory effects on performance. For explosive events ",
    image: car3Img,
    platform: vcruImg,
    linkTitle: "Читать на VC",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
  {
    title: "The More Important the Work, the More Important the Rest",
    date: "13 декабря 2023",
    briefDescription:
      "Maxwell's equations—the foundation of classical electromagnetism—describe light as a wave that moves",
    image: car4Img,
    platform: youtubeImg,
    linkTitle: "Cмотреть на YouTube",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
  {
    title: "The More Important the Work, the More Important the Rest",
    date: "7 октября 2023",
    briefDescription:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
    image: car5Img,
    platform: habrImg,
    linkTitle: "Читать на Habr",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
  {
    title:
      "Understanding color theory: the color wheel and finding complementary colors",
    date: "22 марта 2024",
    briefDescription:
      "The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a s",
    image: car6Img,
    platform: habrImg,
    linkTitle: "Читать на Habr",
    views: eyeImg,
    viewsNum: "16к",
    likes: heartImg,
    likesNum: "48",
    comments: circleImg,
    commentsNum: "21",
    favourites: rectImg,
    favouritesNum: "3",
  },
];

const historyBox = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: gameImg,
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
  {
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget",
    imgUrl: "",
    date: "22.02.2024",
  },
];

const myCustomers = [
  {
    name: "Cameron Williamson",
    position: "Управляющий партнёр компании",
    image: swiper1,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut",
  },
  {
    name: "Cameron Williamson",
    position: "Управляющий партнёр компании",
    image: swiper2,
    content:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut",
  },
];

const circleIcon = [
  {
    image: telegram,
    url: 'https://web.telegram.org'
  },
  {
    image: vcru,
    url: 'https://vc.ru/'
  },
  {
    image: habr,
    url: 'https://habr.com/ru/articles/'
  },
  {
    image: facebook,
    url: 'https://www.facebook.com/'
  },
  {
    image: linkedin,
    url: 'https://ru.linkedin.com/'
  },
  {
    image: x,
    url: 'https://twitter.com'
  },
  {
    image: youtube_dark,
    url: 'https://www.youtube.com/'
  }
];

const circle1Icon = [telegram1, vcru1, habr1, facebook1, linkedin1, x1, youtube_dark1]

const smallAvatar = [
  {
    url: "./assets/smallAvatar1.png",
    title: "Lorem",
    images:[
      slide1,slide2,slide3,slide4
    ]
  },
  {
    url: "./assets/smallAvatar2.png",
    title: "Ipsum",
   images:[
      slide5,slide6,slide7,slide8
    ]
  },
  {
    url: "./assets/smallAvatar3.png",
    title: "Sit amet",
   images:[
      slide9,slide10,slide11,slide12
    ]
  },
  {
    url: "./assets/smallAvatar4.png",
    title: "Consectetuer",
    images:[
      slide13,slide14,slide15,slide16
    ]
  },
];

export {
  publicationCards,
  userDescriptionDatas,
  carLocationList,
  circleIcon,
  historyBox,
  myCustomers,
  circle1Icon,
  smallAvatar,
};
