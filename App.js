import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import {ArrowLeftIcon, AtSymbolIcon, LockClosedIcon} from 'react-native-heroicons/solid';


export default function App() {
  return (
    <View className="flex-1 bg-white">
   
      <View className="flex-row justify-start">
        <TouchableOpacity onPress={()=> navigation.goBack()} 
        className="mt-12 ml-4">
          <ArrowLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View>
   
 
    <View 
      style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}} 
      className="flex-1 bg-white px-8 pt-8">
        <View className="form">

          <Text style={{fontSize: 30, fontWeight: "bold", color: "#5CFF5C"}} className="ml-4">Login</Text>
          <Text style={{fontSize: 16}} className="text-black ml-4">A Place where you can Experience all</Text>
          <Text style={{fontSize: 16}} className="text-black ml-4">your live, Highlights, and Scoreboard.</Text>

          <Text style={{fontSize: 16}} className="text-black ml-4 mt-10">Email</Text>
          <AtSymbolIcon style={{marginTop:180, marginLeft:20, position: "absolute"}} size="22" color="#5CFF5C"/>
          <TextInput 
            style={{borderWidth: 2, borderColor: "#5CFF5C"}}
            className="p-4 text-gray-700 rounded-2xl ml-3 mb-3 mt-2"
            placeholder="email"
            value="        Ex: john@gmail.com" 
          />

         <Text style={{fontSize: 16}} className="text-black ml-4 mt-5">Your Password</Text>
       
          <TextInput 
            style={{borderWidth: 2, borderColor: "#5CFF5C"}}
            className="p-4 text-gray-700 rounded-2xl ml-3 mb-3 mt-2"
            secureTextEntry
            placeholder="email"
            value="john@gmail.com"  
          />

          <TouchableOpacity className="flex ml-4">
            <Text style={{fontSize: 16, color: "#5CFF5C", textDecorationLine: 'underline'}} className=" mb-5">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity 
          style={{fontSize: 16, backgroundColor: "#5CFF5C"}}
            className="py-3 ml-4 mt-6 rounded-xl">
             
              <Text className="text-xl font-bold text-center text-white">
                      Login
              </Text>
          
           </TouchableOpacity>
          
        </View>
        <Text className="text-xl text-black font-bold text-center ml-4 ">___________________________________________</Text>

        <TouchableOpacity 
           style={{borderWidth: 2, borderColor: "#5CFF5C"}}
            className="py-3 ml-4 mt-5 rounded-xl flex-row">
             <Image source={require('./assets/google.png')}  className="w-7 h-7 ml-20"  />
              <Text className="text-xl font-bold text-center ml-2 text-black">
                      Continue with Google
              </Text>
          
           </TouchableOpacity>
      
        <View className="flex-row justify-center mt-7">
            <Text className="text-black font-semibold">
                Don't have an account?
            </Text>
            <TouchableOpacity>
                <Text style={{fontSize: 16, color: "#5CFF5C", textDecorationLine: 'underline'}}> Register</Text>
            </TouchableOpacity>
        </View>
        
    </View>
  </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/


