//Core
import React, { Component } from 'react';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner  from 'components/Spinner';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            { id: "1", comment: 'Hi there!', created: 1410715640579 },
            { id: "2", comment: 'Hello world!', created: 1410355640324 },
        ],
        isSpinning: true,
    }
    render() {
        const { posts, isSpinning } = this.state;

        console.log(this.state.isSpinning);

        const postJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post } />
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <StatusBar />
                <Composer />
                { postJSX }
            </section>
        );
    }
}