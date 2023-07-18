
import { BsInstagram } from "react-icons/bs";
import { ImPointRight } from "react-icons/im";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const About = () => {
    return (
        <>
            <section id="about" className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <h3 style={{ paddingLeft: 0 }}>
                        Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                            👋🏻
                        </span>
                    </h3>
                    <p>I am a passionate web developer with expertise in ReactJs, Javascript, TypeScript. I love to create beautiful and interactive websites that deliver a great user experience. Currently, I am pursuing my <b>Master's in Computer science at University of massachusetts, Boston.</b></p>
                    <p>Throughout my career, I have worked on various projects, collaborating with talented teams to build innovative solutions. My goal is to continue learning and growing as a developer, always staying up-to-date with the latest technologies and best practices.</p>
                    <p>When I'm not coding, you can find me exploring new hiking trails, experimenting in the kitchen, or visiting new places.</p>
                    <div className="activities-content">
                        <p>
                            <ImPointRight /> &nbsp;
                              <a href="https://www.instagram.com/traveltoplaces_/" title="Instagram">You can see my travel adventures <BsInstagram /></a>
                        </p>
                    </div>
                    <div className="contact-info">
                        <a href="images/Lahasya_resume.pdf" className="resume-link" targer="_blank" title="Click here to download" download >RESUME</a>
                        <p>
                            <FaEnvelope className="icon" />
                            <strong><a style={{ textDecoration: "none", color: "black" }} href="mailto:lahasyakr.07@gmail.com" target="blank" title="Email">lahasyakr.07@gmail.com</a></strong>
                        </p>

                        <p>
                            <FaEnvelope className="icon" />
                            <strong><a style={{ textDecoration: "none", color: "black" }} href="mailto:lahasya.lnu001@gmail.com" target="blank" title="Email">lahasya.lnu001@gmail.com</a></strong>
                        </p>
                        <p>
                            <FaPhoneAlt className="icon" />
                            <strong>945-225-1951</strong> 
                        </p>

                    </div>
                </div>

            </section >
        </>
    )
};

export default About;