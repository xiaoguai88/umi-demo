import { getData } from '@/services';
import { Model, EffectsMapObject } from 'dva';


const model: Model = {
    namespace: 'vacantSpace',
    state: {
      guangList: []
    },
    reducers:{
        save(state, { payload }) {
          const _state = JSON.parse(JSON.stringify(state))
          _state.guangList = payload.data
            return _state;
          },
    },
    effects:{
      *getInitdata({ payload },{ call, put, select }) {
        const res = yield call( getData, payload)
      yield put( { type:'save', payload: res.data })
      }
    },
    subscriptions:{
        // setup({ dispatch, history }) {
        //     return history.listen(({ pathname }) => {
        //       if (pathname === '/') {
        //         dispatch({
        //           type: 'save',
        //         });
        //       }
        //     });
        //   },
    }
}
export default model