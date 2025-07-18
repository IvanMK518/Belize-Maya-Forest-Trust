import React, { useState } from 'react';
import styles from '../styles/Outreach.module.css';
import OTclean from "../assets/OTclean.JPG"
import OTsign from "../assets/OTsign.JPG"
import OTteam from "../assets/OTteam.JPG"
import OTplan from "../assets/OTplan.JPG"
import OTteam2 from "../assets/OTteam2.JPG"
import OTplan2 from "../assets/OTplan2.JPG"
import OTduo from "../assets/OTduo.jpg"
import OTteach from "../assets/OTteach.jpg"
import OTclass from "../assets/OTclass.JPG"
import OTschol from "../assets/OTschol.jpg"
import OTschol1 from "../assets/OTschol1.JPG"
import OTschol2 from "../assets/OTschol2.png"
import Otop from "../assets/Otop.jpg"
const Outreach = () => {
   
    const [currentImage1, setCurrentImage1] = useState(0);
    const [currentImage2, setCurrentImage2] = useState(0);
    const [currentImage3, setCurrentImage3] = useState(0);

    const images1 = [OTduo, OTteach, OTclass];
    const images2 = [OTclean, OTsign, OTteam];
    const images3 = [OTclean, OTsign, OTteam];

    const handlePrev = (setter, images) => {
        setter(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (setter, images) => {
        setter(prev => (prev + 1) % images.length);
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleoverlay}>Outreach</h1>
            <header className={styles.header}>
                <img src={Otop} alt="Header" />
            </header>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Outreach Events</h2>
                    <p>
                    Community outreach encompasses a range of initiatives aimed at disseminating information about the organization's conservation work while fostering an understanding of the significance and impact of the natural environment on local communities. The BMF actively involved nine stakeholder communities through various activities, including cleanup campaigns, training sessions, workshops, and educational field trips and awareness events, all designed to enhance awareness and promote environmental stewardship. 
</p>
<p>
                    Through these diverse outreach efforts, the BMF sought to not only inform but also empower community members by providing them with the knowledge and skills necessary to engage with and protect their natural surroundings. By facilitating hands-on experiences and interactive learning opportunities, the organization aimed to cultivate a deeper appreciation for environmental issues and encourage collaborative efforts towards sustainable practices within the communities it serves. 
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage1, images1)} className={styles.carouselButton}>‹</button>
                        <img src={images1[currentImage1]} alt="Community Event" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage1, images1)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage2, images2)} className={styles.carouselButton}>‹</button>
                        <img src={images2[currentImage2]} alt="Educational Workshop" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage2, images2)} className={styles.carouselButton}>›</button>
                    </div>
                    </div>
                <div className={styles.textSide}>
                    <h2>Clean Up Events</h2>
                    <p>
                Description
                </p>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Public Outreach</h2>
                 <p>
                    Description
                 </p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage3, images3)} className={styles.carouselButton}>‹</button>
                        <img src={images3[currentImage3]} alt="Volunteer Activities" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage3, images3)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Outreach;

