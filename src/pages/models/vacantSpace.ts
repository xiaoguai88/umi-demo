
const model = {
    namespace:'vacantSpace',
    state:{
        count: 0
    },
    reducers:{
        save(state, action) {
            return {
              ...state,
              ...action.payload,
            };
          },
    },
    effects:{},
    subscriptions:{
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
              if (pathname === '/') {
                dispatch({
                  type: 'save',
                });
              }
            });
          },
    }
}
export default model