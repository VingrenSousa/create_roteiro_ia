import {  StyleSheet } from "react-native";


const style =StyleSheet.create({
    body:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:80,
        alignItems:"center",
        gap:10,
        backgroundColor:'#2a3770'
    },
    header:{
        width:'100%',
        height:'46%',
        alignItems:"center",
        gap:30,
        
    },

    contentHeader:{
        width:'100%',
        height:'70%',
        borderRadius:20,
        overflow:"hidden",
        shadowColor: "#000000",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4
        
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
    Text:{
        color:'#ffffffcf',
        fontSize:15,
    },
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
        overflow:"hidden",
        borderRadius:8,
        
    },
    TextTitle:{
        fontSize:19,
        color:'#ffffff',
        fontWeight:"500",
      
        
       
    },
    TextSub:{
        fontSize:19,
        color:'#ffffff',
        fontWeight:"500",
        textAlign:"center",
        alignItems:"center",
        marginBottom:20
    },
    main:{
        width:'100%',
        minHeight:100,
        overflow:"hidden",
        borderRadius:20,
        height:'50%',
        
      
        
        
    },

    scroll:{
        width:"100%",
        height:'100%',
        paddingBottom:30,
        paddingTop:10,
        paddingHorizontal:20
        
    },
    bola1:{
        position:"absolute",
        width:100,
        height:100,
        backgroundColor:'#c93d25',
        borderRadius:1000,

        shadowColor: '##b1aa2a',
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,

        transform:[{translateX:-150},{translateY:500}]

    },
    bola2:{
        position:"absolute",
        width:100,
        height:100,
        backgroundColor:'#9e671e',
        borderRadius:1000,

        shadowColor: "##9e671e",
        shadowOffset: {
        width: 0,
        height: 3,
        },
        shadowOpacity:  0.17,
        shadowRadius: 3.05,
        elevation: 4,
        
        transform:[{translateX:140},{translateY:130}]

    }
})
export {style}