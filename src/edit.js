import React, { Component } from 'react';
import { connect } from "react-redux";
import { Text, View,TouchableOpacity, StyleSheet  } from 'react-native';
import { Avatar ,Button,Icon} from "@rneui/themed";
import moment from "moment";
import { noOfDays } from './redux/actions';
import { bindActionCreators } from 'redux';

const avatarImage ='https://cdn.pixabay.com/photo/2019/11/03/20/11/portrait-4599553__340.jpg';
const format = "MMMM Do YYYY"

class Edit extends Component {

  constructor(props) {
    super();
    this.state = {
     fromDate :"",
     toDate : "",
    }

  }

  OnChangeConfirm= (dates)=>{
    this.props.actions.noOfDays(dates)
    this.props.navigation.navigate('Home')

  }
  onChangeCalender = ()=> {
   this.props.navigate.navigation('Calender')
  }
  render() {
    const dates = this.props.route.params?.dates;
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
        <Text style={styles.textStyle}>New Request</Text>
        <View style={styles.rowStyle}>
          <View style={styles.cardStyle}>
          <Icon
        reverse
        name='calendar'
        type='ionicon'
        size={15}
      />
            <Text style={styles.leavesName}>Annual</Text></View>
          <View style={styles.cardStyle}>
          <Icon
        reverse
        name='people-circle-outline'
        type='ionicon'
        size={15}
      /><Text style={styles.leavesName}>Parential</Text></View>
          </View>
          <View style={styles.rowStyle}>
          <View style={styles.cardStyle}>
          <Icon
        reverse
        name='card'
        type='ionicon'
        size={15}
      /><Text style={styles.leavesName}>UnPaid</Text></View>
          <View style={styles.cardStyle}>
          <Icon
        reverse
        name='bonfire'
        type='ionicon'
        size={15}
      />
            <Text style={styles.leavesName}>Specials</Text></View>
          </View>
          <View style={styles.inputConatainer}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Calender')}>
          <Text style={styles.leavesName}>From</Text>
          <Text style={styles.datesName}>{dates ?  moment(dates[0]).format(format) : ""}</Text>
         
          <View style={styles.separator}></View>
          </TouchableOpacity>
          <Text style={styles.leavesName}>To</Text>
          <Text style={styles.datesName}>{dates ?  moment(dates[dates.length-1]).format(format)  :""}</Text>
          <View style={styles.separator}></View>
          </View>
        <View style={styles.buttonStyle}>
           <Button
           title="CONFIRM"
          buttonStyle={{ backgroundColor: '#F5D14E' }}
          containerStyle={{
            width: 300,
            height :50,
            margin :20,
          }}
          titleStyle={{ color: 'white' }}
          onPress={() => this.OnChangeConfirm(dates?.length)}
        />
         </View>
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
buttonStyle:{
  marginBottom :0,
},
textStyle :{
  margin : 20,
  fontSize :30,
  fontWeight: "800",
  color :"black"
},
rowStyle: {
  flexDirection: "row",
  alignItems: "flex-start",
},
cardStyle :{
 flex: 1,
 backgroundColor :"rgba(241, 239, 233 ,1)",
 borderTopEndRadius: 20,
 borderTopStartRadius: 20,
 borderBottomEndRadius: 20,
 borderBottomStartRadius: 20,
 padding :15,
 margin :5,
 height : 100
},
input: {
  height: 40,
  margin: 12,
  borderWidth: 1,
  padding: 10,
},
leavesName :{
  fontSize :15,
},
datesName :{
  fontSize :20,
  color:"black"
},
separator: {
  height: 1,
  backgroundColor: "#DBDBDB",
},
inputConatainer:{
  margin :10
}
})
const ActionCreators = Object.assign(
  {},
  {noOfDays},
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(null,mapDispatchToProps)(Edit);