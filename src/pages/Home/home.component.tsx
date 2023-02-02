import React from "react";
import NavigationCard from "../../components/navigation-card/navigation-card.component";
import BannerCarousel from "../../components/news-carousel/news-carousel.component";
import "./home.component.scss";
const Home = () => {
  const activities = [
    {
      activity: "Calendário de Atividades",
      icon: "fa-calendar-days fa-duotone",
      color: "text-green-400",
    },
    {
      activity: "Fale com o Pastor",
      icon: "fa-comment-dots fa-duotone",
      color: "text-blue-400",
    },
    {
      activity: "Notícias",
      icon: "fa-newspaper fa-duotone",
      color: "text-yellow-400",
    },
    {
      activity: "Nosso Canal no Youtube",
      icon: "fa-brands fa-youtube",
      color: "text-red-400",
    },
  ];

  return (
    <div className="home-folder">
      <BannerCarousel />
      <div className="flex items-center justify-center gap-6 flex-row flex-wrap">
        {activities.map((activity) => (
          <NavigationCard
            activity={activity.activity}
            icon={activity.icon}
            color={activity.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
