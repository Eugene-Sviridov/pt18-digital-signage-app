import { Component } from 'preact';
import st from './style.scss';
import Speaker from './Speaker';

const SpeakersList = ({speakers}) => (
    <ul className={st.speakersList}>
        {
            speakers.map((speaker, index) => (
                <li className={st.speakerListEl} key={index}>
                    <Speaker 
                        speaker={speaker}
                        odd={index % 2 !== 0}
                    />
                </li>
            ))
        }
    </ul>
);

export default SpeakersList;