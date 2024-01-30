import { ActivityIndicator, View,StyleSheet } from "react-native";

export default function Load(){ 
    return(
        <View style={style.content}>
            <ActivityIndicator
            size={25}
            color={"#000"}/>
        </View>
    )
}
const style= StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    
})