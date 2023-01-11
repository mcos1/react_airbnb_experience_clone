import hero_photos from "../images/hero_photos.png";

const Hero = () => {
  return (
    <div className="photo-container">
      <img src={hero_photos} className="hero-photos" alt="hero-photos"></img>
      <h1 className="online-experiences">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one of a kind hosts, all
        without leaving home.
      </p>
    </div>
  );
};

export default Hero;
