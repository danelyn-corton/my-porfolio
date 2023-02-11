import ProfileImage from "../img/myprofile.png";
import Wave from "../img/wave.svg";

function Home() {
  return (
    <div className="Home" id="home">
        <div className="wrapper">
            <img src={ProfileImage} alt="profile"/>
            <section>
                <h3>Hello I'm</h3>
                <h1>Danelyn Corton</h1>
                <p>A highly organized and hard-working individual looking for a responsible position to gain practical experience.</p>
                <p>To secure employment with a reputable company, where I can utilize my skills and business studies background to the maximum.</p>
            </section>
        </div>
        <img src={Wave} alt="wave"/>
    </div>
  );

}

export default Home;
