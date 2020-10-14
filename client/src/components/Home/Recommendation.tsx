import React from "react"
import MovieForm from "../MovieFrom"
import { IConference } from "../../service/ConferenceService"
import { MovieService } from "../../service/MovieService"
import { Carousel } from 'antd';
import ConferenceCard from "../card/ConferenceCard"
import './Recommendation.scss'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';

interface IImageUploaderProps {
    conList: IConference[]
}

const contentStyle = {
    display: 'flex',
    height: '160px',
    color: '#000',
    lineHeight: '160px',
    background: '#364d79',
    backgroundColor: '#ffffff'
};


export default class extends React.Component<IImageUploaderProps> {
    chooseIndex: any = null

    firstPageData: IConference[] = []
    secondPageData: IConference[] = []
    thirdPageData: IConference[] = []

    constructor(props: any) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentDidMount() {
        console.log(this.props.conList)
        for(let i = 0; i < 3; i++) {
            this.firstPageData.push(this.props.conList[i])
        }
        for(let i = 3; i < 6; i++) {
            this.secondPageData.push(this.props.conList[i])
        }
        for(let i = 6; i < 9; i++) {
            this.thirdPageData.push(this.props.conList[i])
        }
    }

    next() {
        this.chooseIndex.next()
    }
    prev() {
        this.chooseIndex.prev()
    }

    render() {
        return (
            <div className="recomment-weapper">
                <div className="recomment-welcome">
                    <div className="recomment-welcome-left">为你推荐</div>
                    <div className="recomment-welcome-right">
                        <span className="more">更多</span>
                        <RightOutlined />
                    </div>
                </div>
                <div className='carousel-wrapper'>
                    <Carousel ref={el => { this.chooseIndex = el }}>
                        <div>
                            <h3 style={contentStyle}>
                                <ConferenceCard conferenceMSG={this.firstPageData}></ConferenceCard>
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <ConferenceCard conferenceMSG={this.secondPageData}></ConferenceCard>
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <ConferenceCard conferenceMSG={this.thirdPageData}></ConferenceCard>
                            </h3>
                        </div>
                    </Carousel>
                    <LeftOutlined className="carousel-button-left" onClick={this.prev} />
                    <RightOutlined className="carousel-button-right" onClick={this.next} />
                </div>
            </div>
        )
    }
}