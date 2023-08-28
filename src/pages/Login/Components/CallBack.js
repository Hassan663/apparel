

// @app
import React, {
    useState
} from 'react';

import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export const handleLogin = async (email, password, navigation) => {
    try {
        const userCredential = await auth().signInWithEmailAndPassword(email, password);
        console.log(userCredential, 'userCredential');
    } catch (error) {
        Alert.alert('Login Error', error.message);
    }
};