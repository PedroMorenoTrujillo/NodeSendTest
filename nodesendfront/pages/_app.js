import React from 'react';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';

const MyApp = ({Component, pagesProps}) => {
    return (
        <AuthState>
            <AppState>
                <Component {...pagesProps} />
            </AppState>
        </AuthState>
    )
}

export default MyApp;