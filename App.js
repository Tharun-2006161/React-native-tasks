// import React from "react";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { Provider as PaperProvider } from "react-native-paper";
// import Task from "./Task.jsx"
// import Task1 from "./Task1.jsx"
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Icon } from "react-native-paper";
// const App = ()=>{
//   const Stack =createNativeStackNavigator();
//   return (  

//     <SafeAreaProvider>
//       <PaperProvider>
//         <NavigationContainer>
//           {/* <Stack.Navigator screenOptions={
//             {
//               // title:"Tharun",
//               // headerShown:false
//               headerStyle:{
//                 backgroundColor:"orange"
//               },
//               headerTitleStyle:{
//                 fontSize:26,
//                 fontWeight:"bold"
//               },
//               headerTitleAlign:"center",
//               headerRight: () => <Icon source="bell" size={26} />,
//               headerLeft: () => <Icon source="home" size={26} />,
//               // headerBackButtonDisplayMode:"minimal"
//               animation:"fade"
//             }
//           }>
//             <Stack.Screen name="Task" component={Task}></Stack.Screen>
//             <Stack.Screen name="Task1" component={Task1}></Stack.Screen>
//           </Stack.Navigator> */}

//         </NavigationContainer>
//       </PaperProvider>
//     </SafeAreaProvider>
//   );
// };

// export default App;


// 





import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
// import Galleryimages from "./Galleryimages.jsx";
// import Sharesheet from "./Sharesheet.jsx";
// import CameraAccess from "./CameraAccess";
// import Microphone from "./Microphone"
import FingerPrint from "./FingerPrint";
const App = () =>{
  return(
     <SafeAreaProvider>
      <PaperProvider>
        <FingerPrint/>
      </PaperProvider>
     </SafeAreaProvider>
  )
}

export default App;