import React, { useState } from 'react';
import styles from '../styles/biography.module.css';
import Elma from "../assets/Elma.png";
import Tzul from "../assets/Tzul.JPG";
import ProfilePic from "../assets/ProfilePic.jpg";
import MichealHM from "../assets/MichealHM.png"
import JPepper from "../assets/JPepper.png"
import MGruin from "../assets/MGruin.png"
import DBuck from "../assets/DBuck.jpg"
import JRob from "../assets/JRob.jpg"

const teamMembers = [
    {
      name: "Michael H.M. Bowen",
      position: "Unkown",
      description: "Michael H.M. Bowen, an eighth-generation Belizean, who’s family first came to Belize in 1752, was educated in the United States of America, joined the family company after graduating from Duke University. In 2010 Michael became the CEO of Bowen & Bowen, a third-generation family company, which is the parent company of Crystal Bottling Company and Belize Brewing Company, the bottlers of Coca-Cola and Belikin Beer, among other companies, including Gallon Jug, a ~30,000 acres private rainforest jungle reserve which host the world-renown boutique lodge Chan Chich. Michael continues to push Bowen & Bowen’s mission statement, Pursuing excellence for a stronger Belize. ",
      imgSrc: MichealHM
    },
   




];

const Biography = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className={styles.biographypage}>
      {teamMembers.map((member) => (
        <div key={member.name} className={styles.teammember} onClick={() => openModal(member)}>
          <div className={styles.image}>
            <img src={member.imgSrc} alt={member.name} />
          </div>
          <div className={styles.description}>
            <h2 className={styles.name}>{member.name}</h2>
            <h3 className={styles.position}>{member.position}</h3>
          </div>
        </div>
      ))}
      <div className={`${styles.modal} ${selectedMember ? styles.show : ''}`}>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <div className={styles.modalImage}>
            <img src={selectedMember?.imgSrc} alt={selectedMember?.name} />
          </div>
          <div className={styles.modalDetails}>
            <h2 className={styles.name}>{selectedMember?.name}</h2>
            <h3 className={styles.position}>{selectedMember?.position}</h3>
            <p>{selectedMember?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
