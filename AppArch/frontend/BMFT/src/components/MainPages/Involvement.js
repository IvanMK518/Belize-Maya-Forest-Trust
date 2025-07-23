import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import styles from "../styles/involvment.module.css";
import Imonkey from "../assets/Imonkey.png";
import GIPanels from '../GIFeatures/GIPanels';

const Involvement = () => {
  return (
    <div className={styles.PageContainer}>
      <header className={styles.header}>
        <img src={Imonkey} alt="Header" />
        <div className={styles.titleoverlay}>
          <h1>Join Our Conservation Efforts</h1>
          <Link to="/Inprog" className={styles.donationButton}>
            Donate
          </Link>
        </div>
      </header>
      <section className={styles.infoSection}>
        <div className={styles.infoContainer}>
          <h2>Why Your Support Matters</h2>
          <p>Your contributions fund vital research, protect endangered species, and educate communities about wildlife conservation.</p>
        </div>
      </section>
</p>
Fire management  
Support the forest fire management efforts in the Belize Maya Forest by contributing to prevention initiatives and enhancing the firefighting capacity of the BMF rangers and local communities. Your involvement can make a significant difference in safeguarding this critical ecosystem and ensuring its resilience against fire threats. 

Reforestation  
Every seedling planted today represents a significant step towards a greener future, ensuring that the natural beauty and ecological integrity of the BMF landscape are preserved for years to come. Your support is crucial in making this vision a reality, and together, we can create a lasting impact on the environment and the communities that depend on it. 

Regenerative agriculture  
By prioritizing sustainable farming practices, farming communities not only improve their nutritional health but also strengthen their capacity to adapt to climate change and other environmental challenges that threaten our planet and food systems. Engaging in these efforts means investing in a future where local communities can thrive, ensuring food security and ecological balance in the Belize Maya Forest landscape.  

Community stewardship  
This initiative aims to empower stakeholders by nurturing their interests and talents, ultimately transforming these attributes into significant contributions toward sustainable development in their communities. By fostering a sense of ownership and responsibility, we enable community members to make a meaningful impact not only on the environment but also on the well-being of their families. Your support can help facilitate training, project resources, and scholarship opportunities that will allow these individuals to thrive.  


Become a Community Steward  
Your support can make a significant impact in protecting and promoting the rich biodiversity and cultural heritage of the Belize Maya Forest.   

Volunteer/Intern 

Visitation guidelines  
  </p>
      <section>
        <GIPanels />
      </section>
    </div>
  );
};

export default Involvement;
