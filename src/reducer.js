
/*
 reducer 是负责返回一个全新的对象，重新渲染UI
 Store 收到 Action 以后，必须给出一个新的 State，
 这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer
 Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State
 */
const defaultState = {
  count: 0
};
export const reducer = (state=defaultState, action) => {
  switch(action.type){
    case 'ADD_COUNT':
      return { count:  state.count + 1}
    default:
      return state

  }
}
/*
 实际应用中，Reducer 函数不用手动调用，store.dispatch方法会触发 Reducer 的自动执行。
 为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
 */

/*
 可以将多个 reducer 合并成一个reducer
 通过combineReducers方法将三个子 Reducer 合并成一个大的函数
 import { combineReducers } from 'redux';

 const chatReducer = combineReducers({
   chatLog,
   statusMessage,
   userName
 })

 export default todoApp;
 */