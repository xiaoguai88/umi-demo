
const model = {
    namespace:'vacantSpace',
    state: 0,
    reducers:{
        save(state, {payload}) {
            return {
              ...state,
              ...payload
            }
          },
    },
    effects:{
      *getda({payload},{call,put,select}){
        console.log('payload',payload);
      yield put({
        type:'save',
        payload:{
        }
      })

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