import React from 'react';
import { Button, Text, View } from "react-native";
import useAuth from '../contexts/auth';

export default function Dashboard() {
    const { signOut, user } = useAuth();

    return (
        <View>
            <Text>{user?.name}</Text>
            <Button title="Logout" onPress={signOut} />
        </View>
    )
}