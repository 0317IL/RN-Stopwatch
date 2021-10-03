import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#00aeef'
    },
    timer:{
      justifyContent: 'center',
      color: '#00aeef',
      fontSize: 65,
      fontWeight: 'bold',
      backgroundColor: '#FFF',
      borderRadius: 9
    },
    btnArea:{
      flexDirection: 'row',
      marginTop: 70,
      width: 250,
      height: 200

    },
    btn:{
      flex:1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      height: 40,
      margin: 17,
      borderRadius: 9
    },
    btnTexto:{
      fontSize: 20,
      fontWeight: 'bold',
      color: '#00aeef'
    },
    areaUltima:{
      marginTop: 40,
    },
    textoCorrida:{
      fontSize:25,
      fontStyle:'italic',
      color: '#FFF'
    }
  });

  export default styles;