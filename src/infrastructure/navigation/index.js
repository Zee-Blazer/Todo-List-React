import React from 'react';
import { Text } from 'react-native';

// Navigation Container
import { NavigationContainer } from '@react-navigation/native';

// import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { History } from '../Screens/history.screen';
import { Todo } from '../Screens/todo.screen';
import { Adder } from '../Screens/adder.screen';

// const MainDrawerNav = createStackNavigator();
const MainStack = createStackNavigator();

export const MainNavigation = () => {

    return (
        <NavigationContainer>
            <MainStack.Navigator>
                <MainStack.Screen name="To Do" component={ Todo } />
                <MainStack.Screen name="History" component={ History } />
                <MainStack.Screen name="Add Todo" component={ Adder } />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}
