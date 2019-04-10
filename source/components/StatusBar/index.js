//Core
import React, { Component } from 'react';

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

    render() {
        const { avatar, currentUserFirstName, currentUserLastName } = this.props;
        const { online } = this.state;

        const statusStyles = cx(Styles.status, {
            [Styles.online]: online,
            [Styles.offline]: !online,
        })

        const statusMessage = online ? 'Online' : 'Offline';

        console.log('online', online);

        return (
            <section className = { Styles.statusBar }>
                <div className = { statusStyles }>
                    <div>{ statusMessage }</div>
                    <span />
                </div>
                <button>
                    <img src = { avatar } />
                    <span>{ currentUserFirstName }</span>
                    <span>{ currentUserLastName }</span>
                </button>
            </section>
        );
    }
}

export default withProfile(StatusBar);