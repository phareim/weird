// From single to double
const hipsum = require('./lorem-hipsum');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    print() {
        console.log(this.data, (this.next?"next: " + this.next.data:null), (this.previous?"prev: " + this.previous.data:null) );
        if (this.next) {
            this.next.print();
        }
    }
}

let start = new Node("s");

async function createNodeWithHipsterText(data = null) {
    return new Node(await hipsum.hipsum(1));
}

async function main() {
    let n = start;
    for (const e of [1, 2, 3, 4, 5]) {
        n.next = new Node(e);
        n = n.next;
    }
    start.print();

    start.previous = null;
    let q = start;
    while(q.next){
        let r = q;
        q = q.next;
        q.previous = r;
    }
    console.log("\nADD PREV:\n");
    start.print();

}

main();