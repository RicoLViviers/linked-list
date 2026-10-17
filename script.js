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
    append(value)
    {
        let newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
        }

        let temp = this.head;

        while (temp.next !== null) {
            temp = temp.next;
        }

        temp.next = newNode;

        this.head = temp;
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let temp = this.head;
        let size = 0;
        while (temp !== null) {
            temp = temp.next;
            size++;
        }
        return size;
    }

    head() {
        return this.head;
    }
}

let list = new LinkedList(10);

console.log(list);
