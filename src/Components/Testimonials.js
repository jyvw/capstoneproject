import testimonial1 from "../Img/testimonial1";
import testimonial2 from "../Img/testimonial2";
import testimonial3 from "../Img/testimonial3";
import testimonial4 from "../Img/testimonial4";
import star from "../Img/star";

const Testimonials = () => {
    return (
        <main>
            <h2>What our clients thought</h2>
            <div className="testimonials">
                <div className="testimonialcard">
                    <div className="rating">
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                    </div>
                    <div className="client">
                        <img src={testimonial1} alt="Kevin"/>
                        <h4>Kevin</h4>
                    </div>
                    <p>Amazing greek salad!!!</p>
                </div>
                <div className="testimonialcard">
                    <div className="rating">
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                    </div>
                    <div className="client">
                        <img src={testimonial2} alt="Linda"/>
                        <h4>Linda</h4>
                    </div>
                    <p>Super tasty!</p>
                </div>
                <div className="testimonialcard">
                    <div className="rating">
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                    </div>
                    <div className="client">
                        <img src={testimonial3} alt="Chad"/>
                        <h4>Chad</h4>
                    </div>
                    <p>Tastier than your mom</p>
                </div>
                <div className="testimonialcard">
                    <div className="rating">
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                        <img src={star} alt="rating stars"/>
                    </div>
                    <div className="client">
                        <img src={testimonial4} alt="Pamela"/>
                        <h4>Pamela</h4>
                    </div>
                    <p>Super fast delivery!</p>
                </div>
            </div>
        </main>
    )
};

export default Testimonials;