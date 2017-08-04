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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldlYklNLmpzIl0sIm5hbWVzIjpbIldlYklNIiwicGFyc2VFbW9qaSIsIm1zZyIsIkVtb2ppIiwibWFwIiwiZW1vamkiLCJyZWciLCJtc2dMaXN0Iiwib2JqTGlzdCIsImZhY2UiLCJoYXNPd25Qcm9wZXJ0eSIsImluZGV4T2YiLCJyZXBsYWNlIiwiYXJ5Iiwic3BsaXQiLCJpIiwibGVuZ3RoIiwicHVzaCIsInRlc3QiLCJvYmoiLCJjb25zb2xlIiwibG9nIiwicGF0aCIsIkVtb2ppT2JqIiwibWFwMSIsIm1hcDIiLCJtYXAzIiwibWFwNCIsIm1hcDUiLCJtYXA2IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBSUEsUUFBUSxFQUFaOztBQUVBQSxNQUFNQyxVQUFOLEdBQW1CLFVBQVVDLEdBQVYsRUFBZTtBQUM5QixRQUFJLE9BQU9GLE1BQU1HLEtBQWIsS0FBdUIsV0FBdkIsSUFBc0MsT0FBT0gsTUFBTUcsS0FBTixDQUFZQyxHQUFuQixLQUEyQixXQUFyRSxFQUFrRjtBQUM5RSxlQUFPRixHQUFQO0FBQ0gsS0FGRCxNQUVPO0FBQ0gsWUFBSUcsUUFBUUwsTUFBTUcsS0FBbEI7QUFBQSxZQUNJRyxNQUFNLElBRFY7QUFFQSxZQUFJQyxVQUFVLEVBQWQ7QUFDQSxZQUFJQyxVQUFVLEVBQWQ7QUFDQSxhQUFLLElBQUlDLElBQVQsSUFBaUJKLE1BQU1ELEdBQXZCLEVBQTRCO0FBQ3hCLGdCQUFJQyxNQUFNRCxHQUFOLENBQVVNLGNBQVYsQ0FBeUJELElBQXpCLENBQUosRUFBb0M7QUFDaEMsdUJBQU9QLElBQUlTLE9BQUosQ0FBWUYsSUFBWixJQUFvQixDQUFDLENBQTVCLEVBQStCO0FBQzNCUCwwQkFBTUEsSUFBSVUsT0FBSixDQUFZSCxJQUFaLEVBQWtCLE1BQU1KLE1BQU1ELEdBQU4sQ0FBVUssSUFBVixDQUFOLEdBQXdCLEdBQTFDLENBQU47QUFDSDtBQUNKO0FBQ0o7QUFDRCxZQUFJSSxNQUFNWCxJQUFJWSxLQUFK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QUdGLGlCQUFTLFdBSFA7QUFJRixpQkFBUyxXQUpQO0FBS0YsaUJBQVMsV0FMUDtBQU1GLGlCQUFTLFdBTlA7QUFPRixpQkFBUztBQVBQLEtBN0JPO0FBc0NiQyxVQUFNO0FBQ0YsaUJBQVMsV0FEUDtBQUVGLGlCQUFTLFdBRlA7QUFHRixpQkFBUyxXQUhQO0FBSUYsaUJBQVMsV0FKUDtBQUtGLGlCQUFTLFdBTFA7QUFNRixpQkFBUyxXQU5QO0FBT0YsaUJBQVM7QUFQUCxLQXRDTztBQStDYkMsVUFBTTtBQUNGLGtCQUFVLFdBRFI7QUFFRixnQkFBUSxXQUZOO0FBR0YsaUJBQVMsV0FIUDtBQUlGLGlCQUFTLFdBSlA7QUFLRixpQkFBUyxXQUxQO0FBTUYsZ0JBQVEsVUFOTjtBQU9GLGlCQUFTO0FBUFA7QUEvQ08sQ0FBakI7QUF5REFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYixlQUFXL0I7QUFERSxDQUFqQiIsImZpbGUiOiJXZWJJTS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmxldCBXZWJJTSA9IHt9O1xuXG5XZWJJTS5wYXJzZUVtb2ppID0gZnVuY3Rpb24gKG1zZykge1xuICAgIGlmICh0eXBlb2YgV2ViSU0uRW1vamkgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBXZWJJTS5FbW9qaS5tYXAgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBtc2c7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGVtb2ppID0gV2ViSU0uRW1vamksXG4gICAgICAgICAgICByZWcgPSBudWxsO1xuICAgICAgICB2YXIgbXNnTGlzdCA9IFtdO1xuICAgICAgICB2YXIgb2JqTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBmYWNlIGluIGVtb2ppLm1hcCkge1xuICAgICAgICAgICAgaWYgKGVtb2ppLm1hcC5oYXNPd25Qcm9wZXJ0eShmYWNlKSkge1xuICAgICAgICAgICAgICAgIHdoaWxlIChtc2cuaW5kZXhPZihmYWNlKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIG1zZyA9IG1zZy5yZXBsYWNlKGZhY2UsIFwiXlwiICsgZW1vamkubWFwW2ZhY2VdICsgXCJeXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgYXJ5ID0gbXNnLnNwbGl0KCdeJylcbiAgICAgICAgdmFyIHJlZyA9IC9eZS4qZyQvXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJ5W2ldICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgbXNnTGlzdC5wdXNoKGFyeVtpXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1zZ0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChyZWcudGVzdChtc2dMaXN0W2ldKSkge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICAgICAgICAgIG9ialsnZGF0YSddID0gbXNnTGlzdFtpXVxuICAgICAgICAgICAgICAgIG9ialsndHlwZSddID0gJ2Vtb2ppJ1xuICAgICAgICAgICAgICAgIG9iakxpc3QucHVzaChvYmopXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvYmogPSB7fVxuICAgICAgICAgICAgICAgIG9ialsnZGF0YSddID0gbXNnTGlzdFtpXVxuICAgICAgICAgICAgICAgIG9ialsndHlwZSddID0gJ3R4dCdcbiAgICAgICAgICAgICAgICBvYmpMaXN0LnB1c2gob2JqKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKG9iakxpc3QpXG4gICAgICAgIHJldHVybiBvYmpMaXN0O1xuICAgIH1cbn1cbldlYklNLkVtb2ppID0ge1xuICAgIHBhdGg6ICcuLi9zdGF0aWMvZmFjZXMvJyxcbiAgICBtYXA6IHtcbiAgICAgICAgJ1spOl0nOiAnZWVfMS5wbmcnLFxuICAgICAgICAnWzpEXSc6ICdlZV8yLnBuZycsXG4gICAgICAgICdbOyldJzogJ2VlXzMucG5nJyxcbiAgICAgICAgJ1s6LW9dJzogJ2VlXzQucG5nJyxcbiAgICAgICAgJ1s6cF0nOiAnZWVfNS5wbmcnLFxuICAgICAgICAnWyhIKV0nOiAnZWVfNi5wbmcnLFxuICAgICAgICAnWzpAXSc6ICdlZV83LnBuZycsXG4gICAgICAgICdbOnNdJzogJ2VlXzgucG5nJyxcbiAgICAgICAgJ1s6JF0nOiAnZWVfOS5wbmcnLFxuICAgICAgICAnWzooXSc6ICdlZV8xMC5wbmcnLFxuICAgICAgICAnWzpcXCcoXSc6ICdlZV8xMS5wbmcnLFxuICAgICAgICAnWzp8XSc6ICdlZV8xMi5wbmcnLFxuICAgICAgICAnWyhhKV0nOiAnZWVfMTMucG5nJyxcbiAgICAgICAgJ1s4b3xdJzogJ2VlXzE0LnBuZycsXG4gICAgICAgICdbOC18XSc6ICdlZV8xNS5wbmcnLFxuICAgICAgICAnWytvKF0nOiAnZWVfMTYucG5nJyxcbiAgICAgICAgJ1s8byldJzogJ2VlXzE3LnBuZycsXG4gICAgICAgICdbfC0pXSc6ICdlZV8xOC5wbmcnLFxuICAgICAgICAnWyotKV0nOiAnZWVfMTkucG5nJyxcbiAgICAgICAgJ1s6LSNdJzogJ2VlXzIwLnBuZycsXG4gICAgICAgICdbOi0qXSc6ICdlZV8yMS5wbmcnLFxuICAgICAgICAnW15vKV0nOiAnZWVfMjIucG5nJyxcbiAgICAgICAgJ1s4LSldJzogJ2VlXzIzLnBuZycsXG4gICAgICAgICdbKHwpXSc6ICdlZV8yNC5wbmcnLFxuICAgICAgICAnWyh1KV0nOiAnZWVfMjUucG5nJyxcbiAgICAgICAgJ1soUyldJzogJ2VlXzI2LnBuZycsXG4gICAgICAgICdbKCopXSc6ICdlZV8yNy5wbmcnLFxuICAgICAgICAnWygjKV0nOiAnZWVfMjgucG5nJyxcbiAgICAgICAgJ1soUildJzogJ2VlXzI5LnBuZycsXG4gICAgICAgICdbKHspXSc6ICdlZV8zMC5wbmcnLFxuICAgICAgICAnWyh9KV0nOiAnZWVfMzEucG5nJyxcbiAgICAgICAgJ1soayldJzogJ2VlXzMyLnBuZycsXG4gICAgICAgICdbKEYpXSc6ICdlZV8zMy5wbmcnLFxuICAgICAgICAnWyhXKV0nOiAnZWVfMzQucG5nJyxcbiAgICAgICAgJ1soRCldJzogJ2VlXzM1LnBuZycsXG4gICAgICAgICdbZGVsXSc6ICdidG5fZGVsLnBuZydcbiAgICB9XG59XG5cbldlYklNLkVtb2ppT2JqID0ge1xuICAgIHBhdGg6ICcuLi9zdGF0aWMvZmFjZXMvJyxcbiAgICBtYXAxOiB7XG4gICAgICAgICdbKTpdJzogJ2VlXzEucG5nJyxcbiAgICAgICAgJ1s6RF0nOiAnZWVfMi5wbmcnLFxuICAgICAgICAnWzspXSc6ICdlZV8zLnBuZycsXG4gICAgICAgICdbOi1vXSc6ICdlZV80LnBuZycsXG4gICAgICAgICdbOnBdJzogJ2VlXzUucG5nJyxcbiAgICAgICAgJ1soSCldJzogJ2VlXzYucG5nJyxcbiAgICAgICAgJ1s6QF0nOiAnZWVfNy5wbmcnXG4gICAgfSxcbiAgICBtYXAyOiB7XG4gICAgICAgICdbOnNdJzogJ2VlXzgucG5nJyxcbiAgICAgICAgJ1s6JF0nOiAnZWVfOS5wbmcnLFxuICAgICAgICAnWzooXSc6ICdlZV8xMC5wbmcnLFxuICAgICAgICAnWzpcXCcoXSc6ICdlZV8xMS5wbmcnLFxuICAgICAgICAnWzp8XSc6ICdlZV8xMi5wbmcnLFxuICAgICAgICAnWyhhKV0nOiAnZWVfMTMucG5nJyxcbiAgICAgICAgJ1s4b3xdJzogJ2VlXzE0LnBuZydcbiAgICB9LFxuICAgIG1hcDM6IHtcbiAgICAgICAgJ1s4LXxdJzogJ2VlXzE1LnBuZycsXG4gICAgICAgICdbK28oXSc6ICdlZV8xNi5wbmcnLFxuICAgICAgICAnWzxvKV0nOiAnZWVfMTcucG5nJyxcbiAgICAgICAgJ1t8LSldJzogJ2VlXzE4LnBuZycsXG4gICAgICAgICdbKi0pXSc6ICdlZV8xOS5wbmcnLFxuICAgICAgICAnWzotI10nOiAnZWVfMjAucG5nJyxcbiAgICAgICAgJ1tkZWxdJzogJ2RlbC5wbmcnXG4gICAgfSxcbiAgICBtYXA0OiB7XG4gICAgICAgICdbOi0qXSc6ICdlZV8yMS5wbmcnLFxuICAgICAgICAnW15vKV0nOiAnZWVfMjIucG5nJyxcbiAgICAgICAgJ1s4LSldJzogJ2VlXzIzLnBuZycsXG4gICAgICAgICdbKHwpXSc6ICdlZV8yNC5wbmcnLFxuICAgICAgICAnWyh1KV0nOiAnZWVfMjUucG5nJyxcbiAgICAgICAgJ1soUyldJzogJ2VlXzI2LnBuZycsXG4gICAgICAgICdbKCopXSc6ICdlZV8yNy5wbmcnXG4gICAgfSxcbiAgICBtYXA1OiB7XG4gICAgICAgICdbKCMpXSc6ICdlZV8yOC5wbmcnLFxuICAgICAgICAnWyhSKV0nOiAnZWVfMjkucG5nJyxcbiAgICAgICAgJ1soeyldJzogJ2VlXzMwLnBuZycsXG4gICAgICAgICdbKH0pXSc6ICdlZV8zMS5wbmcnLFxuICAgICAgICAnWyhrKV0nOiAnZWVfMzIucG5nJyxcbiAgICAgICAgJ1soRildJzogJ2VlXzMzLnBuZycsXG4gICAgICAgICdbKEQpXSc6ICdlZV8zNC5wbmcnXG4gICAgfSxcbiAgICBtYXA2OiB7XG4gICAgICAgICdbOlxcJyhdJzogJ2VlXzExLnBuZycsXG4gICAgICAgICdbOnxdJzogJ2VlXzEyLnBuZycsXG4gICAgICAgICdbKGEpXSc6ICdlZV8xMy5wbmcnLFxuICAgICAgICAnWzhvfF0nOiAnZWVfMTQucG5nJyxcbiAgICAgICAgJ1soRCldJzogJ2VlXzM1LnBuZycsXG4gICAgICAgICdbOnNdJzogJ2VlXzgucG5nJyxcbiAgICAgICAgJ1tkZWxdJzogJ2RlbC5wbmcnXG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ2RlZmF1bHQnOiBXZWJJTVxufVxuIl19
