import React,{Component} from 'react'

export default class Counter extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const { value, onIncreaseClick } = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>增加</button>
      </div>
    )
  }

}