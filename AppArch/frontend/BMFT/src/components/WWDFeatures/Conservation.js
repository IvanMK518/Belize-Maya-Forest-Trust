import React, { useState } from 'react';
import styles from '../styles/conservation.module.css'; 

const Dropdown = ({ title, content, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.dropdown}>
      <div className={styles.imageContainer}>
        <span className={styles.dropdownTitle}>{title}</span>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <button 
        className={`${styles.button} ${isOpen ? styles.buttonOpen : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.arrowContainer}>
          <span className={styles.arrow}>→</span>
        </span>
        <span className={styles.buttonText}>Learn More</span>
      </button>
      <div 
        className={`${styles.dropdownContent} ${isOpen ? styles.show : ''}`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Conservation = () => {
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Dropdown 
          title="Forest Ecosystems"
          content="To conserve forest ecosystems and their services, it is essential to reduce the occurrence of wildfires in the BMF and enhance the management of fire in the adjacent areas. Maintain and/or restore forest health in the larger BMF landscape. Key strategies to achieve this goal include raising awareness about fire safety, reforestation activities, and encouraging the adoption of regenerative agricultural practices."
          imageUrl="https://link-to-your-image/Cforest.jpg"
        />
        <Dropdown 
          title="Aquatic Ecosystems"
          content="To conserve aquatic ecosystems and their services, it is critical to reduce contamination in aquatic ecosystems of BMF and surrounding landscape. Key strategies to achieve this goal include the establishment of a baseline for contamination from pesticides and other runoff, improve pesticide use practices in farms in the BMF landscape, protect and restore the Cara Blanca Pools Forest, and promote solutions for handling solid waste."
          imageUrl="https://link-to-your-image/Cturtle.JPG"
        />
        <Dropdown 
          title="Jaguars/Wildcats"
          content="To conserve jaguars and wildcats, it is crucial to mitigate threats from habitat loss, poaching, and human-wildlife conflict. Key strategies to achieve this goal include protecting key habitats, establishing wildlife corridors, and raising awareness about the importance of these species in maintaining ecosystem balance."
          imageUrl="https://link-to-your-image/Cjaguar.JPG"
        />
        <Dropdown 
          title="Cara Blanca Pools"
          content="To conserve the Cara Blanca Pools, it is vital to protect these unique aquatic ecosystems from pollution and habitat degradation. Efforts should focus on sustainable management practices, public education, and restoration initiatives to maintain the ecological integrity of these areas."
          imageUrl="https://link-to-your-image/Cpools.jpg"
        />
      </section>

      <section className={styles.aboutPanel}>
        <p className={styles.aboutText}>
          Major threats to the BMF are deforestation, especially the clearing of riparian buffers, natural disasters and climate change, contamination due to pesticides, sedimentation and solid waste, illegal extraction, invasive non-native species, and primarily forest fires.
        </p>
      </section>
    </div>
  );
};

export default Conservation;
