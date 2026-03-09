import React from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
const Task1=()=>{
    const navigation = useNavigation();
    return(
        <View>
            <Text>Contact Page</Text>
            <Button onPress={()=>{navigation.navigate("Task")}} style={{backgroundColor:"yellow"}}  >Go to Home Page</Button>
        </View>
    );
}
export default Task1