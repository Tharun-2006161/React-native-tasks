import React, { useState } from "react";
import { View } from "react-native";
import { Button,Text } from "react-native-paper";
import * as LocalAuthentication from "expo-local-authentication"
const FingerPrint = () => {
        const [message,setMessage] = useState("")
        const Open = async() =>{
            const status = await LocalAuthentication.hasHardwareAsync();
            console.log(status)
            const isEnrolled = await LocalAuthentication.isEnrolledAsync();
            console.log("Enrolled",isEnrolled)
            const result = await LocalAuthentication.authenticateAsync();
            console.log(result);
            if(result.success){
                setMessage("Authentication successful")
            }else{
                setMessage("Authentication Failed")
            }
        }
        
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center",gap:10}}>
            <Button onPress={Open} mode="contained">Click</Button>
            <Text>{message}</Text>
        </View>
    )
}
export default FingerPrint;