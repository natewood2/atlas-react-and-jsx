import ProPic from "../assets/ProPic.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <img src={ProPic} alt="headshot" />
      <p>
        Hi, I'm Nathan! I'm currently studying Fullstack Engineering and am in T5
        at Atlas School. I absolutely love working with Desktop Apps using different frameworks, and I find myself particularly drawn to
        learning languages to solve problems in the most proficient ways. After graduation, I'm hoping to relocate to Seattle, Washington to pursue Software Engineering in the space industry. When I'm not coding, you can find me watching films - it
        helps me maintain a good work-life balance and keeps me creative!
      </p>
    </div>
  );
};

export default AboutMe;
