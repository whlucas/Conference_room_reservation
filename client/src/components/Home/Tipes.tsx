import { Carousel } from "antd";
import React from "react"
import './Tipes.scss'
import img1 from '../../assets/11.png'
import img2 from '../../assets/22.png'
import img3 from '../../assets/33.png'

const contentStyle = {
    height: '100%',
    color: '#fff',
    lineHeight: '100%',
    background: '#364d79',
};

const Tipes: React.FC = () => {
    return (
        <div className="tipes-wrapper">
            <Carousel effect="fade">
                <div className="carousel-wrapper">
                    <h3 style={contentStyle}>
                        <img src={img1} alt=""/>
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <h3 style={contentStyle}>
                        <img src={img2} alt="" />
                    </h3>
                </div>
                <div className="carousel-wrapper">
                    <h3 style={contentStyle}>
                        <img src={img3} alt="" />
                    </h3>
                </div>
            </Carousel>
        </div>
    )
}

export default Tipes