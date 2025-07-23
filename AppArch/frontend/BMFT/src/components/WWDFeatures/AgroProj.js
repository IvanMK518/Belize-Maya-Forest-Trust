import React, { useState } from 'react';
import styles from '../styles/AgroProj.module.css';
import APField from '../assets/APField.jpg'; 
import APpeople from '../assets/APpeople.jpg';
import APgreen from '../assets/APgreen.jpg';
import APshells from '../assets/APshells.jpg';
import Placeholder from "../assets/Placeholder.jpg";


const Modal = ({ src, alt, onClose }) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                <img src={src} alt={alt} className={styles.modalImage} />
                <button className={styles.modalClose} onClick={onClose}>×</button>
            </div>
        </div>
    );
};

const TopicSection = ({ title, imgSrc, children, reverse, onImageClick }) => (
    <section className={`${styles.topicSection} ${reverse ? styles.reverse : ''}`}>
        <div className={styles.topicText}>
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
        <img 
            src={imgSrc} 
            alt={title} 
            className={styles.topicImage} 
            onClick={() => onImageClick(imgSrc, title)} 
        />
    </section>
);

const AgroProj = () => {
    const [modalImage, setModalImage] = useState(null);

    const handleImageClick = (src, alt) => {
        setModalImage({ src, alt });
    };

    const closeModal = () => {
        setModalImage(null);
    };

    return (
        <div className={styles.PageContainer}>
            <h1 className={styles.titleoverlay}>Regenerative Agriculture</h1>
            <header className={styles.header}>
                <img src={APField} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                        Agriculture and agribusiness play a crucial role in providing income and sustaining the livelihoods of the BMFT stakeholder communities. For these communities, access to healthy natural resources, including rich soils and plentiful, clean water, is essential for their prosperity and well-being. Climate change and ecosystem degradation, agricultural practices, and natural cycles have been altered, causing farmers economic losses and production challenges.  

The restorative and regenerative agriculture program focused on collaborating closely with local communities to promote environmentally sustainable farming practices. Key initiatives include the reforestation of communal areas and agricultural lands, agroforestry systems, and the incorporation of cover crops like Mucuna and Canavalia beans, as well as Inga edulis, all of which are leguminous plants recognized for their ability to enhance soil fertility.  
                    </p>
                    <p>
                        By fostering awareness and providing support, the program aims to empower farmers to embrace these progressive methods, paving the way for a more resilient agricultural environment that emphasizes sustainability and ecological well-being.  
                    </p>
                </div>
                <section className={styles.imageGallery}>
                <div className={styles.images}>
                    <img src={APshells} alt="Field showcasing regenerative agriculture practices" className={styles.image} />
                    <img src={APpeople} alt="Farmers engaged in sustainable farming" className={styles.image} />
                    <img src={APgreen} alt="Close-up of healthy, green soil" className={styles.image} />
                </div>
            </section>
            </section>
            <TopicSection
                title="Cover Crops"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
                Cover crops promoted are two leguminous species Mucuna sp. and Canavalia sp. were purposefully cultivated on separate one-acre plots. These cover crops serve a dual function: enhancing soil health and protecting the soil surface from direct exposure to harsh climatic conditions. By integrating cover crops into farming systems, this nature-based approach supports soil restoration and improves nutrient cycling. 

Canavalia sp. commonly known as Jack bean is a shrubby, annual to short-lived perennial legume characterized by a woody structure and a deep taproot system. Its broad leaves consist of three ovate leaflets, each narrowing to a tapered tip and wedge-shaped at the base. The plant produces smooth flowers in shades of rose, purplish, or white, and its seeds are marked by a distinct brown scar, approximately one-third the length of the seed. Notably, the roots develop nodules that actively fix atmospheric nitrogen, enhancing soil fertility.  

Mucuna bean, scientifically classified as Mucuna sp., is a vigorous leguminous vine valued for its wide-ranging benefits in agriculture and beyond. It features large, broad leaves and striking clusters of flowers that range in color from deep purple to bright pink. The plant produces elongated pods containing nutrient-rich beans known for their high protein content. In addition to their nutritional value, Mucuna beans contribute to sustainable agriculture by enriching soil fertility through nitrogen fixation, making them a valuable component of regenerative and eco-friendly farming systems.  
            </TopicSection>
            <TopicSection
                title="Inga edulis"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >
               Inga edulis is a nitrogen-fixing plant known for its ability to contribute to the restoration of soil health through root nodules containing nitrogen-fixing bacteria and the production of leaf mulch that accumulates and helps to mimic the condition of a natural forest in which organic inputs are constant. The shade of the Inga trees and leaf litter also reduces the soil temperature to the levels found in a natural forest. This practice helps in the restoration and maintenance of soil fertility and weed control and improves soil conditions and soil biodiversity. The Inga alley cropping system is an agricultural method used as a slash-and-mulch method, reducing the need to slash and burn.  
            </TopicSection>
            <TopicSection
                title="Agroforestry"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
                Agroforestry is the deliberate integration of trees and shrubs into agricultural systems—either concurrently or in rotation with crops and/or livestock. This practice involves the strategic planning and management of diverse vegetation to maximize resource efficiency, enhance ecosystem services, and support sustainable land stewardship. Unlike conventional monoculture farming, agroforestry prioritizes ecological diversity and resilience by fostering beneficial interactions among trees, crops, and animals within a unified agroecosystem. This provides refuge for wildlife and supports the conservation of native species, helping maintain ecological balance and ecosystem resilience. Trees enrich the soil through organic matter from leaf litter and root exudates, which improves soil structure, water retention, and nutrient cycling, enhancing soil fertility and reducing dependence on synthetic fertilizers and pesticides.  
            </TopicSection>
            <TopicSection
                title="Reforestation"
                imgSrc={Placeholder}
                reverse={true} 
                onImageClick={handleImageClick}
            >
                Restoring the lost forests is a shared priority for local communities, the Belize Maya Forest Trust (BMFT), and the government of Belize. This vital initiative aims to address the challenges posed by climate change while rejuvenating the ecosystem to preserve essential ecological services that benefit all. In 2024, the BMFT successfully planted over 6,000 native timber and fruit trees, including species like cedar, mahogany, Guanacaste, coffee, cacao, and Pacaya palm, across five different stakeholder communities. Each tree planting event not only contributed to reforestation but also fostered community engagement, as farmers, women, children, and youth participated in hands-on learning about the best practices for transplanting and nurturing these plants, ensuring their healthy growth.
            </TopicSection>
            <TopicSection
                title="Workshops and Training"
                imgSrc={Placeholder}
                reverse={false} 
                onImageClick={handleImageClick}
            >
The Belize Maya Forest Trust’s Regenerative Agriculture Program is dedicated to empowering local communities through a series of hands-on training and workshops focused on sustainable agricultural practices. These sessions are designed to enhance farmers' knowledge and skills, ensuring that they can implement methods that improve soil health, increase biodiversity, and promote climate resilience.
            </TopicSection>
            <section className={styles.videoSection}>
                <h2>Empowering Women in Conservation</h2>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/RmMZr0urvOs"
                        title="Regenerative Agriculture Overview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className={styles.video}
                    ></iframe>
                </div>
            </section>
            {modalImage && (
                <Modal
                    src={modalImage.src}
                    alt={modalImage.alt}
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default AgroProj;
