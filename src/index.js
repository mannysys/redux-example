import React from 'react'
import ReactDOM from 'react-dom'
import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import { addCount } from './createAction'
import { reducer } from './reducer'
import Counter from './Counter'

/*
 createStore接受 Reducer 作为参数，生成一个新的 Store。
 以后每当store.dispatch发送过来一个新的 Action，就会自动调用 Reducer，得到新的 State。
 */
const store = createStore(reducer)

// UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑
/*
 * mapStateToProps 是一个函数接受state作为参数（订阅了Store，每当state更新的时候，就会自动执行重新计算ui组件的参数，重新渲染）
 *                返回一个对象其中键名对应 ui组件中参数名，第一个参数总是state对象，还可以使用第二个参数ownProps，代表容器组件的props对象
 * mapDispatchToProps 用来建立UI组件的参数到store.dispatch方法的映射(可以是一个函数，也可以是一个对象)
 *                    如果是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数
 * UI组件 Counter有两个参数：value和onIncreaseClick
 * 要和mapStateToProps、mapDispatchToProps 方法中对象中键对应
 */
// 输入逻辑：将state映射到 UI 组件的参数（props）
const mapStateToProps = (state) => {
  return {
    value: state.count //作为props传递ui组件
  }
}
// 输出逻辑：将用户对 UI 组件的操作映射成 Action
// ownProps 是ui组件 props
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    onIncreaseClick: () => { dispatch( addCount() ) }
  }
}


// connect方法用于从 UI 组件生成容器组件（意思是讲容器组件和ui组件连起来）
// Count就是通过ui组件生成的容器组件，Counter则是ui组件
// 有2个方法，输入逻辑  输出逻辑
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

/*
 connect方法生成容器组件以后，需要让容器组件拿到state对象，才能生成 UI 组件的参数
 Provider组件，可以让容器组件拿到 state
 Provider在根组件外面包了一层，这样一来，App的所有子组件就默认都可以拿到state了
 */
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)


