import util from 'util'

util.inspect.defaultOptions.depth = null; 

class Node {
    constructor (data)
    {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor (data) {
        this.head = new Node(data);
    }
}

let list = new LinkedList(10);

console.log(list);
