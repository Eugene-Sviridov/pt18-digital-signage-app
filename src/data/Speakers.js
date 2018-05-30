class Speakers {
    speakers = [
        {
            id: 0,
            name: 'Jamie Bartlett.',
            title: 'Guest speaker.',
            photo: '/assets/speakers/jamie-bartlett.png'
        },
        {
            id: 1,
            name: 'Will Greenwood.',
            title: 'Guest speaker.',
            photo: '/assets/speakers/will-greenwood.png'
        },
        {
            id: 2,
            name: 'David Tweedale & Liam Hopwood.',
            titleImg: '/assets/logos/mimecast.png',
            photo: '/assets/speakers/david-and-liam.png'
        },
        {
            id: 3,
            name: 'Sarah Shields.',
            titleImg: '/assets/logos/dellemc.png',
            photo: '/assets/speakers/sarah.png'
        },
        {
            id: 4,
            name: 'Neil Sawyer.',
            titleImg: '/assets/logos/hp.png',
            photo: '/assets/speakers/neil.png'
        }
    ];

    getSpeakers() {
        return this.speakers;
    }

    getSpeakerById(id) {
        const speaker = this.speakers.find((s) => s.id === id);

        return speaker || undefined;
    }    
}

const speakers = new Speakers();


export default speakers;