'use strict';

var WebIM = {};

WebIM.parseEmoji = function (msg) {
    var emoji = WebIM.Emoji,
        reg = null;
    var msgList = [];
    var objList = [];
    for (var face in emoji.map) {
        if (emoji.map.hasOwnProperty(face)) {
            while (msg.indexOf(face) > -1) {
                msg = msg.replace(face, "^" + emoji.map[face] + "^");
            }
        }
    }
    var ary = msg.split('^');
    var reg = /^e.*g$/;
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] != '') {
            msgList.push(ary[i]);
        }
    }
    for (var i = 0; i < msgList.length; i++) {
        if (reg.test(msgList[i])) {
            var obj = {};
            obj['data'] = msgList[i];
            obj['type'] = 'emoji';
            objList.push(obj);
        } else {
            var obj = {};
            obj['data'] = msgList[i];
            obj['type'] = 'txt';
            objList.push(obj);
        }
    }
    console.log(objList);
    return objList;
};
WebIM.Emoji = {
    path: '../static/faces/',
    map: {
        '[):]': 'ee_1.png',
        '[:D]': 'ee_2.png',
        '[;)]': 'ee_3.png',
        '[:-o]': 'ee_4.png',
        '[:p]': 'ee_5.png',
        '[(H)]': 'ee_6.png',
        '[:@]': 'ee_7.png',
        '[:s]': 'ee_8.png',
        '[:$]': 'ee_9.png',
        '[:(]': 'ee_10.png',
        '[:\'(]': 'ee_11.png',
        '[:|]': 'ee_12.png',
        '[(a)]': 'ee_13.png',
        '[8o|]': 'ee_14.png',
        '[8-|]': 'ee_15.png',
        '[+o(]': 'ee_16.png',
        '[<o)]': 'ee_17.png',
        '[|-)]': 'ee_18.png',
        '[*-)]': 'ee_19.png',
        '[:-#]': 'ee_20.png',
        '[:-*]': 'ee_21.png',
        '[^o)]': 'ee_22.png',
        '[8-)]': 'ee_23.png',
        '[(|)]': 'ee_24.png',
        '[(u)]': 'ee_25.png',
        '[(S)]': 'ee_26.png',
        '[(*)]': 'ee_27.png',
        '[(#)]': 'ee_28.png',
        '[(R)]': 'ee_29.png',
        '[({)]': 'ee_30.png',
        '[(})]': 'ee_31.png',
        '[(k)]': 'ee_32.png',
        '[(F)]': 'ee_33.png',
        '[(W)]': 'ee_34.png',
        '[(D)]': 'ee_35.png',
        '[del]': 'btn_del.png'
    }
};

WebIM.EmojiObj = {
    path: '../static/faces/',
    map1: {
        '[):]': 'ee_1.png',
        '[:D]': 'ee_2.png',
        '[;)]': 'ee_3.png',
        '[:-o]': 'ee_4.png',
        '[:p]': 'ee_5.png',
        '[(H)]': 'ee_6.png',
        '[:@]': 'ee_7.png'
    },
    map2: {
        '[:s]': 'ee_8.png',
        '[:$]': 'ee_9.png',
        '[:(]': 'ee_10.png',
        '[:\'(]': 'ee_11.png',
        '[:|]': 'ee_12.png',
        '[(a)]': 'ee_13.png',
        '[8o|]': 'ee_14.png'
    },
    map3: {
        '[8-|]': 'ee_15.png',
        '[+o(]': 'ee_16.png',
        '[<o)]': 'ee_17.png',
        '[|-)]': 'ee_18.png',
        '[*-)]': 'ee_19.png',
        '[:-#]': 'ee_20.png',
        '[del]': 'del.png'
    },
    map4: {
        '[:-*]': 'ee_21.png',
        '[^o)]': 'ee_22.png',
        '[8-)]': 'ee_23.png',
        '[(|)]': 'ee_24.png',
        '[(u)]': 'ee_25.png',
        '[(S)]': 'ee_26.png',
        '[(*)]': 'ee_27.png'
    },
    map5: {
        '[(#)]': 'ee_28.png',
        '[(R)]': 'ee_29.png',
        '[({)]': 'ee_30.png',
        '[(})]': 'ee_31.png',
        '[(k)]': 'ee_32.png',
        '[(F)]': 'ee_33.png',
        '[(D)]': 'ee_34.png'
    },
    map6: {
        '[:\'(]': 'ee_11.png',
        '[:|]': 'ee_12.png',
        '[(a)]': 'ee_13.png',
        '[8o|]': 'ee_14.png',
        '[(D)]': 'ee_35.png',
        '[:s]': 'ee_8.png',
        '[del]': 'del.png'
    }
};
module.exports = {
    'default': WebIM
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldlYklNLmpzIl0sIm5hbWVzIjpbIldlYklNIiwicGFyc2VFbW9qaSIsIm1zZyIsIkVtb2ppIiwibWFwIiwiZW1vamkiLCJyZWciLCJtc2dMaXN0Iiwib2JqTGlzdCIsImZhY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJyZXBsYWNlIiwiYXJ5Iiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRlc3QiLCJvYmoiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsIkVtb2ppT2JqIiwibWFwMSIsIm1hcDIiLCJtYXAzIiwibWFwNCIsIm1hcDUiLCJtYXA2IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBSSxRQUFKLEFBQVk7O0FBRVosTUFBQSxBQUFNLGFBQWEsVUFBQSxBQUFVLEtBQUssQUFDOUI7QUFBSSxRQUFPLFFBQU0sTUFBakIsQUFBSSxBQUF1QixBQUFlLEFBQU8sQUFBTSxBQUFNLEFBQVEsQUFBYSxBQUM5RTtRQUFPLE1BRFgsQUFDSSxBQUNIO0FBQU0sa0JBQ0g7UUFBSSxBQUFRLFVBQVosQUFBa0I7QUFDZCxhQURKLEFBQ1UsbUJBQ1Y7QUFBSSxrQkFBSixBQUFjLDBCQUNkLEFBQUk7QUFBVSxtQkFBZCx3QkFDQSxBQUFLLEFBQUk7QUFBVCxBQUFpQiwwQkFBakIsQUFBdUIsQUFBSyxzQ0FDeEIsQUFBSTtBQUFKLEFBQUksQUFBTSxBQUFJLEFBQWUsQUFBTyxBQUNoQztBQUFBLEFBQU8sQUFBSSxBQUFRLEFBQVEsQUFBQyxBQUFHLEFBQzNCO0FBQUEsQUFBTSxBQUFJLEFBQVEsQUFBTSxBQUFNLEFBQU0sQUFBSSxBQUFRLEFBQ25EO3dCQUNKO2NBQ0o7eUNBQ0Q7QUFBSSxZQUFNLElBQUksTUFBSixBQUFVLElBQXBCLEFBQVUsQUFDVixBQUFJO0FBQU0sb0JBQVYsU0FDQTtBQUFBLEFBQUssQUFBSSxBQUFJLEFBQUcsQUFBSSxBQUFJLEFBQVEsQUFBSyxBQUNqQztBQUFBLEFBQUksQUFBSSxBQUFN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TyxBQUNUO0FBcEZDLEFBb0NRO0FBeURULE9BQVE7ZUFyRGhCLEFBQWlCLEFBK0NQLEFBT08sQUFHakIsQUFBTyxBQUFVLEFBQ2IsQUFBVztBQVhMLEFBT0YiLCJmaWxlIjoiV2ViSU0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5sZXQgV2ViSU0gPSB7fTtcblxuV2ViSU0ucGFyc2VFbW9qaSA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICBpZiAodHlwZW9mIFdlYklNLkVtb2ppID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgV2ViSU0uRW1vamkubWFwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbXNnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlbW9qaSA9IFdlYklNLkVtb2ppLFxuICAgICAgICAgICAgcmVnID0gbnVsbDtcbiAgICAgICAgdmFyIG1zZ0xpc3QgPSBbXTtcbiAgICAgICAgdmFyIG9iakxpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgZmFjZSBpbiBlbW9qaS5tYXApIHtcbiAgICAgICAgICAgIGlmIChlbW9qaS5tYXAuaGFzT3duUHJvcGVydHkoZmFjZSkpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAobXNnLmluZGV4T2YoZmFjZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICBtc2cgPSBtc2cucmVwbGFjZShmYWNlLCBcIl5cIiArIGVtb2ppLm1hcFtmYWNlXSArIFwiXlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFyeSA9IG1zZy5zcGxpdCgnXicpXG4gICAgICAgIHZhciByZWcgPSAvXmUuKmckL1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyeS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFyeVtpXSAhPSAnJykge1xuICAgICAgICAgICAgICAgIG1zZ0xpc3QucHVzaChhcnlbaV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtc2dMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAocmVnLnRlc3QobXNnTGlzdFtpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0ge31cbiAgICAgICAgICAgICAgICBvYmpbJ2RhdGEnXSA9IG1zZ0xpc3RbaV1cbiAgICAgICAgICAgICAgICBvYmpbJ3R5cGUnXSA9ICdlbW9qaSdcbiAgICAgICAgICAgICAgICBvYmpMaXN0LnB1c2gob2JqKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0ge31cbiAgICAgICAgICAgICAgICBvYmpbJ2RhdGEnXSA9IG1zZ0xpc3RbaV1cbiAgICAgICAgICAgICAgICBvYmpbJ3R5cGUnXSA9ICd0eHQnXG4gICAgICAgICAgICAgICAgb2JqTGlzdC5wdXNoKG9iailcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhvYmpMaXN0KVxuICAgICAgICByZXR1cm4gb2JqTGlzdDtcbiAgICB9XG59XG5XZWJJTS5FbW9qaSA9IHtcbiAgICBwYXRoOiAnLi4vc3RhdGljL2ZhY2VzLycsXG4gICAgbWFwOiB7XG4gICAgICAgICdbKTpdJzogJ2VlXzEucG5nJyxcbiAgICAgICAgJ1s6RF0nOiAnZWVfMi5wbmcnLFxuICAgICAgICAnWzspXSc6ICdlZV8zLnBuZycsXG4gICAgICAgICdbOi1vXSc6ICdlZV80LnBuZycsXG4gICAgICAgICdbOnBdJzogJ2VlXzUucG5nJyxcbiAgICAgICAgJ1soSCldJzogJ2VlXzYucG5nJyxcbiAgICAgICAgJ1s6QF0nOiAnZWVfNy5wbmcnLFxuICAgICAgICAnWzpzXSc6ICdlZV84LnBuZycsXG4gICAgICAgICdbOiRdJzogJ2VlXzkucG5nJyxcbiAgICAgICAgJ1s6KF0nOiAnZWVfMTAucG5nJyxcbiAgICAgICAgJ1s6XFwnKF0nOiAnZWVfMTEucG5nJyxcbiAgICAgICAgJ1s6fF0nOiAnZWVfMTIucG5nJyxcbiAgICAgICAgJ1soYSldJzogJ2VlXzEzLnBuZycsXG4gICAgICAgICdbOG98XSc6ICdlZV8xNC5wbmcnLFxuICAgICAgICAnWzgtfF0nOiAnZWVfMTUucG5nJyxcbiAgICAgICAgJ1srbyhdJzogJ2VlXzE2LnBuZycsXG4gICAgICAgICdbPG8pXSc6ICdlZV8xNy5wbmcnLFxuICAgICAgICAnW3wtKV0nOiAnZWVfMTgucG5nJyxcbiAgICAgICAgJ1sqLSldJzogJ2VlXzE5LnBuZycsXG4gICAgICAgICdbOi0jXSc6ICdlZV8yMC5wbmcnLFxuICAgICAgICAnWzotKl0nOiAnZWVfMjEucG5nJyxcbiAgICAgICAgJ1tebyldJzogJ2VlXzIyLnBuZycsXG4gICAgICAgICdbOC0pXSc6ICdlZV8yMy5wbmcnLFxuICAgICAgICAnWyh8KV0nOiAnZWVfMjQucG5nJyxcbiAgICAgICAgJ1sodSldJzogJ2VlXzI1LnBuZycsXG4gICAgICAgICdbKFMpXSc6ICdlZV8yNi5wbmcnLFxuICAgICAgICAnWygqKV0nOiAnZWVfMjcucG5nJyxcbiAgICAgICAgJ1soIyldJzogJ2VlXzI4LnBuZycsXG4gICAgICAgICdbKFIpXSc6ICdlZV8yOS5wbmcnLFxuICAgICAgICAnWyh7KV0nOiAnZWVfMzAucG5nJyxcbiAgICAgICAgJ1sofSldJzogJ2VlXzMxLnBuZycsXG4gICAgICAgICdbKGspXSc6ICdlZV8zMi5wbmcnLFxuICAgICAgICAnWyhGKV0nOiAnZWVfMzMucG5nJyxcbiAgICAgICAgJ1soVyldJzogJ2VlXzM0LnBuZycsXG4gICAgICAgICdbKEQpXSc6ICdlZV8zNS5wbmcnLFxuICAgICAgICAnW2RlbF0nOiAnYnRuX2RlbC5wbmcnXG4gICAgfVxufVxuXG5XZWJJTS5FbW9qaU9iaiA9IHtcbiAgICBwYXRoOiAnLi4vc3RhdGljL2ZhY2VzLycsXG4gICAgbWFwMToge1xuICAgICAgICAnWyk6XSc6ICdlZV8xLnBuZycsXG4gICAgICAgICdbOkRdJzogJ2VlXzIucG5nJyxcbiAgICAgICAgJ1s7KV0nOiAnZWVfMy5wbmcnLFxuICAgICAgICAnWzotb10nOiAnZWVfNC5wbmcnLFxuICAgICAgICAnWzpwXSc6ICdlZV81LnBuZycsXG4gICAgICAgICdbKEgpXSc6ICdlZV82LnBuZycsXG4gICAgICAgICdbOkBdJzogJ2VlXzcucG5nJ1xuICAgIH0sXG4gICAgbWFwMjoge1xuICAgICAgICAnWzpzXSc6ICdlZV84LnBuZycsXG4gICAgICAgICdbOiRdJzogJ2VlXzkucG5nJyxcbiAgICAgICAgJ1s6KF0nOiAnZWVfMTAucG5nJyxcbiAgICAgICAgJ1s6XFwnKF0nOiAnZWVfMTEucG5nJyxcbiAgICAgICAgJ1s6fF0nOiAnZWVfMTIucG5nJyxcbiAgICAgICAgJ1soYSldJzogJ2VlXzEzLnBuZycsXG4gICAgICAgICdbOG98XSc6ICdlZV8xNC5wbmcnXG4gICAgfSxcbiAgICBtYXAzOiB7XG4gICAgICAgICdbOC18XSc6ICdlZV8xNS5wbmcnLFxuICAgICAgICAnWytvKF0nOiAnZWVfMTYucG5nJyxcbiAgICAgICAgJ1s8byldJzogJ2VlXzE3LnBuZycsXG4gICAgICAgICdbfC0pXSc6ICdlZV8xOC5wbmcnLFxuICAgICAgICAnWyotKV0nOiAnZWVfMTkucG5nJyxcbiAgICAgICAgJ1s6LSNdJzogJ2VlXzIwLnBuZycsXG4gICAgICAgICdbZGVsXSc6ICdkZWwucG5nJ1xuICAgIH0sXG4gICAgbWFwNDoge1xuICAgICAgICAnWzotKl0nOiAnZWVfMjEucG5nJyxcbiAgICAgICAgJ1tebyldJzogJ2VlXzIyLnBuZycsXG4gICAgICAgICdbOC0pXSc6ICdlZV8yMy5wbmcnLFxuICAgICAgICAnWyh8KV0nOiAnZWVfMjQucG5nJyxcbiAgICAgICAgJ1sodSldJzogJ2VlXzI1LnBuZycsXG4gICAgICAgICdbKFMpXSc6ICdlZV8yNi5wbmcnLFxuICAgICAgICAnWygqKV0nOiAnZWVfMjcucG5nJ1xuICAgIH0sXG4gICAgbWFwNToge1xuICAgICAgICAnWygjKV0nOiAnZWVfMjgucG5nJyxcbiAgICAgICAgJ1soUildJzogJ2VlXzI5LnBuZycsXG4gICAgICAgICdbKHspXSc6ICdlZV8zMC5wbmcnLFxuICAgICAgICAnWyh9KV0nOiAnZWVfMzEucG5nJyxcbiAgICAgICAgJ1soayldJzogJ2VlXzMyLnBuZycsXG4gICAgICAgICdbKEYpXSc6ICdlZV8zMy5wbmcnLFxuICAgICAgICAnWyhEKV0nOiAnZWVfMzQucG5nJ1xuICAgIH0sXG4gICAgbWFwNjoge1xuICAgICAgICAnWzpcXCcoXSc6ICdlZV8xMS5wbmcnLFxuICAgICAgICAnWzp8XSc6ICdlZV8xMi5wbmcnLFxuICAgICAgICAnWyhhKV0nOiAnZWVfMTMucG5nJyxcbiAgICAgICAgJ1s4b3xdJzogJ2VlXzE0LnBuZycsXG4gICAgICAgICdbKEQpXSc6ICdlZV8zNS5wbmcnLFxuICAgICAgICAnWzpzXSc6ICdlZV84LnBuZycsXG4gICAgICAgICdbZGVsXSc6ICdkZWwucG5nJ1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdkZWZhdWx0JzogV2ViSU1cbn1cbiJdfQ==