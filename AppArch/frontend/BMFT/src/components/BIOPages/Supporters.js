import React, { useState } from 'react';
import styles from '../styles/biography.module.css';
import Elma from "../assets/Elma.png";
import ProfilePic from "../assets/ProfilePic.jpg";


const communityStewards = [    
    {
      description: "The Community Stewards Program plays a crucial role in ensuring sustainable conservation efforts while simultaneously benefiting local communities. By empowering community members to take an active role in the stewardship of their natural resources, the program fosters a deep connection between the people and their environment. The program serves as a model for how community engagement can lead to long-term ecological sustainability, ensuring that both the forest and its inhabitants thrive for generations to come. The following are current BMFT community stewards that are leading sustainable projects in their communities.",
    },
   {
      name: "Humberto & Lupita Vasques",
      Community: "Sylvester",
      description: "Humberto and Lupita Vasques are dedicated community stewards in Sylvester Village, with their roots tracing back to the Corozal District. Their commitment to environmental conservation is evident through their active collaboration with the Belize Maya Forest Trust on various initiatives, where they consistently demonstrate a willingness to engage and support efforts aimed at preserving their local ecosystem. Lupita, who teaches at the Casey Community School, spearheads outreach projects within her classroom, fostering a sense of environmental responsibility among her students while also extending warm hospitality to the Jaguar team that monitors wildlife in the area. Meanwhile, Humberto plays a crucial role in promoting sustainable agricultural practices, contributing to seed and seedling collection for restoration projects. In addition to these efforts, he takes the lead in coordinating with the Sylvester team to combat forest fires within the Belize Maya Forest, working diligently alongside the BMF protection team. Together, Humberto and Lupita exemplify the spirit of stewardship, tirelessly advocating for their community and the health of our planet. ",
      imgSrc: NAME OF FILE 
    },
    {
      name: "David & Gladys Requena",
      Community: "Yalbac",
      description: "David and Gladys Requena represent a vibrant father-daughter partnership in the village of Yalbac. From the outset, David has been inspired by the mission of the BMF, believing that sustainable management of natural resources is essential for enduring growth within his community. As a dedicated farmer, he actively promotes regenerative agricultural practices, sharing his knowledge and experiences with fellow farmers in Yalbac and surrounding areas. In addition to his farming efforts, David contributes to the BMF as a part-time ranger, collaborating with the protection team and researchers to safeguard the local reserve. His latest initiative involves reforestation efforts, during which he has successfully planted over 500 seedlings to restore a riparian zone, thereby enhancing the watershed that supports both his farm and the broader community. Gladys, equally passionate about their mission, has joined her father in these endeavours, participating in data collection through social surveys and water sampling to assess water quality in Yalbac. Furthermore, she plays an active role in community outreach, engaging in events such as forest fire prevention campaigns, educational field trips, and the dissemination of crucial information to raise awareness and foster a culture of environmental responsibility among her peers.",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Mirna Castillo",
      Community: "Yalbac",
      description: "Mirna Castillo is a dedicated community steward in Yalbac village, where she plays a vital role in the community leadership, advocating for the overall well-being of her community. Collaborating closely with the BMFT team, Mirna has been instrumental in promoting the establishment of a health-conscious watershed, particularly in response to the challenges posed by chemical contamination from nearby conventional farming practices. Her commitment to environmental stewardship is evident through her organization of community creek clean-up day, which not only involve the participation of residents but also engage children and youth in painting litter-free signs to foster a sense of responsibility towards their surroundings. Additionally, Mirna has actively contributed to water quality research initiatives in Yalbac. Her unwavering dedication and proactive involvement make her a champion for a healthier environment for all.",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Leslie Penner",
      Community: "Spanish Lookout",
      description: "Leslie is a dedicated farmer and passionate birder who serves as the conservation representative for the Spanish Lookout community. He firmly believes that achieving a harmonious balance between nature and humans is essential for fostering a healthy and sustainable environment. Leslie has taken an active role in various birding workshops organized by the Belize Maya Forest Trust, where he not only enhances his own knowledge but also encourages others in his community to engage with avian species. His commitment extends to supporting avian monitoring efforts within the reserve, ensuring that data is collected to inform conservation strategies. Additionally, Leslie plays a crucial role in disseminating important information to his fellow community members, helping to raise awareness about environmental issues and the importance of biodiversity. Through his efforts, Leslie has established himself as a steward of his community, advocating for the protection of the natural landscape.",
      imgSrc: NAME OF FILE 
    },
      {
      name: "Ana Morales",
      Community: "Selena",
      description: "Ana Morales serves as a dedicated community steward in the Selena community, where she has played a pivotal role in supporting the Belize Maya Forest Trust's reforestation initiatives. Her passion for environmental restoration led her to actively engage in efforts aimed at revitalizing degraded areas within her community. Recognizing the importance of collective action, Ana mobilized children, youth, and other community members to participate in planting over 500 seedlings across various communal spaces, including the local football field, school, cemetery, and other significant locations in Selena. Beyond her reforestation work, Ana is deeply involved in capacity-building activities that foster sustainable agricultural practices and promote watershed protection, thereby enhancing the community's resilience and environmental stewardship.",
      imgSrc: NAME OF FILE 
    },
      {
      name: "Heidi Gonzales",
      Community: "Los Tambos",
      description: "Heidi is a dedicated gardener and owner of Plant Wonders Nursery located in the village of Los Tambos, where she active participates in the BMFT reforestation initiatives. By cultivating several hundred seedlings of various species, including Inga edulis, cedar, lime, and others, she plays a crucial role in enhancing the green landscape of her community. These seedlings are strategically planted in communal areas and local farmlands, contributing to the restoration of natural habitats and promoting biodiversity. Heidi's efforts foster a sense of community involvement, as residents join her in these reforestation projects, thereby strengthening their connection to the environment and encouraging sustainable practices for future generations.",
      imgSrc: NAME OF FILE 
    },
     {
      name: "Edras Navarro",
      Community: "Valley of Peace",
      description: "Edras Navarro serves as a dedicated community steward in the Valley of Peace, where he combines his roles as an educator, farmer, and father with a strong commitment to a healthy environment. His passion for environmental safety is particularly evident in his advocacy for the responsible use of fire, aimed at preventing potential disasters that could threaten both his community and the surrounding forest. Mr. Navarro, along with his family, has actively engaged in the BMFT Fire Safety Training program, successfully earning certification as a forest firefighter. Equipped with this expertise, he is now taking proactive steps to collaborate with the BMFT in creating an engaging comic story designed to raise public awareness about fire safety practices. Additionally, he aims to establish a community group focused on fire safety, which will work to prevent uncontrolled fires and provide support in fire suppression efforts when needed.",
      imgSrc: NAME OF FILE 
    },
    
    
const Volunteers = [    
   {
      description: "The role of volunteers and interns in the Belize Maya Forest is crucial for fostering sustainable conservation efforts and enhancing the well-being of local communities. These dedicated individuals bring fresh perspectives and energy to conservation projects, helping to protect the rich biodiversity of the forest while also engaging with the local population. By participating in hands-on activities such as reforestation, wildlife monitoring, and community education, volunteers and interns not only contribute to the preservation of this vital ecosystem but also empower residents by sharing knowledge and resources. This collaborative approach ensures that conservation efforts are not only effective in the short term but also create lasting benefits for the community, promoting a sense of ownership and responsibility towards the environment.  
          The involvement of passionate volunteers and interns is a key element in building a sustainable future for both the Belize Maya Forest and the communities that depend on it. To become a BMFT volunteer or Intern visit our Get Involve page for our volunteers’ guidelines and application process information.  ",
    },
   {
      name: "Michele Lemay",
      From: "Ottawa, Ontario, Canada",
      Volunteer period: May 2024 to PRESENT 
      description: "Michele Lemay has a wealth of experience in project management and conservation leadership working with non-governmental organizations. Now in retirement, she has chosen to channel her skills and knowledge into volunteer efforts that resonate with her passion for sustainable development. Currently, she is actively involved with the Belize Maya Forest Trust, where she contributes to community outreach initiatives and the stewards program. Michele plays a crucial role in evaluating and refining the framework of these programs, as well as support community workshops and improving the organization’s online presence. Her efforts are focused on ensuring that these initiatives not only address the needs of the organization but also uplift stakeholder engagement. Through her unwavering commitment, Michele not only fortifies the effectiveness of these programs but also cultivates a spirit of collaboration that ultimately benefits both the wider BMF landscape and the organization conservation goals.",
      imgSrc: NAME OF FILE 
    },

    
const Volunteers = [  
    {
      name: "Deborah Burgos",
      From: "Nuevo San Jose Palmar in the Orange Walk District",
      Internship period: August 2024  
      description: "Michele Lemay has a wealth of experience in project management and conservation leadership working with non-governmental organizations. Now in retirement, she has chosen to channel her skills and knowledge into volunteer efforts that resonate with her passion for sustainable development. Currently, she is actively involved with the Belize Maya Forest Trust, where she contributes to community outreach initiatives and the stewards program. Michele plays a crucial role in evaluating and refining the framework of these programs, as well as support community workshops and improving the organization’s online presence. Her efforts are focused on ensuring that these initiatives not only address the needs of the organization but also uplift stakeholder engagement. Through her unwavering commitment, Michele not only fortifies the effectiveness of these programs but also cultivates a spirit of collaboration that ultimately benefits both the wider BMF landscape and the organization conservation goals.",
      imgSrc: NAME OF FILE 
    },


    const Researchersteam = [    
    {
      description: "The role of scientific researchers in the Belize Maya Forest is crucial for ensuring the long-term conservation of this unique ecosystem. These dedicated professionals engage in extensive studies that not only enhance our understanding of the forest's biodiversity but also inform effective conservation strategies. By monitoring wildlife populations, assessing the health of various plant species, and analysing the impacts of climate change, researchers provide invaluable data that can guide policy decisions and conservation efforts. Their work often involves collaboration with local communities, fostering a sense of stewardship and encouraging sustainable practices that benefit both the environment and the people who depend on it. Ultimately, the insights gained from their research are essential for preserving the rich natural heritage of the Belize Maya Forest for future generations.",
    },
   {
      name: "Belize: Ix Jaguar Project",
      Research type: Fauna
      description: "The Ix Jaguar Project, established by Dr. Marcella Kelly in 1998, has become a cornerstone of wildlife monitoring efforts in Belize. Dr. Kelly, recognizing the importance of community involvement in conservation, enlisted the help of Darby and David Lugo, former students and volunteers from Virginia Tech, to further the project's mission. Currently, Darby and David take the lead in guiding the group of students while also training local community stewards from Sylvester to participate in daily wildlife monitoring activities. This dedicated research team has not only captured breathtaking photographs of the region's diverse wildlife but has also made significant contributions toward achieving the conservation goals set by the Belize Maya Forest (BMF).",
      imgSrc: NAME OF FILE 
    },
     {
      name: "Savanna Field Station",
      Research type: aquatic Fauna and water quality
      description: "The Savanna Field Station, under the leadership of Day Ligon, Donald McKnight, and Jen McKnight, has made significant strides in enhancing our understanding of the health of the aquatic ecosystems within the Belize Maya Forest. Donald McKnight has invested considerable time and effort in collecting water samples and conduct fish surveys from the Cara Blanca Pool, aiming to assess the water quality and fish population of this critical ecosystem. The entire research team is also focused on studying the vulnerable populations of Hicatee turtles inhabiting these pools. This comprehensive research initiative not only provides essential baseline data but also aligns with the organization's broader conservation objectives, ultimately contributing to the protection of these unique aquatic environments and their inhabitants.",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Bats survey",
      Research type: Fauna 
      description: "Giselle Marin is currently engaged in her doctoral research at the University of York in Canada, where she is investigating the dietary adaptability of bats in Belize, focusing on the distinction between specialists and generalists. This research is crucial for understanding the ecological resilience of individual species, particularly their ability to exploit alternative food sources during periods of scarcity. Such adaptability serves as a vital buffer against the challenges posed by fluctuating environmental conditions, including climate change and habitat degradation. By shedding light on the dietary habits and flexibility of these bats, the study aims to contribute to the conservation of these essential pollinators within forest ecosystems. Furthermore, it seeks to foster a more nuanced and compassionate understanding of these species, ultimately enhancing conservation strategies.",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Neotropical Ungulate Ecology Project",
      Research type: Fauna 
      description: "Annie Stevens has completed her graduate studies and Johny Tzib are currently engaged in their graduate studies at Virginia Tech, where they are spearheading Belize's first research focused on deer populations. Their work aims to delve into the ecology, behaviour, and life history of two significant neotropical ungulate species: the white-tailed deer and the red brocket deer. The study is set to establish essential baseline data for Belize, enhancing the understanding of these key game species. The insights gained from this research will be instrumental in informing and refining conservation strategies within the Belize Maya Forest, ultimately contributing to the preservation of its rich biodiversity.",
      imgSrc: NAME OF FILE 
    },
   {
      name: "Liana project",
      Research type: Flora 
      description: "Denver Cayetano is currently engaged in his doctoral studies at the University of Florida, where he is focusing his research on the intricate dynamics between lianas and trees within the Belize Maya Forest. His work aims to deepen the understanding of these relationships, which is crucial for developing effective forest management strategies and enhancing efforts to mitigate the impacts of climate change. By investigating how lianas interact with tree species, Cayetano's research seeks to provide valuable insights that can inform sustainable practices in forest restoration. This study is particularly significant as it aligns with the objectives of the REDD+ Carbon Project, which aims to improve the effectiveness of carbon reduction initiatives and establish best practices for forest restoration. Through this collaboration, Cayetano hopes to contribute to a more comprehensive approach to forest conservation that not only addresses ecological concerns but also supports local communities and biodiversity.",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Yalbac Water quality project",
      Research type: Water quality and community engagement 
      description: "Dr. Rachael Carrie from the University of Leeds conducted a comprehensive baseline study assessing the water quality in various sources within Yalbac village, including water tanks, nearby points along Black Creek, and nearby BMF lagoons and cenotes. The primary objective of this research is to identify and analyze the challenges the community encounters regarding both access to water and its quality. Notably, the village faces significant difficulties, particularly during the dry season, when the impacts of conventional farming practices, such as crop dusting, may lead to contamination of local water sources, including the creek. This study is essential for gaining insights into the potential health implications of agricultural practices on the well-being of households in the area. Currently, the research is ongoing, and its findings are expected to contribute valuable information for addressing the community's water-related issues.",
      imgSrc: NAME OF FILE 
    },
   {
      name: "The Valley of Peace Archaeology (VOPA) Project",
      Research type: Archeology studies in the BMF landscape   
      description: "Dr. Lisa Lucero, with the University of Illinois at Urbana-Champaign, embarked on an extensive study of the Maya Civilization in the Cayo District beginning in 1997. Her research aimed to uncover the patterns of regional settlement and establish a chronological framework for the area. This investigation encompassed several significant sites, including the Secret Cara Blanca Pools located within the Belize Maya Forest, Saturday Creek near Banana Bank, the medium-sized center of Yalbac, and various rural farmsteads. This archaeological study highlights the significant role of the landscape, and the hidden cultural heritage associated with the Belize Maya Forest. There remains a wealth of information yet to be discovered and understood within this region.  Although the project is currently on hold, interested parties can access the project reports through the provided link. 
          History of VOPA – Valley of Peace Archaeology (VOPA) Project ",
      imgSrc: NAME OF FILE 
    },
    {
      name: "Environmental Justice and the Water Temple at Cara Blanca, Belize Project",
      Research type: Archeology studies in the BMF landscape   
      description: "Dr. Jean Larmon, with the University of Montana, focused her doctoral research on the significant role of water in shaping the landscape of the Terminal Classic Maya period (circa 800–950 CE) at the archaeological site of Cara Blanca, located within the Belize Maya Forest. This area, once a vital communal hub for the Ancestral Maya during the Terminal Classic era, has since become obscured by dense vegetation and partially submerged in water, leading to a transformation of its ecological landscape. Presently, the remnants of this site, particularly the water temple complex, are crucial for safeguarding the surrounding environment, including the health of the waters at Cara Blanca. Larmon's research dives into the historical significance of this infrastructure, examining its enduring intentions and the impact of archaeological constructs on the dynamics of environmental justice within the region.  

Access the project reports in the provided link. Environmental Justice and the Water Temple at Cara Blanca, Belize (Jeannie Larmon) | the Digital Archaeological Record  ",
      imgSrc: NAME OF FILE 
    },
   {
      name: "Chan Chich Archaeological Project",
      Research type: Archeology studies in the BMF landscape   
      description: "Dr. Brett Houk, with Texas Tech University leads the Chan Chich Archaeological Project with the support of the Belize Estates Archaeological Survey Team (BEAST), form by students and professors at the Texas Tech University studying approximately 560 square kilometres in northwestern Belize. The Chan Chich Archaeological Project has investigated the ancient Maya site of Chan Chich between 1996 and 2019. The project has researched a wide range of topics at the site, but a primary focus has been to investigate the development and nature of Maya urbanism. Specifically, the project studies the relationships between rulers, their architectural complexes, and the process of city planning and building among the ancient Maya. The cultural landscape at any large Maya site comprises a variety of urban features including monumental architectural complexes, pathways, residential courtyards, agricultural fields, workshops, marketplaces, and water management features. Chan Chich site research is interconnected with the rest of sites across the landscape adding significant information to the cultural heritage of the Belize Maya Forest.  

Access the project reports in the provided links. (PDF) The 2018 Season of the Chan Chich Archaeological Project  
BEAST | SASW | TTU ",
      imgSrc: NAME OF FILE 
    },


    const Partners = [    
    {
      description: "The role of both national and international partners is crucial in advancing the vision and mission of the Belize Maya Forest Trust. These partnerships are essential for fostering a collaborative approach that combines local knowledge with global expertise, thereby enhancing the effectiveness of conservation strategies. By leveraging resources, sharing best practices, and engaging in joint initiatives, these partners contribute significantly to the long-term protection of the Belize Maya Forest. Ultimately, the synergy created through these alliances ensures that conservation efforts are not only successful but also sustainable for future generations.",
    },
   {
      name: "National partners",

Gallon Jug  

Rio Bravo Conservation Area  

Valley of Peace Farms LTD  

BATSUB  

The Nature Conservancy-Belize  

Wildlife Conservation Society 

Savanna Field Station  

The Belize Zoo  

Monkey Bay Wildlife Sanctuary  

TIDE  

CARDI 

University of Belize Environmental Research Institute 

BDF  

Pesticide Control Board-Belize  

Forest Department & Government of Belize  ",
      imgSrc: logos of partners 
    },

     {
      name: "International partners",    

Global International  

The Cornell Lab of Ornithology  

RARE, Center for behaviour and the environment  

WWF  

Re:Wild  

Delta Foundation  

The Foundation for Wildlife Conservation 
 },


         
];

const teamMembers = () => {
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
