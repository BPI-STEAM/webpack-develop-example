(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS etc
        module.exports = factory(require('jquery'));
    } else {
        // Browser global variable (root is window)
        root.returnExports = factory(root.jQuery);
    }
}(this, function ($) {

    'use strict';

    const url = "https://i.itpk.cn/api.php";
    var answer = "";

    var proto;

    var RobotItpk = function () {

    };

    RobotItpk.prototype = proto = Object.create({
        constructor: {
            value: RobotItpk
        }
    });

    proto.ask = function (question) {
        $.post(url, {
            'question': question
        }, function (respond) {
            console.log(respond);
            answer = respond;
        });
    }

    proto.clear = function () {
        answer = "";
    }

    proto.answer = function () {
        return answer.replace("[cqname]", "moli");
    }

    proto.quick_ask = function (question, callback) {
        $.post(url, {
            'question': question
        }, function (respond) {
            console.log(respond);
            answer = respond
            callback();
        });
    }

    window.RobotItpk = RobotItpk;

    // var ts = new window.RobotItpk();
    // ts.ask("nihao");

}));

var ts = new window.RobotItpk();
ts.ask("nihao");

setTimeout(function () {
    document.write('<h1>' + ts.answer() + '</h1>');
}, 1000);