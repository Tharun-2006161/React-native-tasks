import React from "react";
import { View } from "react-native";
import { Text ,Button} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Task = () =>{
    const navigation = useNavigation();
    return (
        <View>
            <Text>Home Page</Text>
            <Button mode="elevated" onPress={()=>{navigation.navigate("Task1")}}    >Go to Contact</Button>
        </View>
    );
}
export default Task;    