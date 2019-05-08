// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Switch, Route } from 'react-router-dom';

//Components
import Catcher from 'components/Catcher';
import StatusBar from 'components/StatusBar';
import Feed from 'components/Feed';
import Profile from 'components/Profile';
import Login from 'components/Login';
import { Provider } from 'components/HOC/withProfile';


//Instruments
import avatar from 'theme/assets/lisa.png';

const options = {
    avatar,
    currentUserFirstName: 'Данил',
    currentUserLastName: 'Заверюха',
    registered: true,
}

@hot(module)
export default class App extends Component {
    // state = {
    //     registered: false
    // }

    // _verifyUser = () => {
    //     options.currentUserFirstName === 'Данил' ? this.setState({registered: true}) : this.setState({registered: false});
    // }

    render() {
        return (
            <Catcher>
                <Provider value = { options }>
                    <StatusBar />
                    <Switch>
                        <Route component = { Feed } path = '/feed' />
                        <Route component = { Profile } path = '/profile' />
                        <Route component = { Login } path = '/login' />
                        { options.registered ? <Redirect to = '/feed' /> : <Redirect to = '/login' /> }
                    </Switch>
                </Provider>
            </Catcher>
        );
    }
}
