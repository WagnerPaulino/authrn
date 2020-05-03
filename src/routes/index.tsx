import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import useAuth from '../pages/contexts/auth';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

function Routes() {
    const { signed, loading } = useAuth();
    

    if (loading) {
        return (
            <View style={style.loading}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes;

const style = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})