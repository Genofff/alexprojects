import styles from "@/app/page.module.css";
import Link from "next/link";
import {
  FaTelegramPlane,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaPhone,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const contact = () => {
  return (
    <div className={styles.text}>
      <h2>Contacts:</h2>
      <div className={styles.flex_2}>
        <div>
          <h3>
            Telegram
            <FaTelegramPlane />:{" "}
            <a href="https://web.telegram.org/k/#-841184779">
              https://web.telegram.org/k/#-841184779
            </a>
          </h3>
          <h3>
            Twitter
            <FaTwitter />:{" "}
            <a href="https://twitter.com/home?lang=uk">
              https://twitter.com/home?lang=uk
            </a>
          </h3>
          <h3>
            Github
            <FaGithub />:{" "}
            <a href="https://github.com/Genofff">https://github.com/Genofff</a>
          </h3>
        </div>
        <div>
          <h3>
            Instagram
            <FaInstagram />:{" "}
            <a href="https://www.instagram.com/">https://www.instagram.com/</a>
          </h3>
          <h3>
            Phone
            <FaPhone />: <a href="">921(64)784-97-37</a>
          </h3>
          <h3>
            Email
            <MdAlternateEmail />: <a href="">rinogi8963@pyadu.com</a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default contact;
