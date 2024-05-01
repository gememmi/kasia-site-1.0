import logo from "/Users/emilydaniels/Development/code/post-grad/kasia-site/src/images/logo-white.png";

export default function Home() {
  return (
    <div className="home">
      <img src={logo}></img>
      <div className="home-content">
        <h1>KASIA LEMENAK</h1>
        <h2>Chef and Catering Services</h2>
        <h2>NYC and Beyond</h2>
      </div>
    </div>
  );
}
