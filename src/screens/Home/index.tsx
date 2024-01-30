import { View,Text,TextInput,TouchableOpacity,ImageBackground,ScrollView, ActivityIndicator, Alert,Keyboard } from "react-native";
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
    const[loads,setload]=useState(false)
    const[visible,setvisible]=useState(false)
    //roteiro
    const[roteiro,setroteiro]=useState('')
    //from
    const[city,setcity]=useState('')
    //PropsText
    const PropsText=`Crie um roteiro para uma viagem de exatos ${valueDias} dias na cidade de ${city}, busque por lugares turisticos, lugares mais visitados, seja preciso nos dias de estadia fornecidos e limite o roteiro apenas na cidade fornecida. Forneça apenas em tópicos com nome do local onde ir em cada dia.`
    // chamada de service
    const serviceIa=async()=>{
        setroteiro('')
        setload(true)
        setvisible(true)
        Keyboard.dismiss()
        if(!city){
            setload(false)
           Alert.alert('vc nao digitou a cidade ')
           setvisible(false)
           return;
        
        }else{
            setroteiro('')
            setload(true)
            setvisible(true)

            await fetch('https://api.openai.com/v1/chat/completions',{
               method:"POST",
               headers:{
                "Content-Type":"application/json",
                Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`
               },
               body:JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                      role: "user",
                      content:PropsText
                    }
                  ],
                  temperature:0.15,
                  max_tokens:500,
                  top_p:1,
               })
            })
            .then(Response=>Response.json())
            .then((data)=>{
                console.log(data)
                setroteiro(data.choices[0].message.content)
                data.error&& (setvisible(false))
                
            })
            .catch((erro)=>{ 
                console.log('erro '+erro)
                setvisible(false)
            }).finally(()=>{
                setload(false)
            }

            )

        }
    }
    
    return(
        <View 
        style={style.body}>
            <View style={style.bola1}></View>
            <View style={style.bola2}></View>
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
            onPress={()=>{
                serviceIa()
            }}
            activeOpacity={0.9}
            style={style.button}>
                <BlurView style={style.button}>
                    <Text style={[style.Text,{color:'#fff'}]}> Gerar roteiro</Text>
                </BlurView>
            </TouchableOpacity>
            {
            visible&&(
            <View style={style.main}>
                <BlurView  style={[style.main,{  height:'100%'}]}>
                  {
                    loads
                    ?(
                    <View style={{flex:1,justifyContent:"center",alignItems:"center",}}>
                        <ActivityIndicator
                        size={"large"} color={'#fff8f8'}/>
                     </View>
                   
                    )
                    :(
                    <View style={{flex:1,}}>
                        <ScrollView style={style.scroll}>
                            <Text style={style.TextSub}>Meu Roteiro de viagem</Text>
                            <Text style={style.Text}>{roteiro}</Text>
                        </ScrollView>
                        
                    </View>
                    )
                  }
                </BlurView>
            </View>
            )
            }
        </View>
    )
}









// const app=(    {
//                         load
//                         ?(
//                         <View style={[{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:15,gap:10}]}>
//                             <Text style={style.TextTitle}> Roteiro de Viagem</Text>
//                             <Load/>
//                         </View>
//                         )
//                         :(
//                         <ScrollView
//                         showsVerticalScrollIndicator={false}
//                         style={style.scroll}>
//                              <View style={[{flex:1,justifyContent:"center",alignItems:"center",paddingBottom:15}]}>
//                                  <Text style={style.TextTitle}> Roteiro de Viagem</Text>
//                              </View>
//                             <Text style={style.Text}>
//                                 {roteiro}
//                             </Text>
//                         </ScrollView>
//                         )
//                     })