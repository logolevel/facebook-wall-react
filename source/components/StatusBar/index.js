//Core
import React, { Component } from 'react';
import { Transition } from 'react-transition-group';
import { TweenLite } from 'gsap';
import { Link } from 'react-router-dom';

//Components
import { withProfile } from 'components/HOC/withProfile';
import cx from 'classnames';

//Instruments
import Styles from './styles.m.css';
import { socket } from 'socket/init';

class StatusBar extends Component {
    state = {
        online: false
    }

    componentDidMount () {
        socket.on('connect', () => {
            this.setState({
                online: true,
            });
        });

        socket.on('disconnect', () => {
            this.setState({
                online: false,
            });
        });
    }

    componentWillUnmount () {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    _animateStatusBarEnter (statusBar) {
        TweenLite.fromTo(statusBar, 1, { opacity: 0 }, { opacity: 1 });
    }

    render() {
        const { avatar, currentUserFirstName } = this.props;
        const { online } = this.state;

        const statusStyles = cx(Styles.status, {
            [Styles.online]: online,
            [Styles.offline]: !online,
        })

        const statusMessage = online ? 'Online' : 'Offline';

        return (
            <Transition
                in
                appear
                timeout = { 1000 }
                onEnter = { this._animateStatusBarEnter }
            >
                <section className = { Styles.statusBar }>
                    <div className = { statusStyles }>
                        <div>{ statusMessage }</div>
                        <span />
                    </div>
                    <Link to = '/profile'>
                        <img src = { avatar } />
                        <span>{ currentUserFirstName }</span>
                    </Link>
                    <Link to = '/feed'>Feed</Link>
                </section>
            </Transition>
        );
    }
}

export default withProfile(StatusBar);