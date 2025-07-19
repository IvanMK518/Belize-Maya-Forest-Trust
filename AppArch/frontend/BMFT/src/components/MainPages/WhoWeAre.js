import React, { useState } from 'react';
import styles from '../styles/whoweare.module.css'; 
import WWAtop from "../assets/WWAtop.jpg";
import WWAposter from "../assets/WWAposter.jpg";
import WWAmid from "../assets/WWAmid.jpg";
import WWArangers from "../assets/WWArangers.jpg"; 
import WWAboard from "../assets/WWAboard.jpg";
import facebookicon from "../assets/facebookicon.webp";
import youtubeicon from "../assets/youtubeicon.png";
import gmailicon2 from "../assets/gmailicon2.jpg";
import Wbird from "../assets/Wbird.JPG";
import Wshed from "../assets/Wshed.jpg";
import Wcul from "../assets/Wcul.JPG";
import Wshed2 from "../assets/Wshed2.jpg";
import Placeholder from "../assets/Placeholder.jpg"
import WWDInfo from '../WWDFeatures/WWDInfo';
import Ntop from "../assets/Ntop.jpg"

const Panel = ({ image, title, description }) => {
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <div
            className={`${styles.panel} ${flipped ? styles.flipped : ''}`}
            onClick={handleClick}
        >
            <div className={styles.panelFront}>
                <div className={styles.panelImageWrapper}>
                    <img src={image} alt={title} className={styles.panelImage} />
                </div>
                <div className={styles.panelTitle}>
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={styles.panelBack}>
                <p>{description}</p>
            </div>
        </div>
    );
};


const WhoWeAre = () => {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <img src={WWAtop} alt="Header" />
                <div className={styles.titleoverlay}>
                    <h1>Belize Maya Forest Trust</h1>
                </div>
            </header>
            <section className={styles.missionVisionSection}>
                <div className={styles.missionPanel}>
                    <h2>BMFT's Mission</h2>
                    <p>
                        Demonstrating a locally relevant, globally recognized model of healthy, biodiverse forest protected by and for all Belizeans.
                    </p>
                </div>
                </section>
            <section className={styles.infoSection}>
                <div className={styles.infoContent}>
                    <div className={styles.infoContainer}>
                        <h2>Our Story</h2>
                        <p>
                            The Belize Maya Forest Trust (BMFT), established in December 2020, is dedicated to preserving the Belize Maya Forest (BMF) as a global model of effective, lasting conservation.
                        </p>
                        <p>
                            Belize is situated within the heart of the Mayan region; a land steeped in rich cultural history that we now refer to as The Mayan World. This area boasts a vast expanse distinguished by unique features that render it a remarkable locale, celebrated for its abundant natural beauty and archaeological treasures. These elements not only highlight the region's significance but also underscore its status as a priceless heritage, reflecting the profound legacy of the Mayan civilization that once thrived here.  
                        </p>
                        <p>
                            The Belize Maya Forest carries a rich history marked by the activities of chicleros, loggers, and the Yucatec Maya community, particularly the village of San Jose, which is now referred to as ‘Nuevo San Jose Palmar’ located in the Orange Walk District. Following Belize's independence from colonial rule, the land transitioned into the hands of a US timber company, which operated under the names Yalbac and Laguna Seca. Eventually, this foreign logging enterprise departed from Belize, selling off 30 acres to the Spanish Lookout community, while the remaining expanse of land was designated for conservation efforts, reflecting a shift towards preserving the natural heritage of the region. 
                        </p>
                        <p>
                            In December 2020, a significant milestone was achieved when 236,000 acres of forest were conserved, thanks to a collaborative initiative spearheaded by The Nature Conservancy. This remarkable achievement was the result of years of dedicated partnership among non-governmental organizations, government entities, private sector groups, and passionate individuals, all working together to protect what is now recognized as the last extensive and contiguous lowland broadleaf forest in Belize. Furthermore, in September 2024, an additional 5,500 acres of adjacent forest, known as Sierra de Agua, were acquired by a private owner, further enhancing conservation efforts in the region. As a result, the Belize Maya Forest now encompasses a total of 241,500 acres dedicated to preservation, reflecting a profound commitment to safeguarding this vital ecosystem for future generations. 
                        </p>
                        <p>
                            The Belize Maya Forest Trust (BMFT) was established to serve as a dedicated trustee, steward, and manager, tasked with the vital role of implementing protective and sustainable conservation measures within the reserve and its surrounding areas. This local nonprofit organization was officially established in December 2020, reflecting a commitment to environmental stewardship. Furthermore, in August 2021, the BMFT achieved recognition as a Non-Governmental Organization (NGO) under Belize's NGO Act, solidifying its position and ability to operate effectively in the realm of conservation and community engagement. 
                        </p>
                         <p>
                            The Belize Maya Forest is safeguarded for the benefit of both the citizens and the Government of Belize. This commitment ensures that the rich biodiversity and cultural heritage of the region are preserved for future generations, allowing the local communities to thrive while maintaining a deep connection with nature. The protection of this vital ecosystem reflects a shared responsibility to nurture and sustain the natural environment, fostering a sense of stewardship among the people of Belize. 
                        </p> 
                    </div>
                    <div className={styles.infoImage}>
                        <img src={WWAposter} alt="WWA Poster" />
                    </div>
                </div>
            </section>
            <section className={styles.header2}>
                <img src={WWAmid} alt="Meet the Team" />
                <div className={styles.titleoverlay2}>
                    <h1>Meet the Team</h1>
                    <a href="/ourpeople" className={styles.seeMoreButton}>See More</a>
                </div>
            </section>
            <section className={styles.missionVisionSection}>
                <div className={styles.visionPanel}>
                    <h2>BMFT's Vision</h2>
                    <p>
                        To be a global benchmark for effective and lasting conservation.  
                    </p>
                </div>
            </section>
            <section className={styles.importanceSection}>
                <h2>Ecosystem Services</h2>
                <div className={styles.panelsContainer}>
                    <Panel 
                        image={Wbird} 
                        title="Biodiversity" 
                        description="The Belize Maya Forest is home to a diverse range of species, contributing to global biodiversity and the health of various ecosystems."
                    />
                    <Panel 
                        image={Wshed2} 
                        title="Watersheds" 
                        description="The forest plays a vital role in watershed management, influencing water quality and availability for surrounding communities."
                    />
                    <Panel 
                        image={Placeholder} 
                        title="Climate Regulation" 
                        description="About climate regulation."
                    />
                    <Panel 
                        image={Wcul} 
                        title="Cultural Heritage" 
                        description="The Belize Maya Forest is rich in cultural heritage, with significant archaeological sites and traditional practices."
                    />
                </div>
            </section>
            <section className={styles.aboutPanel}>
        <p className={styles.aboutText}>
        The Belize Maya Forest (BMF), previously known as Yalbac and Laguna Seca, were owned and managed by a foreign logging company. The properties were bought in December 2020 for protection by the Belize Maya Forest Trust (BMFT) through an effort led by TNC, and many other generous organizations and individual supporters.          </p>
      </section>

            <section className={styles.socials}>
                <a href="mailto:info@bmft.org.bz" className={styles.socialIcon} title="Email">
                    <img src={gmailicon2} alt="Gmail" className={styles.iconImage} />
                </a>
                <a href="https://www.facebook.com/BelizeMayaForestTrust" className={styles.socialIcon} title="Facebook">
                    <img src={facebookicon} alt="Facebook" className={styles.iconImage} />
                </a>
                <a href="https://www.youtube.com/channel/UCWKdyK1WxDc7nKskT_vsEeQ" className={styles.socialIcon} title="YouTube">
                    <img src={youtubeicon} alt="YouTube" className={styles.iconImage} />
                </a>
            </section>
        </div>
    );
};

export default WhoWeAre;
