import React, { useState } from 'react';
import styles from '../styles/buildingstewards.module.css';
import S2 from "../assets/S2.jpg";
import WWDPanel2 from './WWDPanel2';

const Modal = ({ src, alt, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.modalClose} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

const TopicSection = ({ title, imgSrc, children, reverse, onImageClick }) => (
    <section className={`${styles.topicSection} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.topicText}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <img 
            src={imgSrc} 
            alt={title} 
            className={styles.topicImage} 
            onClick={() => onImageClick(imgSrc, title)} 
        />
    </section>
);

const Buildingstewards = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.titleoverlay}>Building Stewardship</h1>
            <header className={styles.header}>
                <img src={S2} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                    The Belize Maya Forest Trust works with ten (10) stakeholder communities that directly benefit from the protected area through watershed services, clean air, biodiversity, and other ecosystem services. The following map shows the location of each stakeholder community in the landscape.  

Sylvester Village within the Gallon Jug Estate is surrounded by BMF and Spanish Lookout, the largest Mennonite community in the landscape are BMF’s direct neighbours.  The northern communities that directly and largely benefit from the BMF because it comprises a major part of their watershed, the Rio Hondo, are Blue Creek and San Felipe. Blue Creek is the second largest Mennonite community in the landscape, and San Felipe is a primarily Mestizo community. The western communities that directly benefit from portions of the Belize River watershed that BMF protects are Yalbac, Los Tambos, Selena, La Gracia, Buena Vista, and Valley of Peace, which are primarily Hispanic communities first established by Central American migrants.  

Throughout the landscape, community members voiced their worries regarding prolonged and severe dry seasons, highlighting the need for initiatives that empower women and youth. Additionally, the elders within these communities expressed a desire for children to engage with the forest and wildlife as previous generations did, fostering a sense of pride and appreciation for both their community and the natural world around them.  
                    </p>
                </div>
            </section>
            <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Join the Journey</header>
        <WWDPanel2 />
      </section>

           
            {modalImage && (
                <Modal
                    src={modalImage.src}
                    alt={modalImage.alt}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default Buildingstewards;
