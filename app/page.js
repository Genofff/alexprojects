import Image from "next/image";
import I from "./photo/I.png";
import styles from "./page.module.css";
import Button from "./Button";
const Home = () => {
  return (
    <div className={styles.text}>
      <h2>About:</h2>
      <Image src={I} alt="I" className={styles.photo} />
      <h3>
        Hello! My name is Karina Hryshko, and I am passionate about building and
        designing products for startups.
      </h3>
      <p>
        As a software developer and a dedicated enthusiast of tech startups, I
        have a strong drive to create and launch digital products. I always
        maintain a growth mindset, focusing on user-centric designs and adopting
        a problem-solving approach.
      </p>

      <p>
        Throughout my career, I have written code to craft engaging experiences,
        while also exploring the human aspect of these applications through
        design.
      </p>
      <ul>
        <h3>My technical skill set includes:</h3>
        <li>HTML / CSS: 5 years of experience</li>
        <li>JavaScript: 3 years of experience</li>
        <li>Ruby and Ruby on Rails: 2 years of experience</li>
        <li>PHP and Laravel: 3 years of experience</li>
        <li>User Interface Design: 5 years of experience</li>
      </ul>
      <p>
        In my early years as a developer, I acquired knowledge in various areas,
        broadening my horizons. However, I soon realized the importance of
        specializing in specific technologies while also staying up to date with
        emerging ones. This approach allows me to work more efficiently and
        effectively.
      </p>
      <div className={styles.container}>
        <h3>Projects:</h3>
        <Button title="Projects" link="/projects">
          projects
        </Button>
      </div>
    </div>
  );
};

export default Home;
