import React, { useState } from 'react';
import styles from '../styles/Outreach.module.css';
import OTclean from "../assets/OTclean.JPG"
import OTsign from "../assets/OTsign.JPG"
import OTteam from "../assets/OTteam.JPG"
import OTplan from "../assets/OTplan.JPG"
import OTteam2 from "../assets/OTteam2.JPG"
import OTplan2 from "../assets/OTplan2.JPG"
import OTduo from "../assets/OTduo.jpg"
import OTteach from "../assets/OTteach.jpg"
import OTclass from "../assets/OTclass.JPG"
import OTschol from "../assets/OTschol.jpg"
import OTschol1 from "../assets/OTschol1.JPG"
import OTschol2 from "../assets/OTschol2.png"
import Otop from "../assets/Otop.jpg"
const Outreach = () => {
   
    const [currentImage1, setCurrentImage1] = useState(0);
    const [currentImage2, setCurrentImage2] = useState(0);
    const [currentImage3, setCurrentImage3] = useState(0);

    const images1 = [OTduo, OTteach, OTclass];
    const images2 = [OTclean, OTsign, OTteam];
    const images3 = [OTclean, OTsign, OTteam];

    const handlePrev = (setter, images) => {
        setter(prev => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (setter, images) => {
        setter(prev => (prev + 1) % images.length);
    };

    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.titleoverlay}>Outreach</h1>
            <header className={styles.header}>
                <img src={Otop} alt="Header" />
            </header>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Outreach Events</h2>
                    <p>
                    Community outreach encompasses a range of initiatives aimed at disseminating information about the organization's conservation work while fostering an understanding of the significance and impact of the natural environment on local communities. The BMF actively involved nine stakeholder communities through various activities, including cleanup campaigns, training sessions, workshops, and educational field trips and awareness events, all designed to promote environmental stewardship. 

Through these diverse outreach efforts, the BMF sought to not only inform but also empower community members by providing them with the knowledge and skills necessary to engage with and protect their natural surroundings. By facilitating hands-on experiences and interactive learning opportunities, the organization aimed to cultivate a deeper appreciation for environmental issues and encourage collaborative efforts towards sustainable practices within the communities it serves.  
                    </p>
                </div>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage1, images1)} className={styles.carouselButton}>‹</button>
                        <img src={images1[currentImage1]} alt="Community Event" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage1, images1)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage2, images2)} className={styles.carouselButton}>‹</button>
                        <img src={images2[currentImage2]} alt="Educational Workshop" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage2, images2)} className={styles.carouselButton}>›</button>
                    </div>
                    </div>
                <div className={styles.textSide}>
                    <h2>Clean Up Events</h2>
                    <p>
   Yalbac Creek Cleaning Earth Day
                On Earth Day 2024, the Yalbac community, in collaboration with the Belize Defence Force Second Infantry Battalion and the Belize Maya Forest Trust, engaged in a significant initiative aimed at enhancing the cleanliness of our freshwater creek while advocating for a plastic-free environment. A dedicated group of thirty community and local volunteers joined forces to remove waste and debris from the creek, thereby contributing to a healthier ecosystem. Additionally, six no-litter signs were strategically placed to serve as a constant reminder for community members to maintain a clean and vibrant environment. The collective efforts of all participants have resulted in a clean freshwater creek that now flows freely. It is imperative that we continue our commitment to environmental stewardship and preserving the natural beauty of our planet. 
                </p>
                </div>
            </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Public Outreach</h2>
                 <p>
Belize Bird Festival Event 

The Belize Maya Forest Trust is a dedicated supporter of bird conservation, actively partnering with the Cornell Lab of Ornithology to enhance public awareness of the important role that avian species in our ecosystems. This collaboration aims not only to raise awareness but also to cultivate the skills and knowledge of birdwatchers, thereby fostering a community of informed and passionate individuals. Driven by this mission, the organization makes it a priority to participate annually in the national Belize Bird Festival, an event that serves as a platform for expanding their conservation initiatives and connecting with some of the most talented and experienced birders in the country. Through these efforts, the Belize Maya Forest Trust seeks to strengthen its impact on bird conservation while promoting a deeper appreciation for the rich avian diversity found in Belize.  
                 </p>
                </div>
     </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Awareness Campaign</h2>
                 <p>
Fire Safety awareness campaign  

The primary threat to the Belize Maya Forest is forest fire, which can have devastating effects on the ecosystem. In response to this pressing issue, a Fire Safety Awareness Campaign has been launched with the objective of spreading awareness to the public about safe burning practices and preventing uncontrolled fires that could escalate into larger forest fires. This initiative emphasizes the importance of careful planning before conducting any burning activities, including notifying neighbours about the intended burn, establishing wide firebreaks, and ensuring that weather conditions are suitable for a burn. The campaign has been actively disseminated across ten stakeholder communities through various platforms, including community events, school presentations, social media platforms, and health fairs, as well as reaching a broader audience during national events and symposiums throughout Belize. By fostering a culture of fire safety and awareness, the campaign aims to protect the Belize Maya Forest and promote sustainable practices among stakeholders.    
                 </p>
    </div>
     </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Community awareness project</h2>
                 <p>
Valley of Peace Youth Climate Actions  

Youth empowerment is essential for fostering an inclusive growth within their communities, allowing young individuals to express their creativity and innovative ideas. Recently, the Valley of Peace youth participated in a community outreach initiative aimed at sharing their ideas on climate action and promoting sustainable practices for a healthier environment.  

Students from the Valley of Peace SDA Academy engaged in a series of workshops to share about various climate initiatives being undertaken by youth globally and in Belize. As a result, they organized a community cleanup day to raise awareness about the importance of maintaining a litter-free environment and reducing plastic waste. Additionally, they took the initiative to enhance public spaces, such as bus stops, by incorporating climate action messages into their designs. Three groups of students collaborated with community members and teachers to transform a bus stop, showcasing their artistic talents and innovative ideas through vibrant paintings. The outcome of this project was remarkable, as the students not only beautified their community with three stunning bus stops but also support local leadership to advocate for a sustainable, green, and clean environment.     
    </p>
    </div>
     </section>
            <section className={styles.outreachSection}>
                <div className={styles.textSide}>
                    <h2>Educational Trips</h2>
                 <p>
School field trips  

Experiential learning plays an important role in cultivating an appreciation for conserving the resources in the Belize Maya Forest. Collaborating closely with our partners at Gallon Jug, the organization aims to raise awareness among local children about sustainable agricultural practices in Gallon Jug and the remarkable natural resources that the Belize Maya Forest. Over the past three years, various schools have had the opportunity to visit this landscape, engaging in educational activities that highlight the forest critical role for both communities and wildlife. During these visits, students can observe and appreciate a diverse array of animals, while also learning about the importance of empathy and care for wildlife. Notable wildlife sightings, including white-tailed deer, oscillated turkeys, great curassows, howler monkeys, and the majestic jaguar. They gain insights into coffee cultivation and processing, as well as the principles of organic vegetable production. These field trips are essential components of the outreach program, fostering a deep-seated appreciation among children for their natural environment.  
                 </p>
                <div className={styles.imageSide}>
                    <div className={styles.carousel}>
                        <button onClick={() => handlePrev(setCurrentImage3, images3)} className={styles.carouselButton}>‹</button>
                        <img src={images3[currentImage3]} alt="Volunteer Activities" className={`${styles.image} ${styles.imageEntering}`} />
                        <button onClick={() => handleNext(setCurrentImage3, images3)} className={styles.carouselButton}>›</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Outreach;

