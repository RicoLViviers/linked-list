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

    tail() {
        let temp = this.head;
        while (temp.next!== null) {
            temp = temp.next;
        }
        return temp;
    }

    at(index) {
        let temp = this.head;
        for (let i=0; i<index; i++) {
            temp = temp.next;
        } 

        return temp ? temp : undefined;
    }
}

let list = new LinkedList(10);

list.append(20);
list.append(30);

console.log(JSON.stringify(list, null, 4));
