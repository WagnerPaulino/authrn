import React from 'react';
import { Button, StyleSheet, View } from "react-native";
import useAuth from '../contexts/auth';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' }
})

export default function SignIn() {

    const { signing } = useAuth();


    return (
        <View style={styles.container}>
            <Button title="Sign In" onPress={signing} />
        </View>
    )
}