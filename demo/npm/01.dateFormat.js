// 时间格式化
function dateFormat(dtStr) {
    // 实例化日期类
    var time = new Date();
    // 获取完整的年份(4位)
    var year = time.getFullYear();
    // 获取月份(0-11,0代表1月)
    var month = time.getMonth() + 1;
    // 获取日期(1-31)
    var date = time.getDate();
    // 获取小时
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    // 获取分钟
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    // 获取秒钟
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    //测试打印
    console.log(year + "年" + month + "月" + date + "日 " + h + ":" + m + ":" + s);

    // 合并返回
    return (year + "年" + month + "月" + date + "日 " + h + ":" + m + ":" + s);
}

module.exports = {
    dataFormat
}