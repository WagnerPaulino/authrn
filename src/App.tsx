import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './pages/contexts/auth';
import Routes from './routes';



export default function App() {

    return (
        <NavigationContainer>
            <AuthProvider>
                <Routes></Routes>
            </AuthProvider>
        </NavigationContainer>
    )
}