//Core
import React, { Component } from 'react';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

class Feed extends Component {
    render() {
        return (
            <section className = { Styles.profile }>
                <h1>Welcome, guest</h1>
                <p>Register please</p>
            </section>
        );
    }
}

export default withProfile(Feed);