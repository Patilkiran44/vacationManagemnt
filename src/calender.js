import { Calendar } from 'react-native-calendars';
import { View } from 'react-native';
import React from 'react';
import { Button} from "@rneui/themed";

export default class Calender extends React.Component {
    constructor(props) {
        super();
        this.state = {
            markedDates: {},
            isStartDatePicked: false,
            isEndDatePicked: false,
            startDate: '',
            datesArray :[]
        }
    }
    onDayPress = day => {
        let markedDates = this.state.markedDates;
         let  datesArray =this.state.datesArray
        if (markedDates[day.dateString]) {
        const newDates = markedDates;
        delete newDates[day.dateString];
        this.setState({
        markedDates: markedDates,
        isStartDatePicked: false,
        isEndDatePicked: true,
        startDate: day.dateString,
        datesArray :datesArray
        });
        } else {
        markedDates[day.dateString] = {
        selected: true,
        startingDay: false,
        color: '#F5D14E',
        textColor: '#FFFFFF',
        };
        datesArray.push(day.dateString)
        this.setState({
        markedDates: markedDates,
        isStartDatePicked: false,
        isEndDatePicked: true,
        startDate: day.dateString,
        datesArray :datesArray
        });
        }
        };
      
    render() {
        return (
            <View style={{ paddingTop: 50, flex: 1 }}>
                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2022-03-01'}
                    minDate={'2020-05-10'}
                    maxDate={'2024-05-30'}
                    onDayPress={day => {
                        this.onDayPress(day)
                                        }}
                    monthFormat={'MMMM yyyy'}
                    onMonthChange={month => {
                    }}
                    hideArrows={false}
                    hideExtraDays={true}
                    disableMonthChange={true}
                    firstDay={1}
                    markingType={'period'}
                    markedDates={this.state.markedDates}
                />
                 <Button
          title="SELECT"
          buttonStyle={{ backgroundColor: '#F5D14E' }}
          containerStyle={{
            width: 300,
            height :50,
            margin :40,
          }}
          titleStyle={{ color: 'white' }}
          onPress={() => this.props.navigation.navigate('Edit',{dates:this.state.datesArray})}
        />
            </View>
        );
    }
}