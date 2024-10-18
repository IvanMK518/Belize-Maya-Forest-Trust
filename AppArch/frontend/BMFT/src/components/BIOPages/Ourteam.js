import React, { useState } from 'react';
import styles from '../styles/ourteam.module.css';
import Rtop from "https://example.com/Rtop.JPG";
import Staff from "./Staff";

const teamMembers = [
    {
        name: "Ernesto Velasquez",
        position: "Head Ranger",
        description: "In the beautiful village of Bullet Tree Falls in the Cayo District, Ernesto Velasquez resides. With a nine-year experience in the Belize Maya Forest area, Ernesto has been working diligently to protect this incredible forest, which was previously unprotected. As the head ranger and fire boss at the Belize Maya Forest Trust for the past two years, Ernesto has had the privilege of directly collaborating with the ranger team's management. This role has provided him with a remarkable experience, and he remains committed to working alongside the ranger team to safeguard the native forest, its trees, the water systems of the Cara Blanca Pools, and the endangered animals of the Belizean jungle.",
        imgSrc: "https://example.com/ProfilePic.jpg"
    },
    {
        name: "Andy Naj",
        position: "BMF Ranger",
        description: "Andy, a dedicated BMF Ranger, is on a noble mission to safeguard and educate future generations on the intrinsic value of coexisting with nature. Residing in Arenal village, Cayo District, he has witnessed a gradual decline in wildlife, prompting him to immerse himself fully in the protection of the environment. Every moment spent in the defense of wildlife and forests is cherished by Andy, as he firmly believes in the interconnectedness between all living beings and the ecosystem. Andy considers himself fortunate to have found his calling as a BMF Ranger, where he is constantly learning from the diverse flora and fauna that surround him. Nature, in his eyes, is the ultimate mentor, imparting invaluable lessons on the importance of stewardship and conservation. Beyond the technical aspects of his role, Andy's unwavering passion and deep affection for the forest and its biodiversity drive him to instill a sense of responsibility in others. Through his work at BMF, he strives to raise awareness about the critical role that plants and animals play in sustaining our existence.",
        imgSrc: "https://example.com/AndyNaj.JPG"
    },
    {
        name: "Moises Velasquez",
        position: "BMF Ranger",
        description: "Moises Velasquez serves as a ranger at the Belize Maya Forest, finding immense fulfillment in safeguarding a vital part of Belize that will benefit both present and future generations. Witnessing the gradual disappearance of Belize's forests and the consequential loss of watersheds during his upbringing, he is deeply committed to his role at the Belize Maya Forest Trust. His daily tasks involve exploring the stunning, verdant forest on foot, marveling at the breathtaking lagoons, and continuously being captivated by the diverse wildlife that thrives in this natural habitat.",
        imgSrc: "https://example.com/MoisesVelasquez.JPG"
    },
    {
        name: "Myro Sho",
        position: "BMF Ranger",
        description: "Myro Ervin Sho stands as a beacon of dedication in his role as a ranger at the Belize Maya Forest Trust. Originally from Pueblo Viejo Village, Toledo District, his commitment to preserving the natural treasures of Belize's forests transcends mere employment, constituting a heartfelt mission. For him being a ranger is not just a profession; it's a solemn responsibility to safeguard the delicate balance of nature. His daily endeavors involve protecting the diverse flora and fauna, maintaining ecological harmony, and ensuring the sustainability of these invaluable ecosystems for generations to come. To him, this duty holds immense significance. The forests they protect serve as the lungs of the Earth, purifying the air, providing habitats for countless species, and offering invaluable resources crucial to sustaining life. The forests also hold cultural and historical importance, deeply rooted in the heritage of the people of Belize. He stands tall as guardians of Belize's natural heritage, tirelessly working to ensure that these forests thrive, not just for today, but for the countless tomorrows yet to come.",
        imgSrc: "https://example.com/MyroSho.JPG"
    },
    {
        name: "Byron August",
        position: "BMF Ranger",
        description: "Byron is a BMF Ranger, and his role of safeguarding the diverse wildlife and rich biodiversity within the forest has heightened his reverence for the environment and the obligation to safeguard it for the coming generations. Moreover, the impact of his efforts transcends the boundaries of Belize, as wildlife freely traverses through Guatemala and Mexico, emphasizing the interconnectedness of ecosystems. He has cultivated within him a profound sense of responsibility and honor in preserving the natural legacy of the area, ensuring that the forthcoming generations can revel in its magnificence. It is not merely a duty but a clarion call for all individuals to actively engage in safeguarding the invaluable forests by abstaining from excessive hunting and averting fires in the broadleaf forests.",
        imgSrc: "https://example.com/ByronAugust.JPG"
    },
    {
        name: "Keith Green",
        position: "BMF Ranger",
        description: "Keith is from San Ignacio town in Cayo. Throughout his upbringing, he has always been known as a spirited and ambitious individual who finds joy in exploring the stunning outdoors of Belize and immersing himself in the natural environment. His deep-rooted love for nature and the wildlife of Belize has steered him towards a career dedicated to environmental conservation and protection. Being a BMF Ranger has not only transformed his life but has also provided him with a fulfilling career brimming with enriching experiences and a profound understanding of Belize's rich heritage and environment. From conducting patrols in their protected forest reserves to combatting forest fires, every challenge he faces as a Forest Ranger has been a valuable learning experience. He takes immense pride in serving as a protector of the environment under the Belize Maya Forest Trust organization.",
        imgSrc: "https://example.com/ProfilePic.jpg"
    },
    {
        name: "Mariano Taca",
        position: "BMF Ranger",
        description: "Mariano Taca, also known as Marz, hails from the beautiful town of Peini (Punta Gorda). He has an associate degree in Natural Resources Management, which is the reason he has chosen to pursue a career working with the environment and biodiversity that he loves. He is physically fit, possesses strong communication skills, and has a passion for conservation. The Belize Maya Forest has an abundance of flora and fauna and the beautiful Cara Blanca pools, which are the heart of the forest and vital to biodiversity. He appreciates the opportunity given to them to train in fire suppression and the use of the Spatial Monitoring and Reporting Tool (SMART) to record their daily work. His vision working at BMFT is to work closely with guests and share information about the unique features of the Belize Maya Forest through educational tours and presentations. They also really enjoy bird watching at Belize Maya Forest. His commitment and passion for conserving the natural environment at BMFT will play a vital role in fostering a positive and memorable experience for all.",
        imgSrc: "https://example.com/MarianoTaca.JPG"
    },
    {
        name: "Alpheos Edwards",
        position: "BMF Ranger",
        description: "Alpheos Edwards lives in the beautiful town of Santa Elena, Cayo District. He is proud to be a forest ranger for the Belize Maya Forest (BMF). Today, he wants to share his experience as a ranger within the beautiful forest and vast pools and streams of the BMF. Working as a ranger, he feels the forest is calling for them. He believes that Belize Maya Forest is for everyone, to protect and enjoy. The area is enriched with flora and fauna, a forest that serves as the lungs of nature, purifying the air they breathe. Exploring nature is his hobby; everywhere he goes, he feels like nature follows him. The sun, the rain, the air, the birds—he never feels alone because nature has become part of him.",
        imgSrc: "https://example.com/AlpheosEdwards.JPG"
    },
    {
        name: "Edgar Mendrano",
        position: "BMF Ranger",
        description: "Edgar Medrano stated that his name is Edgar Medrano. He has been working in the Belize Maya Forest for the past 10 years, two of which were spent with BMFT and the other eight with a previous landowner. He expressed his enjoyment in working for BMFT because the organization has opened new opportunities for the staff. They have participated in several trainings, including search and rescue as well as basic techniques of wildland fire suppression. Such trainings are very helpful because this year, for example, they had several fires in which these basic techniques had to be implemented. The speaker has a real passion for the forest. They believe that without the forest, which produces clean air and provides temperature control, no living thing on this planet would be able to survive. They emphasize the necessity of the forest while noting that the forest also needs support to remain green. Therefore, the speaker would like to ask everyone to be a part of this green world.",
        imgSrc: "https://example.com/EdgarMendrano.JPG"
    },
    {
        name: "Rhajied Reyes",
        position: "BMF Ranger",
        description: "His name is Rhajjed Rhamar Reyes, and he hails from the beautiful Teakettle village. At 21 years old, he proudly serves as a ranger for the Belize Maya Forest Trust. This role resonates deeply within him because it allows him to immerse himself in the beauty of nature while actively protecting it and learning new skills. Being a ranger is more than a job for him; it's a way of life that aligns with his passion for nature and his desire to make a positive impact. Rhajjed considers it a privilege to work in the BMF, as it fosters a strong bond with nature and the wildlife that inhabit it. The beauty of the Belize Maya Forest, with its lush greenery and vibrant ecosystem, constantly inspires him. Through his role, he hopes to inspire others to appreciate and protect the natural world.",
        imgSrc: "https://example.com/RhajjedReyes.JPG"
    }
];

const OurTeam = () => {
    const [activeMember, setActiveMember] = useState(null);

    return (
        <div className={styles.teamContainer}>
            {teamMembers.map((member, index) => (
                <div key={index} className={styles.teamMember} onClick={() => setActiveMember(index)}>
                    <img src={member.imgSrc} alt={member.name} className={styles.profilePic} />
                    <h3>{member.name}</h3>
                    <p>{member.position}</p>
                </div>
            ))}
            {activeMember !== null && (
                <div className={styles.memberDetails}>
                    <h2>{teamMembers[activeMember].name}</h2>
                    <p>{teamMembers[activeMember].description}</p>
                    <button onClick={() => setActiveMember(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default OurTeam;
