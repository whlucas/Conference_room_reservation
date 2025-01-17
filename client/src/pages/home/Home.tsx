import React from "react"
import './home.scss'
import { store } from "../../redux/store"
import {
    DownOutlined,
    RightOutlined
} from '@ant-design/icons';
import Recommend from "../../components/Home/Recommendation"
import TotalMsg from "../../components/Home/TotalMsg"
import Tipes from "../../components/Home/Tipes"
import ReserveRoom from "../../components/Home/ReserveRoom"

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
                            <div className="right-message-box">
                                <div className="total-message">
                                    <TotalMsg total={26} availableNum={18}></TotalMsg>
                                </div>
                                <div className="Tips">
                                    <Tipes />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-wrapper-bottom">
                    <ReserveRoom conList={
                        store.getState().conference.data
                    } />
                </div>
            </div>
        )
    }
}