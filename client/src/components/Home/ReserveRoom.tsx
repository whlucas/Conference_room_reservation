import React from "react"
import { IConference } from "../../service/ConferenceService"
import { Card, Carousel, Menu, Select } from 'antd';
import './ReserveRoom.scss';
import { num2Week } from "../../utils/date"
import ConferenceShowTag from "../../components/Card/ConferenceShowTag"
import {
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons';
const { Option } = Select;

// 放今天以及后六天的数组
interface DateMsg {
    year?: number
    mounth?: number
    day: number
    week: number
}

interface IReserveRoomProps {
    conList: IConference[]
}


let timeout: number | null;
let currentValue: string;

function fetch(value: string, callback: any) {
    if (timeout) {
        clearTimeout(timeout);
        timeout = null;
    }
    currentValue = value;

    function fake() {
    //     const str = querystring.encode({
    //         code: 'utf-8',
    //         q: value,
    //     });
    //     jsonp(`https://suggest.taobao.com/sug?${str}`)
    //         .then(response => response.json())
    //         .then(d => {
    //             if (currentValue === value) {
    //                 const { result } = d;
    //                 const data = [];
    //                 result.forEach(r => {
    //                     data.push({
    //                         value: r[0],
    //                         text: r[0],
    //                     });
    //                 });
    //                 callback(data);
    //             }
    //         });
    }

    // timeout = setTimeout(fake, 300);
}


export default class extends React.Component<IReserveRoomProps> {
    state: any = {
        data: [],
        value: undefined,
    };

    dateArr: DateMsg[] = []

    onClickMenu(e: any) {
        console.log(e, 1111)
    }

    componentWillMount() {
        for(let i = 0; i < 7; i++){
            const date = new Date();
            date.setDate(date.getDate() + i);
            this.dateArr.push({
                day: date.getDate(),
                week: num2Week[date.getDay()]
            })
        }
    }

    handleSearch = (val:string) => {
        if (val) {
            fetch(val, (data:any) => this.setState({ data }));
        } else {
            this.setState({ data: [] });
        }
    };

    handleChange = (val:string) => {
        this.setState({ val });
    };
    render() {
        const options = this.state.data.map((d:any) => <Option key={d.value} value={d.value}>{d.text}</Option>);
        return (
            <div className="reserve-room-weapper">
                <div className="query-room">
                    <Select defaultValue="0" style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="0">数据公司</Option>
                        <Option value="1">勘探开发研究院</Option>
                        <Option value="2">工程技术研究院</Option>
                    </Select>
                    <Select placeholder='选择楼层' style={{ width: 120 }} onChange={this.handleChange} dropdownStyle={{minHeight: "200px"}}>
                        <Option value="1" disabled>一楼</Option>
                        <Option value="2">二楼</Option>
                        <Option value="3">三楼</Option>
                        <Option value="4">四楼</Option>
                        <Option value="5">五楼</Option>
                        <Option value="6">六楼</Option>
                        <Option value="7">七楼</Option>
                    </Select>
                    <Select
                        showSearch
                        value={this.state.value}
                        placeholder='搜索会议室名称或编号'
                        style={{ width: 200 }}
                        defaultActiveFirstOption={false}
                        showArrow={false}
                        filterOption={false}
                        onSearch={this.handleSearch}
                        onChange={this.handleChange}
                        notFoundContent={null}
                    >
                        {options}
                    </Select>
                    <Select placeholder='起始时间' style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="1">9.30</Option>
                        <Option value="2">10.30</Option>
                        <Option value="3">11.30</Option>
                        <Option value="4">12.30</Option>
                        <Option value="5">15.30</Option>
                        <Option value="6">16.30</Option>
                        <Option value="7">17.30</Option>
                        <Option value="8">18.30</Option>
                    </Select>
                    <Select placeholder='结束时间' style={{ width: 120 }} onChange={this.handleChange}>
                        <Option value="1">10.30</Option>
                        <Option value="2">11.30</Option>
                        <Option value="3">12.30</Option>
                        <Option value="4">13.30</Option>
                        <Option value="5">16.30</Option>
                        <Option value="6">17.30</Option>
                        <Option value="7">18.30</Option>
                        <Option value="8">19.30</Option>
                    </Select>
                    <span className="query-reset">重置</span>
                </div>
                <div className="select-date">
                    <Menu onClick={this.onClickMenu} mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="0">
                            <Card
                                title="今天"
                                bordered={false}
                                style={{ width: 100, height: 46 }}
                            >
                                {this.dateArr[0].day}
                            </Card>
                        </Menu.Item>
                        {
                            this.dateArr.slice().map((item) => {
                                return (
                                    <Menu.Item key={item.day}>
                                        <Card
                                            title={item.week}
                                            bordered={false}
                                            style={{ width: 100, height: 46 }}
                                        >
                                            {item.day}
                                        </Card>
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                    <div className="bottom-line" />
                </div>
                <div className="conference-room">
                    <ConferenceShowTag conferenceMSG={this.props.conList[0]}></ConferenceShowTag>
                </div>
            </div>
        )
    };
}
