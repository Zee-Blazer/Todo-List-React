import React, { useState } from "react";
import { TextInput, Button } from 'react-native';

// AsycStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Adder = () => {

    const [todo, setTodo] = useState();
    const [list, setList] = useState();

    const getItems = async () => {
        try {
            AsyncStorage.getItem("TodoList")
                .then( async response => {
                    if (response == null) {
                        const item = [];
                        item.push({ todo });
                        await AsyncStorage.setItem("TodoList", JSON.stringify(item));
                        console.log("Saved");
                    }
                    else {
                        setList(JSON.parse(response));
                        const item = list;
                        item.push({ todo });
                        try{
                            await AsyncStorage.setItem("TodoList", JSON.stringify(item));
                        }
                        catch(err) {console.log(err)}
                    }
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <TextInput placeholder="What to do?" onChangeText={setTodo} />
            <Button title="Add To Do" onPress={getItems} />
        </>
    )
}
