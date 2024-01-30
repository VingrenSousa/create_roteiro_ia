import { View,Text,TextInput,TouchableOpacity,ImageBackground,ScrollView } from "react-native";
import { style } from "./style";
import { BlurView } from 'expo-blur';
import Slider from "@react-native-community/slider";
import React,{useState} from "react";
import Load from "../../componentes/load";
import Lorem from "../../componentes/lorem";

export default function Home(){
    // dias splide
    const[valueDias,setValueDias]=useState(1)
    //visibilidade e load
    const[load,setload]=useState(true)
    const[visible,setvisible]=useState(true)
    //roteiro
    const[roteiro,setroteiro]=useState('')
    //from
    const[city,setcity]=useState('')
    
    return(
        <ImageBackground 
        source={require('../../assets/mala.jpg')}
        style={style.body}>
            <View style={style.header}>
                <Text style={style.title}>Roteiro facil</Text>
                <View style={style.contentHeader}>
                    <BlurView  style={style.contentHeaderBlur}>
                        <Text style={style.TextTitle}>cidade destino</Text>
                        <TextInput
                        value={city}
                        style={style.imput}
                        onChangeText={(n)=>{setcity(n)}}
                        placeholder="Ex: São paulo,SP"/>
                        <View>
                            <Text style={style.TextTitle}> tempo de estadia: {valueDias}</Text>
                           <Slider
                            value={valueDias}
                            onValueChange={(n)=>{setValueDias(Math.floor(n))}}
                            minimumValue={1}
                            maximumValue={10}
                            minimumTrackTintColor="#fffff57f"
                            maximumTrackTintColor="#08080828"
                           />
                        </View>
                    </BlurView>
                </View>
            
            </View>    
            <TouchableOpacity 
            activeOpacity={0.9}
            style={style.button}>
                    <Text style={[style.Text,{color:'#fff'}]}> Gerar roteiro</Text>
            </TouchableOpacity>
            <View style={[style.main,visible?{display:"flex"}:{display:"none"}]}>
                <BlurView style={[style.mainBlur,visible?{display:"flex"}:{display:"none"}]}>
                   
                    {
                        load
                        ?(
                        <View style={[{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:15,gap:10}]}>
                            <Text style={style.TextTitle}> Roteiro de Viagem</Text>
                            <Load/>
                        </View>
                        )
                        :(
                        <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={style.scroll}>
                             <View style={[{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:15}]}>
                                 <Text style={style.TextTitle}> Roteiro de Viagem</Text>
                             </View>
                            <Text style={style.Text}>
                                {roteiro}
                            </Text>
                        </ScrollView>
                        )
                    }
                </BlurView>
            </View>
        </ImageBackground>
    )
}