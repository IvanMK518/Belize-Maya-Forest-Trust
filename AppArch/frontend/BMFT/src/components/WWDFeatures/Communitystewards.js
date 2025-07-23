import React, { useState } from 'react';
import styles from '../styles/communitystewards.module.css';
import Rec1 from  "../assets/Rec1-min.jpg";
import Rec8 from  "../assets/Rec8-min.jpg";
import Rec2 from  "../assets/Rec2-min.jpg";
import Rec3 from  "../assets/Rec3-min.jpg";
import Rec4 from  "../assets/Rec4-min.jpg";
import Rec5 from  "../assets/Rec5-min.jpg";
import Rec6 from  "../assets/Rec6-min.jpg";
import Rec7 from  "../assets/Rec7-min.jpg";
import Ctop from  "../assets/Ctop.jpg";
import Cback from  "../assets/Cback.jpg";

const images = [
  { src: Rec1, alt: 'Recipient 1' },
  { src: Rec2, alt: 'Recipient 2' },
  { src: Rec3, alt: 'Recipient 3' },
  { src: Rec4, alt: 'Recipient 4' },
  { src: Rec5, alt: 'Recipient 5' },
  { src: Rec6, alt: 'Recipient 6' },
  { src: Rec7, alt: 'Recipient 7' },
  { src: Rec8, alt: 'Recipient 8' },
];

const Communitystewards = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <main className={styles.container}>
         <h1 className={styles.titleoverlay}>Community Steward Program</h1>
            <header className={styles.header}>
                <img src={Ctop} alt="Header" />
            </header>
            <section className={styles.introduction}>
                <div className={styles.introText}>
                    <h2>About the Program</h2>
                    <p>
                    Community Steward Program's goal is to guide initiatives and solutions to conservation and sustainable livelihood challenges within the BMF landscape.                      </p>
                    <p>
                    The Community Stewardship program emphasizes the importance of fostering sustainable practices among local stakeholders. This program not only seeks to empower individuals and communities in their sustainable development efforts but also encourages a deep sense of responsibility towards environmental stewardship, creating a collaborative approach to conservation that benefits both people and the planet.  

Stewardship establishes ownership, collaboration, inclusion, and leadership with community members who are key to the accomplishment of the BMFT’s conservation objectives. The program will have people as the main actors in caring for the environment, using their expertise, knowledge, and skills to lead local conservation stewardship actions, through but not limited to, microgrants and scholarships.                        
  </p>
                </div>
                </section>
                <header className={styles.header2}>
                    <img src={Cback} alt="Sayuri Speaking" />
                </header>
                <section className={styles.descriptionSection}>
                <h2 className={styles.sectionTitle}>Stewards Projects</h2>
                <p className={styles.descriptionText}>
               Microgrants  

Stewards will be empowered to enhance their stewardship practices in ways that are both environmentally sustainable and economically viable. The BMFT plays a crucial role by offering technical expertise, opportunities for skill development, and financial assistance to help stewards successfully execute their projects. In 2024, the organization took a significant step by awarding its inaugural microgrants, aimed at supporting farmers, local businesses, women, and youth, thereby fostering growth and resilience.      

Fruit plot expansion to boost local jam products- Alvin Dyck from Blue Creek    
Alvin, a dedicated father and local entrepreneur from the Blue Creek community, produces artisanal jams under the brand name Black Orchid Jams. His family specializes in creating a diverse range of fruit-flavoured jams, with a particular emphasis on local ingredients. To satisfy the growing demand from his customers, Alvin recognized the necessity of expanding his mango orchards. Through our microgrants program, he successfully acquired 75 mango seedlings along with an irrigation system, which is essential for enhancing the productivity of his fruit farm. Among the most popular flavours that his customers rave about are the spicy mango jam and the unique pitahaya and soursop jams, both of which showcase the vibrant tastes of the region and reflect Alvin's commitment to quality and innovation in his craft. 

Sustainable sheep rearing- Trudy Dominguez from Blue Creek  
Trudy is a dedicated mother of two wonderful daughters, a passionate educator, and a farmer at heart. With extensive experience in livestock management gained from her family's farm, she has worked with a diverse array of animals, including cattle, chickens, goats, and sheep. In the wake of the challenges posed by avian flu and the COVID-19 pandemic and finding a healthier milk option for her family, Trudy looked up for the opportunity to establish a goat rearing business aimed at catering to a specialized market for goat milk within their community of Blue Creek. Through our microgrant program, Trudy successfully acquired additional goats, electric fencing, and essential equipment, all of which will significantly enhance the productivity and sustainability of her farming operations.  

Supporting women in beekeeping local business- Emily Rempel from Blue Creek  
Emily possesses a profound affinity for nature, animals, and particularly bees. With several years of experience as a beekeeper, she has aspired to transform her apiary into a sanctuary dedicated to these vital pollinators, ensuring they have a secure and nurturing environment. Thanks to our microgrants, she was able to acquire essential resources, including a solar system, bullet tree seedlings, and various tools necessary for her project. Emily's enthusiasm for wildlife is evident, and with the technical assistance provided by our team, she is now equipped to effectively document the presence and diversity of wildlife on her property, further enriching her connection to the natural world., ranging from jaguars, spider monkeys, tapirs to white-lipped peccaries.  

First Silvo-pastoral plot in Yalbac- David Requena from Yalbac village 
David is a dedicated advocate for sustainable agriculture within his community of Yalbac, where he has cultivated a deep passion for farming. His endeavors encompass the cultivation of a variety of vegetables and fruits, as well as the rearing of livestock, reflecting his commitment to both environmental stewardship and local food production. The challenges posed by the COVID-19 pandemic significantly impacted his ability to invest in his Sliva-pastoral venture. However, with the assistance of the BMFT microgrants, Mr. David was able to realize his goal of acquiring an electric fencing system, a crucial investment that will enhance the security and management of his livestock. This support not only empowers him to continue his farming practices but also contributes to the broader movement towards sustainable farming in his community.  

Vegetable solar irrigation system- Sergio Fuentes from La Gracia village. 
Sergio is a dedicated farmer and a proud father, deeply committed to his family and their agricultural heritage. Alongside his brothers, he has been involved in farming from a young age, focusing on the cultivation of vegetables and ground food crops. Confronted with the pressing challenges of climate change, particularly drought, Sergio understands the importance of transitioning to sustainable farming methods. With the assistance of micro grants, his family farm is set to implement a solar-powered irrigation system that utilizes natural gravitational forces, enhancing crop production during the dry season. Sergio firmly believes that even small initiatives can contribute significantly to achieving his larger aspirations.  

Chicken rearing start-up supports women's local business- Ana Aguirre from Los Tambos village  
Ana fondly recalls her childhood days spent helping her mother care for the family’s chickens. From a young age, she learned the ins and outs of poultry care. After several years working at a local business, Ana decided to prioritize her family and pursue her passion for raising rare chickens for eggs and meat. Together with her family, she built a spacious coop equipped with feeders capable of supporting over 500 chickens. Thanks to the assistance of micro grants, Ana was able to enhance her facility by adding incubators for her layers. Today, she lovingly cares for her family while successfully supplementing their household income from the comfort of home. 

Community shredder service transforms yard waste into nutrient-rich organic material that boosts soil fertility and protects the environment! - Rolando Cowo from Valley of Peace village.  
Rolando Cowo, a small business owner from the Valley of Peace village, is addressing the persistent issue of backyard burning in his community, primarily caused by the disposal of green debris. To combat this problem, he aims to establish a community shredder service that will convert this organic waste into mulch, thereby enhancing soil fertility for interested people in enriching their soil. By providing this service, Rolando hopes to reduce community fires and smokes while simultaneously promoting sustainable practices that benefit the local environment. 
  </p>
   <p className={styles.descriptionText}>
               Scholarships 

The BMFT scholarships are dedicated to empowering young individuals from stakeholder communities by offering them valuable educational opportunities that span high school, tertiary level, and vocational education and training. Recipients of these scholarships are encouraged to engage in community service, dedicating hours to their communities, which helps to raise awareness and support the organization's conservation goals. In 2024, the organization proudly awarded its inaugural six scholarships across a variety of academic disciplines, marking a significant step forward in its mission to support education and community engagement.        

Future agronomist for a sustainable change in his community  
Ector Gomez from Valley of Peace Village  
Majored in Applied sustainable agriculture at the University of Belize, Central Farm Campus.  
Two (2) years program  

He quotes, “I see myself working along with farmer on innovative climate smart practices that is safe for the environment; hence become economically sustainable.”  

Ector has a deep-rooted passion for farming, shaped by his upbringing in a close-knit agricultural community where he witnessed firsthand the challenges that small farmers encounter, particularly in the face of increasingly severe weather patterns. His father instilled in him a profound appreciation for the significance of healthy soil as the foundation for nutritious food, a lesson that has stayed with him throughout his life. Currently, Ector balances a part-time job to support his family while diligently pursuing a bachelor's degree in sustainable agriculture. He envisions a future where he collaborates with farmers to implement innovative, climate-smart practices that not only prioritize environmental safety but also promote economic sustainability. Ector's commitment to these ideals reflects his desire to contribute positively to the agricultural sector and support the resilience of small farming communities.  
  

Young economist is stepping up to support small businesses that fuel innovation  
Lorena Monge from Spanish Lookout Community  
Majored in Accounting and Economics at Saint Johns College  
Two (2) years program  

She quotes, “My goal is to provide high-quality financial services and advocating for sound economic policies that benefit underserved communities.” 

Lorena is driven by a desire to comprehend the intricacies of the business sector, with the goal of enhancing her community's economic growth and stability. She envisions establishing her own consultancy firm, which would focus on empowering local businesses to manage their financial challenges effectively. By providing tailored guidance, she aims to promote sustainable development practices and facilitate job creation within the community. Lorena's strengths are rooted in her enthusiasm for numbers and her adeptness at problem-solving, complemented by her analytical thinking and creativity. Furthermore, Lorena’s strong work ethic ensures that she approaches each project with dedication and diligence, positioning her as an asset to the businesses she intends to support. 

  
Aspiring agronomist is sowing the seeds of change and youth empowerment  
Elias Ayala from San Felipe Village  
Majored in Agri-business at Centro Escolar Mexico Junior College  
Two (2) years program  

He quotes, “One of my passions is working with crops, my father is a farmer, and we worked together since I was a little boy.”  

Elias is determined to become an agronomist in Belize, with a vision to foster sustainable growth within the agricultural sector of his community. Balancing his responsibilities as a part-time farmer, he is currently pursuing an associate degree in agri-business studies, which equips him with the knowledge and skills necessary for his future career. However, Elias's commitment extends beyond his academic and agricultural pursuits; he is also a passionate advocate for community development and youth empowerment. His leadership experience as a youth group leader has laid a strong foundation for his ongoing involvement in community projects, where he continues to inspire and support the younger generation. Through his multifaceted efforts, Elias exemplifies a dedication to not only enhancing agricultural practices but also uplifting his community. 


A heart for hospitality dedicated to crafting unforgettable experiences.  
Christina Garcia from Buena Vista Village  
Majored in Tourism Hospitality at Cayo Centre For Employment Training  
Two (2) years program  

She quotes, “my passion lies in creating enriching and memorable experiences for travellers, so that they can appreciation our culture and environment.” 

Christina possesses a natural charisma that enhances her innate ability to provide exceptional hospitality. With a strong desire to excel in the realm of tourism hospitality management, she is dedicated to honing her skills and expanding her expertise. Her true passion lies in crafting enriching and unforgettable experiences for travelers, ensuring that each visitor departs with a profound appreciation for the Belizean culture and environment. Christina's commitment to personal and professional development, coupled with her aspiration to make a significant impact in the industry, positions her as a catalyst for positive change within her community and family. Through her efforts, she aims not only to elevate the standards of hospitality but also to foster a deeper connection between visitors and the rich heritage of the area.  


Inspiring young farmer who’s planting the roots for a flourishing career in tourism.  
Alberto Garcia from Buena Vista Village  
Majored in Tourism Hospitality at Cayo Centre For Employment Training  
Two (2) years program  

He quotes, “I am lucky to be where I am, and I want to be the change in my family and community.” 

Alberto comes from a farming family that has provided him with a unique perspective, allowing him to envision a future that extends beyond agriculture. Inspired by his brother's journey, Alberto is a determined and enthusiastic young man who is committed to acquiring new skills and enhancing his talents in the field of tourism and hospitality. His drive to excel is fuelled by a deep-seated desire to assist others throughout his educational journey, with the ultimate goal of one day being able to support his parents. This aspiration not only reflects his personal ambitions but also underscores his commitment to uplifting those around him, demonstrating a profound sense of responsibility and gratitude towards his family's sacrifices.  

  
Becoming a doctor with a passion for music and a commitment to a clean environment.   
Asirah Salazar from Buena Vista Village 
Attends Eden Seventh Day Adventist High School  
Four (4) years program  

Asirah has a profound curiosity about the natural world, driving her desire to expand her knowledge and understanding of it. With aspirations of becoming a medical doctor, she is dedicated to helping those in need and making a positive impact on society. Currently, she is focused on completing her high school education at Eden Seventh Day Adventist High School, where she immerses herself in the study of science and spirituality while also building her confidence and forming lasting friendships. Asirah has actively participated in the Keep Belize Clean campaign, contributing to the promotion of a clean and healthy community. Additionally, she showcases her diverse talents through her love for music, often playing the guitar and singing alongside her family and friends, which enriches her life and strengthens her connections with those around her. 
  </p>
            </section>

      <section className={styles.gallery}>
                <div className={styles.introduction2}>
                    <h2 className={styles.introText2}>Community Stewards</h2>
                    </div>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <div key={index} className={styles.imageContainer} onClick={() => handleClick(image)}>
              <img src={image.src} alt={image.alt} className={styles.image} />
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className={styles.modal} onClick={handleClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
              <span className={styles.close} onClick={handleClose}>&times;</span>
              <img src={selectedImage.src} alt={selectedImage.alt} className={styles.modalImage} />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Communitystewards;
