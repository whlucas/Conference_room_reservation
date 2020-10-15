export  function aa (num: Number): String{
    const date = new Date();
    date.setDate(date.getDate() + 60);
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getDay();
}

export const num2Week: any = {
    0: '日',
    1: '一',
    2: '二',
    3: '三',
    4: '四',
    5: '五',
    6: '六'
}

export const num2Time: any = {
    1: "9:30-10:30",
    2: "10:30-11:30",
    3: "11:30-12:30",
    4: "12:30-13:30",
    5: "15:30-16:30",
    6: "16:30-17:30",
    7: "17:30-18:30",
    8: "18:00-19:30",
}