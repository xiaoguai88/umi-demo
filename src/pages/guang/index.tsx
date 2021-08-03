import React, { Component } from 'react';
import { connect } from 'dva'
import { Table } from 'antd'
import { getHomeInfo } from '../../services';

interface guangItem {
    name: string;
    gender:string;
    skill: string;
    address: string;
}
interface IProps {
    dispatch: any;
}
type IState  = {
    datasource: guangItem[]
}
const columns = [
    { title: '名称', dataIndex:'name', key: 1 },
    { title: '性别', dataIndex:'gender', key: 2 },
    { title: '技能', dataIndex:'skill', key: 3 },
    { title: '地址', dataIndex:'address', key: 4 },
]
class Guang extends Component<IProps,IState> {
    constructor(props:IProps){
        super(props)
    }
    componentDidMount = async () => {
        const { dispatch } = this.props;
        dispatch({
            type:'vacantSpace/getInitdata',
            payload:{}
        })
        // egg接口
        // const respon = await getHomeInfo({userId:1001})
        // console.log('rsss',respon);
        // this.setState({
        //     respon,
        // })
}
    render() {
        const { dataList } = this.props
        // const { respon } = this.state
        return (
            <div>
                guang
                <Table columns={columns} dataSource={dataList} rowKey={(row)=>row.id} />
            </div>
        )
    }
}

const mapStateToProps = (state: any)=>{
    return {
        dataList: state.vacantSpace.guangList
    }
}

export default connect(mapStateToProps)(Guang)
