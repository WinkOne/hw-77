import axios from 'axios'

export const FETCH_GOODS_SUCCESS = 'FETCH_GOODS_SUCCESS';
export const CREATE_GOODS_SUCCESS = 'CREATE_GOODS_SUCCESS';

export const fetchGoodsSuccess = goods => {
    return {type: FETCH_GOODS_SUCCESS, goods}
};
export const createGoodsSuccess = () => {
    return {type: CREATE_GOODS_SUCCESS}
};

export const fetchGoods = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:8000/goods');
            dispatch(fetchGoodsSuccess(response.data));
        } catch (e) {
            console.error("qwertyuiop" + e)
        }
    }
};

export const createGoods = (data) => {
    return async (dispatch) => {
      try {
          await axios.post('http://localhost:8000/goods', data);
          dispatch(createGoodsSuccess())
      } catch (e) {
          console.error("123 " + e)
      }
  }
};

