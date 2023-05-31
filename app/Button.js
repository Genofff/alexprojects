import React from 'react';
import Link from 'next/link';
import styles from './page.module.css'

const Button = ({ title, link }) => {
  return (
    <Link href={link}><button className={styles.btn}>{title}</button></Link>
  );
};

export default Button;
