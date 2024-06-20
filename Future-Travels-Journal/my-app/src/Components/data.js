import northern_lights from "../Images/northern-lights.jpg";
import mykonos_greece from "../Images/mykonos-greece.jpg";
import ibiza_spain from "../Images/ibiza-spain.jpg";
import mount_fuji from "../Images/mount-fuji.jpg";
import sant from "../Images/sant.jpg";
import pin from "../Images/pin.png"


const data = [
    {
        key: 1,
        locationImage: northern_lights,
        country: 'Tromsø, Norway',
        pinLogo: pin,
        location: 'Aurora Borealis',
        inspo: 'I will be here in 5 years.',
        text: `The Aurora Borealis, or Northern Lights, is a natural light display
               seen in high-latitude Arctic regions. It occurs when charged solar particles 
               interact with Earth's magnetic field, creating vivid, colorful lights in the sky, 
               typically green, pink, purple, and red.`,
        mapLink: 'https://www.google.com/maps/place/Tromsø,+Norway/'
    },
    {
        key: 2,
        locationImage: mykonos_greece,
        country: 'Mykonos, Greece',
        pinLogo: pin,
        location: 'Omos',
        inspo: 'I will be here in 5 years.',
        text: `Omos is a picturesque beach in Mykonos, Greece, known for its crystal-clear waters 
               and vibrant nightlife. Visitors can enjoy relaxing on the sandy shores, 
               exploring local cuisine, and experiencing the lively atmosphere that makes Mykonos a 
               popular travel destination.`,
        mapLink: 'https://www.google.com/maps/place/Ornos+Beach,+Mikonos,+Greece/'
    },
    {
        key: 3,
        locationImage: ibiza_spain,
        country: 'Ibiza, Spain',
        pinLogo: pin,
        location: 'Es Vedrà',
        inspo: 'I will be here in 5 years.',
        text: `Es Vedrà is a mystical island off the coast of Ibiza, Spain, famous for its stunning 
               sunsets and intriguing legends. Surrounded by clear blue waters, it is a perfect spot 
               for sailing, photography, and enjoying the serene beauty of the Mediterranean.`,
        mapLink: 'https://www.google.com/maps/place/Es+Vedrà,+07830,+Balearic+Islands,+Spain/'
    },
    {
        key: 4,
        locationImage: mount_fuji,
        country: 'Honshu, Japan',
        pinLogo: pin,
        location: 'Mount Fuji',
        inspo: 'I will be here in 5 years.',
        text: `Mount Fuji is an iconic symbol of Japan located on Honshu island. This majestic 
               stratovolcano is a popular destination for hiking, offering breathtaking views from 
               its summit. The surrounding area features beautiful lakes, traditional shrines, 
               and hot springs, making it a culturally rich travel spot.`,
        mapLink: 'https://www.google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+Prefecture,+Japan/'
    },
    {
        key: 5,
        locationImage: sant,
        country: 'Monterrey, Mexico',
        pinLogo: pin,
        location: 'Paseo de Santa Lucía',
        inspo: 'I will be here in 5 years.',
        text: `Paseo de Santa Lucía is a scenic riverwalk located in Monterrey, Mexico. Known for its picturesque canals and vibrant atmosphere, visitors can enjoy boat rides, lush green spaces, and a variety of cultural attractions along the waterway. The riverwalk is a perfect spot for leisurely strolls, dining, and experiencing the charm of Monterrey.`,
        mapLink: 'https://www.google.com/maps/place/Paseo+Santa+Luc%C3%ADa,+Centro,+64000+Monterrey,+N.L.,+Mexico/'
    }
];

export default data;
