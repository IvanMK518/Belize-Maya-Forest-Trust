import React, { useState } from 'react';
import styles from '../styles/patrols.module.css';
import Patrolcir from "./Patrolcir";
import LivePatrolTracker from '../GeneralFeatures/LivePatrolTracker';
import Pat1 from "../assets/Pat1.jpg";
import Pat3 from "../assets/Pat3.jpg";
import Pat4 from "../assets/Pat4.jpg";
import Pat5 from "../assets/Pat5.jpg";

const ImageModal = ({ isOpen, onClose, imageSrc }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <span className={styles.close} onClick={onClose}>&times;</span>
                <img src={imageSrc} alt="Modal" className={styles.modalImage} />
            </div>
        </div>
    );
};

const Patrols = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openModal = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleOverlay}>Patrols</h1>
            <header className={styles.header}>
                <div className={styles.greenBackground}></div> {/* Green background div */}
            </header>
            <div className={styles.panelContainer}>
                <LivePatrolTracker />
                <div className={`${styles.panel} ${styles.animateRollIn}`}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.introText}>What Are Patrols?</h2>
                        <p>
                            The establishment of a protection team tasked with conducting routine patrols is essential for the preservation of the BMF's natural resources and the prevention and detection of unlawful activities. These patrols involve traversing extensive distances on foot through the jungle, regardless of weather conditions, to ensure the conservation of the area's ecological assets. Rangers encounter numerous challenges in their line of duty; therefore, the organization equips them with the necessary tools and provides comprehensive training. In addition to their patrolling responsibilities, the BMF rangers engage in data collection utilizing the Spatial Monitoring and Reporting Tool (SMART) alongside advanced technologies such as drones and satellite imagery. The experience of patrolling the BMF is not only visually stunning but also embodies courage and a profound connection with nature. 
                            ...
                        </p>
                    </div>
                    <img src={Pat1} alt="Ranger Team" className={styles.image} />
                </div>

                <section>
                    <Patrolcir />
                </section>

                <div className={styles.sideBySideContainer}>
                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>The Reserve</h2>
                            <p>
                                The Reserve is a vital ecological sanctuary where diverse species thrive...
                            </p>
                        </div>
                    </div>

                    <div className={`${styles.panel} ${styles.animateRollIn}`}>
                        <div className={styles.textContainer}>
                            <h2 className={styles.introText}>Importance of Patrols</h2>
                            <p>
                                Patrols play a crucial role in conservation efforts...
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageGallery}>
                    <img src={Pat3} alt="Patrol 1" onClick={() => openModal(Pat3)} className={styles.galleryImage} />
                    <img src={Pat4} alt="Patrol 2" onClick={() => openModal(Pat4)} className={styles.galleryImage} />
                    <img src={Pat5} alt="Patrol 3" onClick={() => openModal(Pat5)} className={styles.galleryImage} />
                </div>

                <ImageModal isOpen={isModalOpen} onClose={closeModal} imageSrc={currentImage} />
            </div>
        </div>
    );
};

export default Patrols;
