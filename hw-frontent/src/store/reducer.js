import {FETCH_GOODS_SUCCESS} from "./action";

const initialState = {
    goods: []
};

const reducer = (state = initialState, action) => {
    if(action.type === FETCH_GOODS_SUCCESS){
        return {...state, goods: action.goods}
    }
    return state;
};

export default reducer;