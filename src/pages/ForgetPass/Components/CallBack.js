// @app
import React, { useState } from 'react';

import { Alert } from "react-native";
import auth from '@react-native-firebase/auth';

export const handleResetPassword = async (email,navigation) => {
    try {
        await auth().sendPasswordResetEmail(email);
        Alert.alert('Password Reset', 'An email has been sent to reset your password.');
        navigation.navigate('Login');
    } catch (error) {
        Alert.alert(error.message)
        console.error('Password reset error:', error.message);
    }
};