import React from "react"
import MovieForm from "../MovieFrom"
import { IConference } from "../../service/ConferenceService"
import { MovieService } from "../../service/MovieService"
import { Carousel } from 'antd';
import ConferenceCard from "../Card/ConferenceCard"
import './Recommendation.scss'
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
import { num2Time } from "../../utils/date"

interface IRecommendationProps {
    conList: IConference[]
}

const contentStyle = {
    display: 'flex',
    height: '100%',
    color: '#000',
    lineHeight: '100%',
    background: '#364d79',
    backgroundColor: '#ffffff'
};


export default class extends React.Component<IRecommendationProps> {
    chooseIndex: any = null

    firstPageData: IConference[] = []
    secondPageData: IConference[] = []
    thirdPageData: IConference[] = []

    constructor(props: any) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }

    componentWillMount() {

        this.props.conList.map((item) => {
            if (item.time){
                item.time = num2Time[item.time.split('.')[0]]
            }
        })
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
                                <ConferenceCard conferenceArr={this.firstPageData}></ConferenceCard>
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <ConferenceCard conferenceArr={this.secondPageData}></ConferenceCard>
                            </h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>
                                <ConferenceCard conferenceArr={this.thirdPageData}></ConferenceCard>
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