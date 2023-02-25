import about1 from "../Img/restaurant chef B.jpg";
import about2 from "../Img/Mario and Adrian A.jpg";

const About = () => {
    return (
        <main className="aboutsection">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </div>
            <div className="aboutimages">
                <div className="aboutimages_top">
                    <img src={about1} alt="Restaurant chef"/>
                </div>
                <div className="aboutimages_bottom">
                    <img src={about2} alt="Mario and Adrian"/>
                </div>
            </div>
        </main>
    )
};

export default About;