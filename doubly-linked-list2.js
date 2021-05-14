class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            return;
        } else
            if (this.head === this.tail) {
                newNode.prev = this.head;
                this.head.next = newNode;
                this.tail = newNode;
                return;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
    }
    print(node) {
        if (node == null) {
            node = this.head;
        }
        if (node == null) {
            return;
        }
        if (node.next == null) {
            console.log(node.value);
        } else {
            console.log(node.value);
            this.print(node.next);
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }
    reverseByRef() {
        if (this.head == null || this.head == this.tail) {
            return;
        } else {
            let current = this.head;
            while (current != null) {
                let cNext = current.next;
                let cPrev = current.prev;

                current.next = cPrev;
                current.prev = cNext;
                current = cNext;
            }
            let oldHead = this.head;
            this.head = this.tail;
            this.tail = oldHead;

        }

    }
    reverseByVal() {
        //sc: null head or head = tail 
        //right pointer, left pointer 
        //advance right pointer towards prev
        //advance left pointer towards next
        //if right = left then odd-> stop  
        // if left.prev ==right -> stop
        if (this.head == this.tail) {
            return;
        } else {
            let rightp = this.tail;
            let leftp = this.head;
            while (
                rightp != leftp && // even case
                leftp.prev != rightp // odd case
            ) {
                const rightVal = rightp.value;
                rightp.value = leftp.value;
                leftp.value = rightVal;
                rightp = rightp.prev;
                leftp = leftp.next;
            }
        }

    }
    deleteHead() {
        // move head pointer 
        // delete prev to new link
        // delete new to prev link
        // rest will garbage collect
        // sc: null head, only head 
        if (this.head == null) {
            return;
        }
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev.next = null;
            this.head.prev = null;
        }
    }
    deleteTail(){
        
    }
}

let ll = new LinkedList();
ll.append(1);
ll.print();
ll.deleteHead();
ll.print();
ll.prepend(1);
ll.print();
ll.append(2);
ll.print();
ll.append(3);
ll.print();
ll.append(4);
ll.print();
ll.deleteHead();
ll.print();
ll.deleteHead();
ll.print();
ll.deleteHead();
ll.print();
ll.deleteHead();
ll.print();



ll.print();
ll.append(10000);
ll.append(100000);
ll.append(1000000);
ll.append(10000000);
ll.prepend(1000);
ll.prepend(100);
ll.prepend(10);
ll.print();
ll.reverseByRef();
ll.print();
ll.reverseByRef();
ll.print();
ll.reverseByRef();
ll.print();
console.log("=======================");
ll.reverseByVal();
ll.print();
ll.reverseByVal();
ll.print();
ll.reverseByVal();
ll.print();
ll.reverseByVal();
ll.print();
