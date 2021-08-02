import React, { Component } from 'react';
import { connect } from 'umi';
import styles from './style.less'
interface IVacantSpaceProps {
  dispatch: any;
}
interface IVacantSpaceState {

}
class VacantSpace extends Component<IVacantSpaceProps,IVacantSpaceState> {
  constructor(props:IVacantSpaceProps){
    super(props)
  }
  handleClick = ()=>{
    this.props.dispatch({
      type:'vacantSpace/getda',
      payload:{}
    })
  }
  render() {
    const {vacantSpace} = this.props
    console.log(vacantSpace);
    
    return <div>
      vacantspace
      <h2>{vacantSpace}</h2>
      <button onClick={this.handleClick}>+</button>
      <div className={styles.bg}></div>
      </div>
  }
}
const mapStateToProps = (state)=> {
  console.log(state);
  return (
  { 
    ...state,
 })
}
export default connect(mapStateToProps) (VacantSpace)