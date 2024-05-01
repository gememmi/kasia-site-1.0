import kasia from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/kasia.png";
import food from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/food.png";

export default function About() {
  return (
    <div id="about">
        <div className="about-left">
      <img className= "about-img-1" src={kasia} />
      <img  className= "about-img" src={food} />
      </div>
      <div className="about-text">
        <h1>ABOUT KASIA</h1>
        <section>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a target="_blank" href="https://klemenakcv.tiiny.site/">
            Resume
          </a>
          <a target="_blank" href="https://www.instagram.com/xbornannoyedx/">
            Instagram
          </a>
        </section>
      </div>
<div className="about-right">
      <img className= "about-img-1" src={kasia} />
      <img  className= "about-img"src={food} />
      </div>
    </div>
  );
}
