import { Component } from 'preact';
import Container from '../Container';
import PrizesInfo from '../PrizesInfo';

export default class PrizesHOC extends Component {
    render({title, subtitle, items, goToPage}) {
        return (
            <Container
                noBackground
                text={title}
            >
                <PrizesInfo
                    subtitle={subtitle}
                    items={items}
                    goToPage={goToPage} 
                 />
            </Container>
        );
    }
}
