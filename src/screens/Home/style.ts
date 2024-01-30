import {  StyleSheet } from "react-native";


const style =StyleSheet.create({
    body:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:80,
        alignItems:"center",
        gap:10
    },
    header:{
        width:'100%',
        height:'46%',
        alignItems:"center",
        gap:30
    },

    contentHeader:{
        width:'100%',
        height:'70%',
        borderRadius:20,
        overflow:"hidden",
        borderWidth:1,
        
    },
    contentHeaderBlur:{
        flex:1,
        paddingHorizontal:20,
        paddingVertical:20,
        gap:10,
   

    },
    title:{
        color:'#fff',
        fontSize:30,
        fontWeight:"600",
        fontVariant:["small-caps"]
    },
    Text:{},
    imput:{
        backgroundColor:'#ffffff94',
        width:'100%',
        height:45,
        borderWidth:1,
        borderRadius:7,
        padding:5,
        borderColor:'#525252a6'

    },
    slider:{},
    button:{
        justifyContent:"center",
        alignItems:"center",
        width:'96%',
        height:45,
        backgroundColor:'#d14242ff',
        borderRadius:8,
        
    },
    TextTitle:{
        fontSize:19,
        color:'#000',
        fontWeight:"500",
       
    },
    TextSub:{},
    main:{
        width:'100%',
        minHeight:100,
        overflow:"hidden",
        borderRadius:20,
        borderWidth:1,
        height:'50%'
        
        
    },
    mainBlur:{
        flex:1,
         padding:10,
        borderRadius:20,
        overflow:"hidden",
        borderWidth:1,
        paddingVertical:17,
        

    },
    scroll:{
        width:"100%",
        height:'100%',
        paddingBottom:30,
        paddingTop:10,
        gap:10
    }
})
export {style}