function createList(count) {
    var list = null;
    for (var i = 1; i <= count; i++) {
        list = { value: "node "+i+".", next: list };
    }
    return list;
}

function printList(list, name = "LIST", count = 10) {
    console.log('\x1b[38;2;0;255;0m',`\r█ ${name}:`);
    var current = list;
    var index = 0;
    while (current) {
        const gradient = Math.floor((index / count) * 255); // Adjust the divisor for more or fewer steps
        const colorCode = `\x1b[38;2;0;${gradient};0m`;
        console.log(`${colorCode}%s\x1b[0m`, `█ ${current.value}`);
        current = current.next;
        index++;
    }
    console.log('\n');
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

printList(l);
printList(reverse(l), "REVERSE", count);