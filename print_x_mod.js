


let vals = [{val:1, text:"one"},
            {val:2, text:"two"},
            {val:3, text:"three"},
            {val:4, text:"four"},
            {val:5, text:"five"},
            {val:6, text:"six"},
            {val:7, text:"seven"},
            {val:8, text:"eight"},
            {val:9, text:"nine"},
            {val:10, text:"ten (surprisingly)"} ]
vals.filter(val => 0 == val.val % 5).map(val => val.text).forEach(text => console.log(text));