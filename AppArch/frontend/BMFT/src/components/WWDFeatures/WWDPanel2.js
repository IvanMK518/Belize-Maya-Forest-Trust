import React from 'react';
import styles from '../styles/WWDPanel2.module.css';
import { Link } from 'react-router-dom';

const panelsData = [
  {
    id: 2,
    imgSrc: "https://link-to-your-image/CommOut.jpg",
    title: 'Outreach',
    link: '/outreach'
  },
  {
    id: 3,
    imgSrc: "https://link-to-your-image/Agrigo.jpg",
    title: 'Restorative and Regenerative Agriculture',
    link: '/agroproj'
  },
  {
    id: 4,
    imgSrc: "https://link-to-your-image/Stewards.jpg",
    title: 'Community Stewards',
    link: '/communitystewards'
  },
];

const Panel = ({ imgSrc, title, description, link }) => (
  <div className={styles.panel}>
    <img className={styles.panelimg} src={imgSrc} alt={title} />
    <h2 className={styles.paneltitle}>{title}</h2>
    <p className={styles.paneldescription}>{description}</p>
    <Link to={link} className={styles.learnmorebtn}>
      Learn More
    </Link>
  </div>
);

const PanelContainer = () => (
  <div className={styles.panelcontainer}>
    {panelsData.map(panel => (
      <Panel
        key={panel.id}
        imgSrc={panel.imgSrc}
        title={panel.title}
        description={panel.description}
        link={panel.link}
      />
    ))}
  </div>
);

export default PanelContainer;
