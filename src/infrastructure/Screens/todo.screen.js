import React from 'react';
import { Text, Button } from 'react-native';

// Components
import { SafeAir } from '../../components/safeArea';

export const Todo = ({ navigation }) => {

    const date = new Date();
    console.log(date.getTime());

    return (
        <SafeAir>

            <Button onPress={ () => navigation.push('History') } title="Move to history"/>
            <Button onPress={ () => navigation.push('Add Todo') } title="Add To Do"/>
        </SafeAir>
    )
}
