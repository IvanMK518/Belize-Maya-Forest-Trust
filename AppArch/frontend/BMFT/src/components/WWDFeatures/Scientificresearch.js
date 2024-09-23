import React from "react";
import styles from '../styles/scientificresearch.module.css';
import PBgator from "../assets/PBgator.jpg";
import OTplan from "../assets/OTplan.JPG";
import OTteam2 from "../assets/OTteam2.JPG";
import OTplan2 from "../assets/OTplan2.JPG";

const ScientificResearch = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleOverlay1}>Scientific Research</h1>
            <header className={styles.header}>
                <div className={styles.greenBackground}></div> 
            </header>
            <section className={styles.head2}>
                <header className={styles.header2}>
                    <img src={PBgator} alt="Yalbac Water Quality" />
                    <h1 className={styles.titleOverlay2}>Yalbac Water Quality</h1>
                </header>
            </section>
            <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Project Goals</h2>
                <p className={styles.descriptionText}>
                    The Black Creek, which serves as a tributary to the Belize River and traverses numerous agricultural lands, is currently facing significant challenges due to the adverse effects of chemical and soil runoff. This situation has not only jeopardized the integrity of the freshwater ecosystem but has also adversely affected the local residents of Yalbac community. In partnership with the University of Leeds, Dr. Rachael Carrie organized a series of community workshops aimed at identifying the impacts, challenges, and potential solutions for enhancing the health of the creek. Following these workshops, she undertook the collection of water samples from both the creek and adjacent freshwater sources to perform water quality assessments, thereby gaining insights into effective strategies for improving the creek's condition. The initiative underscored the critical importance of maintaining clean water for the community and sought to address the health and livelihood issues stemming from the extensive application of pesticides and other agricultural chemicals.
                </p>
                <p className={styles.des}>
                    This project is ongoing.  
                </p>
            </section>
            <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={OTplan} alt="Planning Water Quality" className={styles.image} />
                    <img src={OTteam2} alt="The Team" className={styles.image} />
                    <img src={OTplan2} alt="Planning" className={styles.image} />
                </div>
            </section>
        </div>
    );
}

export default ScientificResearch;
