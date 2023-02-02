import "./news-carousel.component.scss";

const BannerCarousel = () => {
  return (
    <div className="flex flex-row shadow-lg rounded-xl gap-3 p-4 bg-white">
      <div className="flex flex-col gap-3">
        <h1 className="text-lg font-bold text-gray-800">
          Raise Hand For Church…
        </h1>
        <p className="text-sm text-gray-600 text-left">
          Get the churches connected more Bring the awareness of online services
        </p>
      </div>
      <div className="image-container">
        <img
          className="rounded-lg"
          src="https://media.gettyimages.com/id/157610088/pt/foto/antiga-igreja-branca.jpg?s=2048x2048&w=gi&k=20&c=N8FmRxKZfSZ3CDPIe5y_UkEOP9ycDlz8K9XNc8ViJW8="
          alt="church"
        />
      </div>
    </div>
  );
};

export default BannerCarousel;
