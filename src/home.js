import React, { Component } from 'react';
import { connect } from "react-redux";
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { Avatar ,Button ,Icon } from "@rneui/themed";


const avatarImage ='https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg';


class Home extends Component {

    constructor(props) {
        super();
        this.state = {
          usedDays:0 ,
          availableDays :30
        }
    }
    render() {

        return (
            <View style={styles.mainContainer} >
                <View style={styles.avatarView}>
                <Avatar
              size={100}
              rounded
              source={ { uri: avatarImage } }
            />
            </View>
             <View style={styles.detailsView}>
                 <View style={styles.empDetails}>
                    <View>
                 <Text style={styles.empName}>Kiran Patil</Text>
                 <Text style={styles.designation}>React-Native Developer</Text>
                 </View>
                 <Button
              buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)' }}
              onPress={() => this.props.navigation.navigate('Edit')}
            >
                 <Icon name="add" color="white" />
                </Button>
             </View>
             <View style={styles.separator}></View>
             <View style={styles.rowStyle}>
                <View style={styles.row_item}>
                    <Text>Available</Text>
                    <Text style={styles.dayStyle}>{this.state.availableDays-this.props?.usedDays} days</Text>
                  </View>
                  <View style={styles.separatorVertical}></View>
                  <View style={styles.row_item}>
                    <Text>All</Text>
                    <Text style={styles.dayStyle} >30 days</Text>
                  </View>
                  <View style={styles.separatorVertical}></View>
                  <View style={styles.row_item}>
                    <Text>Used</Text>
                    <Text  style={styles.dayStyle} >{this.props?.usedDays} days</Text>
                  </View>
                </View>
             </View>
                <View style={styles.extraView}>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    mainContainer :{
        flex: 1,
        backgroundColor :"#F5D14E",
    },
    avatarView :{
        alignItems :"center",
        margin : 10
    },
    detailsView :{
        flex: 1,
       backgroundColor :"white",
       margin : 5,
       borderTopEndRadius: 30,
       borderTopStartRadius: 30,
       borderBottomEndRadius: 30,
       borderBottomStartRadius: 30,
       padding :20,
    },
   extraView :{
      flex: 1,
       backgroundColor :"white",
       margin : 5
    },
    empName :{
        fontSize :40,
        fontWeight: "bold",
        color :"black"
    },
    designation :{
        fontSize :15,
    },
    empDetails :{
     flexDirection :"row",
     justifyContent:"space-between",
     marginTop :20,
    },
   separator: {
        height: 1,
        backgroundColor: "#DBDBDB",
        marginTop :20,
        marginBottom :30,
      },
  separatorVertical: {
        height: 45,
        width: 1,
        backgroundColor:"#DBDBDB",
      },
      rowStyle: {
        flexDirection: "row",
        alignItems: "flex-start",
      },
      row_item: {
        alignItems: "center",
        width: "30%",
      },
      dayStyle :{
        fontSize :13,
        color:"black",
        margin:2,
        fontWeight: "bold",
      },
})



  const mapStateToProps = state => ({
    usedDays: state.data.data,
  });
  
  export default connect(mapStateToProps,null)(Home);
