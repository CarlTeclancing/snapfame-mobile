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
  title1:{
    textAlign:'left'
  }
});
