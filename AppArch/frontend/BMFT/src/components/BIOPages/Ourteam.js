import React, { useState } from 'react';
import styles from '../styles/ourteam.module.css';
import ProfilePic from "../assets/ProfilePic.jpg";
import AndyNaj from "../assets/Andy Naj.JPG";
import Rtop from "../assets/Rtop.JPG";
import Staff from "./Staff";

const teamMembers = [
    {
      name: "Marcos Dias",
      position: "Head Ranger ",
      description: "Marcos is from..... ",
      imgSrc: ProfilePic
    },
     {
      name: "Ranger 1",
      position: "Assistant Head Ranger ",
      description: "He..... ",
      imgSrc: ProfilePic
    },
    {
      name: "Andy Naj",
      position: "BMF Ranger ",
      description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence. ",
      imgSrc: AndyNaj
    },
    {
      name: "Ranger 2",
      position: "BMF Ranger ",
      description: "He..... ",
      imgSrc: ProfilePic
    },
    




  ];

  const Ourteam = () => {
    const [selectedMember, setSelectedMember] = useState(null);
  
    const openModal = (member) => {
      setSelectedMember(member);
    };
  
    const closeModal = () => {
      setSelectedMember(null);
    };
  
    return (
      <div>
        <header className={styles.header}>
          <img src={Rtop} alt="Header" className={styles.headerImage} />
          <h1 className={styles.titleoverlay}>Our Team</h1>
        </header>
        <Staff></Staff>
        <section className={`${styles.section2} ${styles.animateRollIn}`}>
        <header className={styles.banner3}>Protection Team</header>
      </section>
        <div className={styles.biographypage}>
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className={styles.teammember}
              onClick={() => openModal(member)}
            >
              <div className={styles.image}>
                <img src={member.imgSrc} alt={member.name} />
              </div>
              <div className={styles.text}>
                <h2 className={styles.name}>{member.name}</h2>
                <h3 className={styles.position}>{member.position}</h3>
              </div>
            </div>
          ))}
  
          {selectedMember && (
            <div className={`${styles.modal} ${styles.show}`}>
              <div className={styles.modalContent}>
                <span className={styles.close} onClick={closeModal}>&times;</span>
                <div className={styles.modalImage}>
                  <img src={selectedMember.imgSrc} alt={selectedMember.name} />
                </div>
                <div className={styles.modalDetails}>
                  <h2 className={styles.name}>{selectedMember.name}</h2>
                  <h3 className={styles.position}>{selectedMember.position}</h3>
                  <p>{selectedMember.description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Ourteam;
