import React, { useState } from 'react';
import styles from "../styles/home.module.css";
import LivePatrolTracker from '../GeneralFeatures/LivePatrolTracker';
import Hometext from './Hometext';

const Home = ({ setNavbarVisible }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImgSrc, setModalImgSrc] = useState('');
  const [modalCaption, setModalCaption] = useState('');

  const openModal = (src, alt) => {
      setModalImgSrc(src);
      setModalCaption(alt);
      setModalVisible(true);
      setNavbarVisible(false); 
  };

  const closeModal = () => {
      setModalVisible(false);
      setNavbarVisible(true); 
  };

  return (
    <div>
      <div className={styles.container}> 
        <div className={styles.gallery}>
          <div className={styles.textwrapper}>
            <div className={styles.textcontainer}>
              <Hometext />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c3.jpg" alt="Image 1" onClick={() => openModal("https://your-google-photos-url/c3.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c10.jpg" alt="Image 4" onClick={() => openModal("https://your-google-photos-url/c10.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/diver2.jpg" alt="Image 2" onClick={() => openModal("https://your-google-photos-url/diver2.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c7.jpg" alt="Image 3" onClick={() => openModal("https://your-google-photos-url/c7.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/fish3.jpg" alt="Image 4" onClick={() => openModal("https://your-google-photos-url/fish3.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/diver1.jpg" alt="Image 5" onClick={() => openModal("https://your-google-photos-url/diver1.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c9.jpg" alt="Image 6" onClick={() => openModal("https://your-google-photos-url/c9.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/fish2.jpg" alt="Image 7" onClick={() => openModal("https://your-google-photos-url/fish2.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/fish.jpg" alt="Image 8" onClick={() => openModal("https://your-google-photos-url/fish.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c8.jpg" alt="Image 12" onClick={() => openModal("https://your-google-photos-url/c8.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c6.jpg" alt="Image 9" onClick={() => openModal("https://your-google-photos-url/c6.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c5.jpg" alt="Image 10" onClick={() => openModal("https://your-google-photos-url/c5.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c4.jpg" alt="Image 11" onClick={() => openModal("https://your-google-photos-url/c4.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
            <div className={styles.img}>
              <img src="https://your-google-photos-url/c11.jpg" alt="Image 4" onClick={() => openModal("https://your-google-photos-url/c11.jpg", '© 2024 Tony Rath All Rights Reserved')} />
            </div>
          </div>
        </div>
      </div> 
      
      {modalVisible && (
        <div className={styles.modal}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <img className={styles.modalContent} src={modalImgSrc} alt={modalCaption} />
          <div className={styles.caption}>{modalCaption}</div>
        </div>
      )}
    </div>
  )
}

export default Home;
