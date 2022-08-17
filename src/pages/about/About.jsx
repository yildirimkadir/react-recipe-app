import { AboutContainer, InfoContainer, StyledImage } from "./About.style";
import codingSvg from "../../assets/coding.svg";
// import { AiFillLinkedin } from "react-icons/ai";

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>About Software Developer</h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am Kadir</h2>
        <h3>I’m currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known HTML, CSS, JS, ReactJS, Redux, Redux-Toolkit,
          Redux-Thunk, SQLite, Python, Git & Github.
        </h4>
        <h3>
          <a href="https://www.linkedin.com/in/kadir-yildirim-87b458230/">
            Connect with me on Linkedin
          </a>
          <br />
          <a href="https://github.com/yildirimkadir">
            Follow me on Github
          </a>{" "}
        </h3>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
