//Core
import React, { Component } from 'react';

//Instruments
import avatar from 'theme/assets/lisa.png';
import moment from 'moment';

export default class Post extends Component {
    render() {
        return (
            <section>
                <img src = { avatar } />
                <a>Lisa Sympson</a>
                <time>{ moment().format('MMM D h:mm:ss a') }</time>
                <p>Hello!</p>
            </section>
        );
    }
}