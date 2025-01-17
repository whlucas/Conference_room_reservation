// 在package.json里面配置代理,让他去调后端的接口
// "proxy": "http://localhost:7001"

// 这里我定义接口


import axios from "axios"
import { IResponseData, IResponseError, IResponsePageData, ISerachCondition } from "./CommonTypes"

export interface IConference {
    id?: number
    name: string
    date: string
    time: string
    size: number
    base: string
    floor: number
    function: string
    types?: string
}

export class ConferenceService {
    // 这里返回值一定是promise,promise里面加泛型来规定里面的内容,由于规定了服务器的返回结果,我这里定义了服务器返回的两种结果,直接用联合类型来约束
    public static async add(conference: IConference): Promise<IResponseData<IConference> | IResponseError> {
        const { data } = await axios.post("/addConference", conference)
        return data
    }

    // 因为修改的时候一般就修改个别属性,所以我这里用类型验算把他们变成可选的
    public static async edit(id: number, conference: Partial<IConference>): Promise<IResponseData<true> | IResponseError> {
        const reqData = {
            id,
            ...conference
        }
        const { data } = await axios.post("/editConference", reqData)
        return data
    }

    public static async delete(id: number): Promise<IResponseData<true> | IResponseError> {
        const reqData = {
            id,
        }
        const { data } = await axios.post("/delConference", reqData)
        return data
    }

    public static async findAllConference(): Promise<IResponseData<true> | IResponseError> {
        const { data } = await axios.get("/findAllConference")
        return data
    }

    // 这里有个问题是,写了IResponseError,之后如何区分他返回的是哪一种类型
    public static async findByKey(condition: ISerachCondition): Promise<IResponsePageData<IConference>> {
        const { data } = await axios.post("/findByKey", condition)
        return data
    }

    public static async findById(id: number): Promise<IResponseData<IConference> | IResponseError> {
        const { data } = await axios.get("/findById/" + id)
        return data
    }
}