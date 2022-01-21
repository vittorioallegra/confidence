import React from 'react';
import { i18n } from 'i18next';
import { I18nextProvider } from 'react-i18next';
import { LocationProvider } from '../contexts';
import { Home } from './Home';

interface IProps {
    i18n: i18n;
}

class App extends React.Component<IProps> {
    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        /* eslint-disable no-console */
        console.error('App error:', error, errorInfo);
    }

    render() {
        return (
            <I18nextProvider i18n={this.props.i18n}>
                <LocationProvider>
                    <Home />
                </LocationProvider>
            </I18nextProvider>
        );
    }
}

export default App;
