/**
 * 封装jsonp跨域请求
 */
(function(window, document){
    'use strict';
    var jsonp = function(url, data, callback){
        //随机定义一个函数名
        var funcName = 'my_json_cd' + Math.random().toString().replace('.', '');
        //将data转换为url字符串的形式
        var urlStr = url + (url.indexOf('?') == -1 ? '?' : '&');
        //如果第二个传来的是回调函数，则进一步处理
        if(typeof data === 'function'){
            callback = data;
        }else{
            //将data的参数拼接到url中
            for(var key in data){
                urlStr += key + '=' + data[key] + '&';
            }
        }

        //把回调参数拼接到url中
        urlStr += 'callback=' + funcName;
        //创建一个script标签
        var scriptElement = document.createElement('script');
        scriptElement.src = urlStr;

        //挂载回调函数
        window[funcName] = function(data){
            callback(data);
            //remove自身没有意义的js脚本
            document.body.removeChild(scriptElement);
        };

        //将script标签放到页面中
        document.body.appendChild(scriptElement);
        // console.log(scriptElement);
    }

    window.$YiJsonp = jsonp;
}(window, document));
