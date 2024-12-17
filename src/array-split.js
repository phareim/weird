const a = [null, 3, 3, 5, null, 1111, "fooo", null, {"a": 40}, 5, null, 7, 2, 9, null, 4, 56056, -12, null, 1,1,1,1,1,1,1,1, null, null, null, {}, "Thanks, I'm good."];

// console.log(a);

const result = [[]];
let i = 0;
a.forEach(e => {
    if(e === null){
        i++;
        result[i] = [];
    }
    else {
        result[i].push(e);
    }
});

result.forEach(e =>{
    console.log(e);
});