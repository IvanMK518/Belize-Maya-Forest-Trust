import React from 'react';
import styles from '../styles/wwdpanels3.module.css';

const panelsData = [
  {
    id: 2,
    imgSrc: "https://link-to-your-image/WWArangers.jpg",
    title: 'Patrols',
    link: '/patrols'
  },
  {
    id: 3,
    imgSrc: "https://link-to-your-image/WWDFire.jpg",
    title: 'Fire Management',
    link: '/firemanagement'
  },
  {
    id: 4, // Updated id to ensure it's unique
    imgSrc: "https://link-to-your-image/OTplan.JPG",
    title: 'Scientific Research',
    link: '/scientificresearch'
  },
];

const Panel = ({ imgSrc, title, description, link }) => (
  <div className={styles.panel}>
    <img className={styles.panelimg} src={imgSrc} alt={title} />
    <h2 className={styles.paneltitle}>{title}</h2>
    <p className={styles.paneldescription}>{description}</p>
    <button
      className={styles.learnmorebtn}
      onClick={() => window.location.href = link}
    >
      Learn More
    </button>
  </div>
);

const PanelContainer = () => (
  <div className={styles.panelcontainer}>
    {panelsData.map(panel => (
      <Panel
        key={panel.id}
        imgSrc={panel.imgSrc}
        title={panel.title}
        description={panel.description} // Ensure this is defined for each panel
        link={panel.link}
      />
    ))}
  </div>
);

export default PanelContainer;
