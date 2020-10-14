import React from "react"
import './home.scss'
import { store } from "../../redux/store"
import {
    DownOutlined,
    RightOutlined
} from '@ant-design/icons';
import Recommend from "../../components/Home/Recommendation"

export default class extends React.Component {
    render() {
        return (
            <div className="layout-wrapper">
                <div className="layout-wrapper-top">
                    <div className="welcome">
                        <div className="welcome-left">
                            <span className="sentence1">hi, 加林</span>
                            <span className="sentence2">这是咱们的会议室</span>
                            <DownOutlined />
                        </div>
                        <div className="welcome-right">
                            <span className="sentence1">会议室规章制度</span>
                            <RightOutlined />
                        </div>
                    </div>
                    <div className="layout-content">
                        <div className="topBox">
                            <div className="recommend">
                                <Recommend conList={
                                    store.getState().conference.data
                                } />
                            </div>
                            <div className="left-message-box">
                                <div className="total-message">
                                    总体信息
                            </div>
                                <div className="Tips">
                                    小提示
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}