import React, { Component } from 'react';
import { getHomeInfo } from '../../services';

export default class Guang extends Component {
    constructor(props){
        super(props)
        this.state = {
            respon:{}
        }
    }
componentDidMount = async () => {
    const respon = await getHomeInfo({userId:1001})
    console.log('rsss',respon);
    this.setState({
        respon,
    })
}
    render() {
        // const { respon } = this.state
        return (
            <div>
                guang
            </div>
        )
    }
}
