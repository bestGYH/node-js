// 这是包的入口文件

// 时间格式化
function dateFormat(dateStr) {
    // 实例化日期类
    const time = new Date(dateStr);
    // 获取完整的年份(4位)
    const year = time.getFullYear();
    // 获取月份(0-11,0代表1月)
    const month = time.getMonth() + 1;
    // 获取日期(1-31)
    const date = time.getDate();
    // 获取小时
    let h = time.getHours();
    h = h < 10 ? '0' + h : h;
    // 获取分钟
    let m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    // 获取秒钟
    let s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    //测试打印
    console.log(`${year} 年${month} 月${date} 日 ${h}:${m}:${s}`);


    // 合并返回
    return `${year}年${month}月${date}日 ${h}:${m}:${s}`;
}


// 向外暴露需要的成员
module.exports = {
    dateFormat
}