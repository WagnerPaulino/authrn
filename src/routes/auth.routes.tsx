import React from 'react';
import SignIn from '../pages/signIn/SignIn';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} />
        </AuthStack.Navigator>
    )
}