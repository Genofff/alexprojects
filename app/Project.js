import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link'
const Project = ({ title, imageUrl, description, link }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={imageUrl} alt="imageUrl" className={styles.imageUrl} />
      <p>{description}</p>
      <Link href={link}>Детальніше</Link>
    </div>
  );
};

export default Project;
