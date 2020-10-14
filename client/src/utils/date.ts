export default function (num: Number): String{
    const date = new Date();
    date.setDate(date.getDate() + 60);
    // 这里的60就是你要加的天数，减也可以。年、月会相应加上去，值得注意的是date.getMonth()得到的月份比实际月份小1，所以实际月份是(date.getMonth()+1)
    return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + "-" + date.getDay();
}
