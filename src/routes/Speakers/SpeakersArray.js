import { Component } from 'preact';

const speakers = [
    {
        id: 0,
        name: 'Jamie Bartlett.',
        twitter: '@JamieJBartlett',
        title: 'Guest speaker.',
        smallTitle: 'On stage: 10:15-10:45',
        info: 'Author of the factual bestseller The Dark Net, journalist and an engaging TED Talk speaker, Jamie Bartlett lights up the hidden corners of the internet to reveal the strange subcultures and protagonists that inhabit it – from Bitcoin miners to neo-Nazis. His areas of expertise range from internet culture and ‘the dark net’, social media research ethics, cryptocurrency and the reform to RIPA 2000.',
        src: '/assets/speakers/jamie-bartlett.png'
    },
    {
        id: 1,
        name: 'Sarah Shields.',
        twitter: undefined,
        smallTitle: 'On stage: 11:15 - 12:00',
        info: "Sarah Shields is one of the leading female businesswomen in the UK. Sarah has been at Dell EMC since 2008 and has traversed through the company's consumer, retail, small business and now channel organisations. A strong track record of success, growth and strong leadership, Sarah is known for her sharp thinking, sense of humour and drive for success.",
        titleImg: '/assets/logos/dellemc.png',
        src: '/assets/speakers/sarah.png'
    },
    {
        id: 2,
        name: 'Neil Sawyer.',
        twitter: undefined,
        smallTitle: 'On stage: 13:00 - 13:30',
        titleImg: '/assets/logos/hp.png',
        info: 'Neil Sawyer leads the UK&I Channel for HP in the UK. Responsible for all aspects of HP’s Printing, Personal Systems, Mobility and Software Solutions portfolio as well as Distribution, Corporate SI’s, ISV’s and the SME/Education reseller channel. In addition to this Neil also carries the revenue responsibility for the Education and Mid-Market End User Sales team.',
        src: '/assets/speakers/neil.png'
    },
    {
        id: 3,
        name: 'David Tweedale & Liam Hopwood.',
        twitter: undefined,
        titleImg: '/assets/logos/mimecast.png',
        smallTitle: 'On stage: 14:15 - 14:45',
        info: 'David and Liam have been members of the Mimecast Channel Team for over 3 years, focused on developing the relationship between Mimecast and MSP\'s and developing new security solutions. The duo will take the stage to discuss the evolving threat landscape, what can be done to secure the future of IT and talk about how mimecast can assist in the design and architecture of solutions that help keep customer\'s safe.',
        src: '/assets/speakers/david-and-liam.png'
    },
    {
        id: 4,
        name: 'Will Greenwood.',
        twitter: '@WillGreenwood',
        title: 'Guest speaker.',
        smallTitle: 'On stage: 14:45 - 15:15',
        info: 'With a professional career that spanned 11 years and 55 international caps will established a reputation as an unsurpassed mid-field creator. He was an integral part of England’s victorious World Cup campaign of 2003, a character and leader in one of the most successful team dynamics seen in recent times. His business credentials are equally impressive.',
        src: '/assets/speakers/will-greenwood.png'
    }
]

export default speakers;
