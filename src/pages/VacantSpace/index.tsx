import React, { Component } from 'react';
import { connect } from 'umi';

interface IVacantSpaceProps {
  dispatch: any;
}
interface IVacantSpaceState {

}
class VacantSpace extends Component<IVacantSpaceProps,IVacantSpaceState> {
  constructor(props:IVacantSpaceProps){
    super(props)
    this.state = {
      count: 0
    }
  }
  handleClick = ()=>{
    this.props.dispatch({
      type:'vacantSpace/save',
      payload:{}
    })
  }
  render() {
    console.log('===',this.props);
    const { count } = this.props
    console.log(count);
    
    return <div>
      vacantspace
      <h2>{count}</h2>
      <button onClick={this.handleClick}>+</button>
      </div>
  }
}
const mapStateToProps = (state)=> {
  return (
  { 
    ...state.vacantSpace,
 })
}
export default connect(mapStateToProps) (VacantSpace)