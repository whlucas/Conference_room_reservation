// 表述会议列表的状态类型

import { IConference } from "../../service/ConferenceService";
import { ISerachCondition } from "../../service/CommonTypes";
import { ConferenceActions, SaveConferenceAction, SetConditionAction, SetLoadingAction, DeleteAction, ConferenceChangeSwitchAction } from "../actions/ConferenceAction";
import { Reducer } from "react";
import tempData from "../../data/tempData"

// 利用之前的接口定义一个新的接口
// 把之前的可选的查询条件都变成必填的
export type IConferenceCondition = Required<ISerachCondition>

/**
 * 会议状态
 */
export interface IConferenceState {
    /**
     * 会议的数组
     */
    data: IConference[]
    /**
     * 查询条件
     */
    condition: IConferenceCondition
    /**
     * 总记录数
     */
    total: number
    /**
     * 是否正在加载数据
     */
    isLoading: boolean

    /**
     * 总页数
     */
    totalPage: number
}

// 定义一个默认的状态
const defaultState: IConferenceState = {
    data: tempData,
    condition: {
        page: 1,
        pageSize: 6,
        key: "",
    },
    total: 0,
    isLoading: false,
    totalPage: 0
}

// 定义一个saveConference的处理函数,他可以直接用redux提供的类型Reducer来定义
const saveConference: Reducer<IConferenceState, SaveConferenceAction> = (state, action) => {

    return {
        ...state,
        // 如果有就覆盖掉前面的条件
        data: action.payload.conferences,
        total: action.payload.total,
        // 改变总页数,总数/pageSize 在取整
        totalPage: Math.ceil(action.payload.total / state.condition.pageSize)
    }
}

// 设置会议室筛选条件
const setCondition: Reducer<IConferenceState, SetConditionAction> = (state, action) => {
    const newState = {
        ...state,
        // 给条件重新赋值
        condition: {
            ...state.condition,
            ...action.payload
        }
    }
    // 我这里更改的是我新建的变量,不会造成原先state的变化
    // 本来可以直接返回上面的newState,但因为我要算totalPage,我需要pageSize,但有可能没传过来,有可能传过来,不好搞,所以需要写在外面直接拿newState里面的
    newState.totalPage = Math.ceil(newState.total / newState.condition.pageSize)
    return newState
}

// 删除会议室
const deleteConference: Reducer<IConferenceState, DeleteAction> = (state, action) => {
    return {
        ...state,
        // 删除指定id的会议
        data: state.data.filter(m => m.id !== action.payload),
        total: state.total - 1,
        totalPage: Math.ceil((state.total - 1) / state.condition.pageSize)
    }
}

// 设置加载状态
const setLoading: Reducer<IConferenceState, SetLoadingAction> = (state, action) => {
    return {
        ...state,
        isLoading: action.payload
    }
}

// const changeSwitch: Reducer<IConferenceState, ConferenceChangeSwitchAction> = (state, action) => {
//     // 1.根据id找到会议对象
//     const conference = state.data.find(d => d.id === action.payload.id)
//     if (!conference) {
//         return state;
//     }
//     // 2.赋值我找到的对象
//     const newConference = { ...conference }
//     newConference[action.payload.type] = action.payload.newVal

//     // 3.把这个对象放回去,并且位置不能变
//     // 通过原数组来映射出来一个新的数组
//     const newData = state.data.map(d => {
//         // 如果匹配上了就返回新的数组,没匹配上就返回原数据
//         if (d.id === action.payload.id) {
//             return newConference
//         }
//         return d
//     })
//     return {
//         ...state,
//         data: newData
//     }
// }

// 导出一个函数里面传人默认状态
export default function (state: IConferenceState = defaultState, action: ConferenceActions) {
    switch (action.type) {
        case "conference_delete":
            return deleteConference(state, action)
        case "conference_save":
            return saveConference(state, action)
        case "conference_setCondition":
            return setCondition(state, action)
        case "conference_setLoading":
            return setLoading(state, action)
        // case "conference_switchChange":
        //     return changeSwitch(state, action)
        default:
            return state;
    }
}