import React from 'react';
import Dashboard from '../pages/dashboard/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

export default function AppRoutes() {
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Dashboard" component={Dashboard} />
        </AppStack.Navigator>
    )
}