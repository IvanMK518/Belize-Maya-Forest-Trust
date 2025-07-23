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
                   Protecting the Belize Maya Forest requires more than just boots on the ground, it depends on robust, science-driven insights. While BMFT’s internal science team is still in development, we are already advancing impactful conservation research through strong collaborations with academic and technical partners. In 2024, BMFT formalized its Monitoring, Evaluation, and Learning (MEL) Program, enhancing our ability to coordinate research and analyze ecological data across the reserve.  

Our dedicated protection team works closely with scientists conducting field research throughout the Belize Maya Forest. Trained in ecological monitoring techniques, our rangers play an active role in gathering data on species, habitats, and environmental conditions, contributing directly to science-based decision-making. 

Understanding wildlife populations and their relationships within the ecosystem is essential to developing and implementing conservation strategies that are grounded in evidence and aligned with our mission to protect biodiversity. This knowledge informs everything from species monitoring to forest management—and ultimately strengthens the resilience of the forest landscape. 

Together, these efforts are building a foundation for long-term conservation success—one that promotes a sustainable balance between nature and people and helps ensure that both communities and ecosystems can thrive. 
                </p>
                <p className={styles.des}>
Among the scientific endeavours taking place in the Belize Maya Forest are several key projects aimed at deepening our understanding of the ecosystem. These include: 

Wildlife Monitoring & Biodiversity 

Using camera traps, researchers have documented over 65 species of mammals, birds, and reptiles across the Belize Maya Forest. These data form the foundation for understanding population trends, species distributions, and predator-prey dynamics. 
    
Jaguar Monitoring: Long-term camera trap surveys track individual jaguars and estimate population density trends. Cubs observed in 2022 and 2023 signal active reproduction. 

Deer Research: In partnership with Virginia Tech, GPS collars have been deployed on white-tailed and brocket deer to study habitat use, reproduction, and movement. Notably, the rare Yucatán Brown Brocket was recorded in the BMF—an exciting range extension. 

Community Engagement: Deer research has also included outreach to seven villages, fostering local awareness and conservation interest. 
                </p>
     <p className={styles.des}>
Bat Biodiversity Survey 

Surveys conducted in July and October 2024 at multiple sites within the forest recorded 20 bat species, including fruit-eating, nectar-feeding, and insectivorous species. Sampling across different forest types—including burned areas—provides important baseline data for habitat-specific conservation strategies. 
                </p>
     </p>
     <p className={styles.des}>
Liana Management & Forest Resilience 

Since 2022, BMFT and partners have been evaluating the effects of selective liana cutting—a targeted approach where vines are removed only around individual trees. This strategy, if successful, may boost tree growth and carbon storage, offering a nature-based climate solution. In 2024, over 600 trees were re-measured, contributing to a growing dataset on forest dynamics. 
                </p>
    </p>
     <p className={styles.des}>
Yalbac Water Quality Initiative 

In partnership with the University of Leeds, the MUISKA-light risk assessment approach was piloted to identify local concerns around water security. Community workshops and pesticide testing revealed low-level contamination in both rainwater tanks and the Black Creek—a critical waterway flowing through agricultural lands into the BMF. These findings underscore the link between forest conservation and public health, and the importance of upstream land-use practices. 
                </p>
     </p>
      <p className={styles.des}>
Cara Blanca Pools Monitoring 

As part of a multi-year study, BMFT’s partner, the Savanna Field Station, launched water quality and fish surveys in the Cara Blanca cenote system, a hydrologically connected series of pools within the BMF. Early results show clear differences between pristine pools and those impacted by agricultural runoff—reinforcing the importance of forest buffers for aquatic ecosystem protection. 
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
