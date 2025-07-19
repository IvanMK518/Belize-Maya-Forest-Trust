import React from 'react';
import styles from '../styles/WhatWeDo.module.css';
import WWDtop from '../assets/WWDtop.jpg'; 
import WWDPanels3 from '../WWDFeatures/WWDPanels3';
import WWDInfo from '../WWDFeatures/WWDInfo';
import WWDPanel2 from '../WWDFeatures/WWDPanel2';
import Conservation from '../WWDFeatures/Conservation';


const WhatWeDoPage = () => {
  return (
    <div className={styles.PageContainer}>
    <header className={styles.header}>
      <img src={WWDtop} alt="Header" />
      <div className={styles.titleoverlay}>
        <h1>Setting New Standards in Conservation</h1>
        </div>
        </header>
        
        <section className={styles.aboutSection}>
      <h2>Comprehensive Management and Protection of Expansive Forest Landscapes</h2>
      <p>
      The Belize Maya Forest stands as the final significant expanse of broadleaf forest that links to the Selva Maya Forest, serving as a vital corridor for biodiversity and a rejuvenating ecosystem that supports essential watersheds like the Rio Hondo River. This remarkable forest not only sustains a rich variety of life but also offers crucial ecological benefits to surrounding communities, including the provision of clean air and water, fertile soils, and essential pollinators. At the core of our work is the commitment to preserving a vibrant and diverse forest, ensuring it remains protected for the benefit of all Belizeans. 
      </p> 
         </section>
    
      
      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner4}>BMF Conservation Targets</header>
        <Conservation />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner2}>Building Stewardship</header>
        <WWDPanel2 />
      </section>

      <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Protecting Biodiversity</header>
        <WWDPanels3 />
      </section>
    </div>
    
  );
};

export default WhatWeDoPage;
