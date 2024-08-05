let listStart;

function createList(count) {
    var list = { value: 0, next: null };
    for (var i = 1; i < count; i++) {
        list = { value: i, next: list };
    }
    return list;
}

function printList(list) {
    var current = list;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function reverseNode(node, reversePointer){
    let n2 = node;
    let n3 = node.next;
    node.next = reversePointer;
    if(n3 === null){
        return n2;
    }
    return reverseNode(n3, n2);
}

function reverseList(list) {    
    return reverseNode(list,null);
}

let count = process.argv[2] || 10;
let l = createList(count);

console.log("\n\nLIST:\n");
printList(l);
console.log("\n\nREVERSE:\n");
printList(reverseList(l));