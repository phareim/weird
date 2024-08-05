function createList(count) {
    var list = null;
    for (var i = 1; i <= count; i++) {
        list = { value: "node "+i+".", next: list };
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

function reverse(node, reversePointer = null){
    let n2 = node;
    let n3 = node.next;
    node.next = reversePointer;
    if(!n3)
        return n2;
    else
        return reverse(n3, n2);
}

let count = process.argv[2] || 10;
let l = createList(count);

console.log("\n\nLIST:\n");
printList(l);
console.log("\n\nREVERSE:\n");
printList(reverse(l));