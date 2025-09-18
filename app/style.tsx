// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:12,
    width:'100%'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginLeft:12
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginLeft:12
  },
  button: {
    backgroundColor: '#ffffffff',
    padding: 12,
    borderRadius: 8,
    color:'black'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  topnav:{
    flex:1,
    width:'100%',
    height:50,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  profileImage:{
    width:50,
    height:50
  },
  flexRow:{
    display:'flex',
    flexDirection:'row',
    height:'100%',
    alignItems:'center'
  },
  column:{
    textAlign:'left'
  },
  column1:{
    textAlign:'left',
    width:'100%',
    marginTop:24
  },
  header:{
    backgroundColor:'#5B0C4E',
    width:'100%',
    height:150,
    borderRadius:24,
    padding:24,
    marginTop:24,
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  },
  headingWhite:{
    color:'white',
    fontSize:24
  },
  servicesContainer:{
    marginTop:16,
    width:'100%',
    height:'auto',
    display:'flex', 
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'flex-start',
    justifyContent:'space-around',
  },
  service:{
    width:80,
    height:80,
    borderRadius:12,
    backgroundColor:'#5b0c4e50',
    margin:16
  },
  notificaton:{
    width:40,
    height:40
  },
  paddingTop:{
    marginTop:32
  }

});
