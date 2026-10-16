class Node {
    constructor (data)
    {
        this.data = data;
        this.next = null;
    }
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

let temp = head;
while (temp!== null) {
    console.log(temp.data + " ");
    temp = temp.next;
}