import Image from "next/image";
import HTTP_request from "@/app/photo/HTTP_request.jpg";
import Interactive_input from "@/app/photo/Interactive_input.jpg";
import Modal_window from "@/app/photo/Modal_window.jpg";
import Site from "@/app/photo/Site.jpg";
import styles from "@/app/page.module.css";

const projects = () => {
  return (
    <div className={styles.text }>
      <h2>Projects:</h2>
      <div className={styles.flex}>
        <div>
          <h3>HTTP request</h3>
          <p>A simple modal window created using HTML, CSS, and JS</p>
          <p><a href="https://github.com/Genofff/HTTP_request">GitHub →</a></p>
          
          <Image
            src={HTTP_request}
            alt="HTTP_request"
            className={styles.photo_2}
          />
        </div>
        <div>
          <h3>Interactive input</h3>
          <p>Interactive input created using codepen.io or HTML, CSS, JS.</p>
          <p><a href="https://github.com/Genofff/Interactive_input">GitHub →</a></p>
          <Image
            src={Interactive_input}
            alt="Interactive_input"
            className={styles.photo_2}
          />
        </div>
        <div>
          <h3>Modal window</h3>
          <p>Modal window created by using codepen.io or HTML, CSS, JS .</p>
          <p><a href="https://github.com/Genofff/Modal_window">GitHub →</a></p>
          <Image
            src={Modal_window}
            alt="Modal_window"
            className={styles.photo_2}
          />
        </div>
        <div>
          <h3>Gaming Platform</h3>
          <p>A simple game site, using HTML and CSS</p>
          <p><a href="https://github.com/Genofff/Front-end">GitHub →</a></p>
          <Image src={Site} alt="Site" className={styles.photo_2} />
        </div>
      </div>
    </div>
  );
};

export default projects;
