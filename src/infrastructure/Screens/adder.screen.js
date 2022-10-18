import React from "react";
import { TextInput, Button } from 'react-native';

// AsycStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Adder = () => {

    return (
        <>
            <TextInput placeholder="What to do?" />
            <Button title="Add To Do" />
        </>
    )
}
