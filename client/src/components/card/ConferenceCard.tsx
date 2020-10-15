import React from "react"
import MovieForm from "../MovieFrom"
import { IConference } from "../../service/ConferenceService"
import { MovieService } from "../../service/MovieService"
import './ConferenceCard.scss'
import { Card, Col, Row } from "antd"
import {
    ClockCircleOutlined,
    UserOutlined
} from '@ant-design/icons';

interface IConferenceCardProps {
    conferenceArr: IConference[]
}


export default class extends React.Component<IConferenceCardProps> {

    myConferenceMSG: IConference[] = []
    componentDidMount() {
        // console.log(this.props.conferenceMSG)
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="site-card-wrapper">
                    <Row gutter={18}>
                        {
                            this.props.conferenceArr.map((item, index) => {
                                return (
                                    <Col key = {index} span={8}>
                                        <Card hoverable bordered={false}>
                                            <div className="card-inner-wrapper">
                                                <div className="top-msg">
                                                    <div className="conference-name">{item.name}</div>
                                                    <div className="other-smg">
                                                        <div className="date-msg">
                                                            <ClockCircleOutlined />
                                                            <span className="date1">{item.date}</span>
                                                            <span className="date2">{item.time}</span>
                                                        </div>
                                                        <div className="function-msg">
                                                            <UserOutlined />
                                                            <span className="people-num">{item.size}人</span>
                                                            <span className="function1">{item.function}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="bottom-operation">预定</div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </div>
            </div>
        )
    }
}