import { NO_OF_DAYS } from './constant';
const initialState = {
data: 0
};
const dataReducer = (state = initialState, action) => {
switch(action.type) {
case NO_OF_DAYS:
return {
...state,
data:action.payload
};
default:
return state;
}
}
export default dataReducer;
