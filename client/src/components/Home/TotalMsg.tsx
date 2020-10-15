import React from "react"
import './TotalMsg.scss'
import {
    EnvironmentOutlined,
    RightOutlined
} from '@ant-design/icons';

interface ITotalMsgProps {
    total: number
    availableNum: number
}


export default class extends React.Component<ITotalMsgProps> {

    render() {
        return (
            <div className="total-msg-wrapper">
                <div className="top-msg">
                    <span className="title">当前空闲</span>
                    <EnvironmentOutlined />
                    <span className="base">新疆油田数据公司</span>
                    <div className="top-msg-right">
                        <span className="more">更多</span>
                        <RightOutlined />
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content-box">
                        <span className="content-number">18</span>
                        <span className="content-span">可抢占会议室</span>
                    </div>
                    <div className="content-box">
                        <span className="content-number">26</span>
                        <span className="content-span">会议室总数</span>
                    </div>
                </div>
            </div>
        )
    }
}