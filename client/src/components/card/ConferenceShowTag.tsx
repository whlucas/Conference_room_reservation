import React from "react"
import MovieForm from "../MovieFrom"
import { IConference } from "../../service/ConferenceService"
import { MovieService } from "../../service/MovieService"
import './ConferenceShowTag.scss'
import { Card, Col, Row } from "antd"
import {
    ClockCircleOutlined,
    UserOutlined
} from '@ant-design/icons';

interface IConferenceShowTag {
    conferenceMSG: IConference
}


export default class extends React.Component<IConferenceShowTag> {

    myConferenceMSG: IConference[] = []
    componentDidMount() {
        // console.log(this.props.conferenceMSG)
    }

    render() {
        return (
            <div className="conference-show-tag">
                woshihuiyi
            </div>
        )
    }
}