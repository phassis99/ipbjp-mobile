import { Carousel } from "antd";

import BannerCarousel from "../../components/news-carousel/news-carousel.component";
import styles from "./home.module.scss";
const Home = () => {
  const slideContent = [
    {
      id: 1,
      title: "Spring Blooms",
      text: "Experience the beauty of spring with blooming flowers.",
      imgUrl: "https://images.unsplash.com/photo-1458571037713-913d8b481dc6",
      bgColor: "#364d79",
    },
    {
      id: 2,
      title: "Summer Beach",
      text: "Relax at the beach this summer and soak in the sun.",
      imgUrl: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      bgColor: "#6b5b95",
    },
    {
      id: 3,
      title: "Autumn Foliage",
      text: "Enjoy the spectacular colors of fall leaves.",
      imgUrl: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6",
      bgColor: "#d64161",
    },
    {
      id: 4,
      title: "Winter Snow",
      text: "Witness a winter wonderland and enjoy the snow.",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1669704840027-c6505ad70cbd",
      bgColor: "#ff7b25",
    },
  ];

  return (
    <div className={styles.Home}>
      <BannerCarousel />
      <div className="w-full">
        <Carousel autoplay>
          {slideContent.map((slide) => (
            <div className={styles.carouselCard} key={slide.id}>
              <img
                src={slide.imgUrl}
                alt={slide.title}
                className={styles.carouselImage}
              />
              <div className={styles.carouselText}>
                <h3>{slide.title}</h3>
                <p>{slide.text}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
