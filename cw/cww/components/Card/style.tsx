import { StyleSheet , Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
export const styles=  StyleSheet.create({
    back:{
        color:"#5DB075",
        fontSize:16,
        fontWeight:'500',
        padding:10,
    },
    feed:{
        fontSize:30,
        fontWeight:'600',
    },
    backMarket:{
        color:"#ffff",
        fontSize:16,
        fontWeight:'500',
        padding:10,
    },
    feedMarket:{
        fontSize:30,
        fontWeight:'600',
        color:"#ffff",

    },
    containerSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',  
        alignItems: 'center',             
        margin: 15,
        width: '97%',
      },
      
    search:{
        backgroundColor:"#F6F6F6",
        width:'93%',
        padding:14,
        paddingLeft:20,
        margin:15,
        height:50,
        borderRadius:50,
        fontSize:16,
        fontWeight:'500',
        color:'#BDBDBD',
        borderWidth: 1, 
        borderColor: '#E8E8E8', 
    },
    container:{
      flexDirection:"row",
      margin:15,
    },
    imageContainer:{
        backgroundColor:"#F6F6F6",
        width:50,
        height:50,
        marginRight:16,
        borderRadius:8,
    },
    topContainer:{
      flexDirection:"row",
      justifyContent:"space-between",
      marginBottom:8,
      width:'70%',
    },
    title:{
      fontSize:16,
      fontWeight:'600',
      lineHeight:19,
    },
    content:{
      borderBottomWidth: 2, 
      borderBottomColor: '#E8E8E8',
      paddingBottom: 15,
      width:'70%',
    },
    bigImageContainer:{
        borderEndEndRadius:8,
        backgroundColor:"#F6F6F6",
        width:'93%',
        margin:15,
        height:200,
        marginTop:0,
        borderRadius:8,
    },
    contents:{
        paddingBottom: 2,
        fontSize:16,
        width:'97%',
    },
    contentscont:{
        marginLeft:15,
        marginBottom:10,
    },
    time:{
        color:'#BDBDBD',
        fontWeight:'400',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor:"#E8E8E8",
    },
    dotActive: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor:"#5DB075",
    },
    dotcont:{ 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        flex: 1 , 
        marginRight:10, 
        marginBottom:15},

    background: {
        height: height,
        width: width,   
    },
    text: {
        color: 'white',
    },
    marketCont:{
        paddingTop:25,
        backgroundColor:'#5DB075',
        justifyContent: 'center', 
        alignItems: 'center', 
    },    
    contCont:{
        paddingTop:25,
        justifyContent: 'center', 
        alignItems: 'center', 
    },
    img:{
        height:240,
        width:'92%',
        marginBottom:50,
        borderRadius: 20,
    },
    sectionTitle:{
        marginLeft:16,
        fontSize:24,
        fontWeight:'500',
        marginTop:35,
    },collection: {
        width: 120,
        marginRight: 10, 
      },
      block: {
        backgroundColor: '#F6F6F6',
        width: 110, 
        height: 110,
        marginTop: 23,
        borderRadius: 12,
      },
      horizontalList: {
        paddingLeft: 16,
      },
      
    itemPrice:{
        fontWeight:'700',
    },
  })