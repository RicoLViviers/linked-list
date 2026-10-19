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
    constructor () {
        this.head = null;
    }
    append(value)
    {
        let newNode = new Node(value);
        
        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let temp = this.head;

        while (temp.next) {
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

    pop () {
        if (this.head === null) {
            return null;
        }

        let temp = this.head
        this.head = this.head.next;

        temp = null;

        return this.head;
    }

    contains(value) {
        let temp = this.head;
        if (temp.data === value) {
            return true;
        }
        while (temp.next !== null) {
            temp = temp.next
            if (temp.data === value) {
                return true;
            }

        }
        return false;
    }

    findIndex(value) {
        let index = 0;
        let temp = this.head;
        if (temp.data === value) {
            return index;
        }
        while (temp.next !== null) {
            index ++;
            temp = temp.next
            if (temp.data === value) {
                return index;
            }

        }
        return -1;
    }

    toString() {
        let temp = this.head
        
        if (!temp) {
            return "";
        } 
        let stringValue = "";

        while (temp) {
            stringValue += "( " + temp.data + " ) -> ";
            temp = temp.next;
        }

        stringValue += "( null )";

        return stringValue;
    }
}

let list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.append(60);
list.pop();

console.log(list.contains(20))
console.log(list.contains(33))

console.log(JSON.stringify(list, null, 4));
console.log(list.findIndex(20))
console.log(list.toString())