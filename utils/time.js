export function timeFormate(datetime){
    Date.prototype.Format = function(fmt){
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if(/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    if((typeof datetime == 'string' && datetime.length == 10) || typeof datetime == 'number'){
        datetime = parseInt(datetime);
        datetime = datetime.toString().length == 10? datetime * 1000 : datetime;
    }else{
        datetime = datetime.toString().replace(/-/g, '/');
    }
    var date = new Date(datetime) == 'Invalid Date'? new Date : new Date(datetime),
        tday = Math.floor((new Date).getTime()/86400000 - date.getTime()/86400000),
        from = Math.round(date.getTime() / 1000),
        now = Math.round((new Date).getTime() / 1000),
        time = now - from;
    if(tday == 0){
        if(time > 3600){
            return Math.floor(time / 3600) + 'h'; //小时前
        }else if(time > 60){
            return Math.floor(time / 60) + 'min'; //分钟前
        }else if(time > 0){
            return time + 's'; //秒前
        }else{
            return 'now'; //刚刚
        }
    }else{
        var ftime = date.Format("MM-dd"), //MM月dd日
            _now = new Date;
        date.setHours(0);date.setMinutes(0);date.setSeconds(0);date.setMilliseconds(0);
        _now.setHours(0);_now.setMinutes(0);_now.setSeconds(0);_now.setMilliseconds(0);
        var _time = Math.round((_now.getTime() - date.getTime()) / 1000),
        dday = Math.ceil(_time / 86400);
        if(dday > 0 && dday < 7){
            // if(dday <= 2){
            //     return dday == 1? '昨天' : '前天';
            if(dday <= 1){
                return '昨天';
            }else{
                return dday + ' days'; //天前
            }
        }else{
            return ftime;
        }
    }
}