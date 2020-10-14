import React from "react"
import MovieForm from "../MovieFrom"
import { IConference } from "../../service/ConferenceService"
import { MovieService } from "../../service/MovieService"
import './ConferenceCard.scss'
import { Card, Col, Row } from "antd"

interface IImageUploaderProps {
    conferenceMSG: IConference[]
}


export default class extends React.Component<IImageUploaderProps> {
    componentDidMount() {
        // console.log(this.props.conferenceMSG, 111)
    }

    render() {
        return (
            <div className="card-wrapper">
                <div className="site-card-wrapper">
                    <Row gutter={24}>
                        <Col span={8}>
                            <Card hoverable bordered={false}>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable bordered={false}>
                                Card content
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card hoverable bordered={false}>
                                Card content
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}