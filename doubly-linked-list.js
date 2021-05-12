class Node {
    next = null;
    prev = null;
    constructor(value) { // convinience function
        this.value = value;
    }
}
class LinkedList {
    constructor() {
        this.head = null;// head pointer
        this.tail = null;// tail pointer
    }
    test(expected) {
        let toBetested = [];
        let testHead = this.head;// set initial test head to head
        while (testHead) {
            toBetested.push(`-[${testHead.value}]-`);// test value of node
            testHead = testHead.next;// move test head to next node
        }
        const actual = toBetested.join("");

        console.log(actual === expected ? "TEST PASSED!" : "TEST FAILED!!  FAILED!!  FAILED!!  FAILED!!  FAILED!!------ XXXXXXXXXxxxxxxxxxxxx -----");
        console.log(expected + " expected");
        console.log(actual + " actual");
        if (this.head.prev && this.head.prev.value) {
            let ttt = 9;
        }
        console.log(" ");
        return this; // chain
    }
    append(value) {
        const newNode = new Node(value); // create new node at a new memory location
        if (this.head === null) { // special case this where head is null
            this.head = newNode; // point head pointer to new node
            this.tail = newNode; // point tail pointer to  the same new node
        } else {
            newNode.prev = this.tail;// wire the new node's prev to current tail
            this.tail.next = newNode;// wire he current tail's next to new node
            this.tail = newNode;// move the tail pointer to new node
        }
        return this;
    }
    prepend(value) {
        const newNode = new Node(value); // create new node at a new memory location
        if (this.tail === null) { // special case this where tail is null
            this.head = newNode; // point head pointer to new node
            this.tail = newNode; // point tail pointer to  the same new node
        } else {
            newNode.next = this.head;// wire the new node's next to current head
            this.head.prev = newNode;// wire he current head's prev to new node
            this.head = newNode;// move the head pointer to new node
        }
        return this;
    }
    removeHead() {
        if (this.head === this.tail) {// special case this where dll is empty or has one node
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;// move the head pointer to the next node
            this.head.prev.next = null;// cut the wire  going from the previous head to the new head
            this.head.prev = null;// cut the wire going from the new head tot he previous head
            // previous head is now garbage to be collected
        }
        return this;
    }
    removeTail() {
        if (this.head === this.tail) { // special case this where dll is empty or has one node
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;// move the tail pointer to the previous node
            this.tail.next.prev = null; // cut the wire  going from the previous tail to the new tail
            this.tail.next = null; // cut the wire  going from the new tail to the previos tail
            // previous tail is now garbage to be collected
        }
        return this;
    }
    reverseByRef() {
        if (this.head === null || this.head === this.tail) {
            //do nothing
        } else {
            let current = this.head;
            while (current) {
                const oNext = current.next;
                const oPrev = current.prev;
                current.next = oPrev;
                current.prev = oNext;
                current = oNext;
            }
            const currentHead = this.head;
            this.head = this.tail;
            this.tail = currentHead;
        }
        return this;
    }

    reverse() {
        let rightPointer = this.tail;//start right from the tail
        let leftPointer = this.head;//start left form the head
        while (
            rightPointer != null && // as long as right is pointing to something
            leftPointer != null && // as long as left is pointing to something
            rightPointer != leftPointer &&// if dll has odd node]--[ ensure they don't point to he middle
            leftPointer.prev != rightPointer// if dll has even node]--[ ensure left and right pointers don't cr9ss
        ) {
            let leftNodeVal = leftPointer.value;
            let rightNodeVal = rightPointer.value;
            leftPointer.value = rightNodeVal;// swap values
            rightPointer.value = leftNodeVal;// swap values
            leftPointer = leftPointer.next;// move left forward
            rightPointer = rightPointer.prev; // move right forward
        }
        return this;
    }
    deleteWithValue(value) {

        let currentPointer = this.head;
        while (currentPointer !== null) {
            if (currentPointer.value === value) {
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentPointer === this.tail) {
                    this.tail = currentPointer.prev;
                    this.tail.next.prev = null;
                    this.tail.next = null;

                } else if (currentPointer === this.head) {
                    this.head = currentPointer.next;
                    this.head.prev.next = null;
                    this.head.prev = null;

                } else {
                    const prev = currentPointer.prev;
                    const next = currentPointer.next;
                    prev.next = next;
                    next.prev = prev;
                    currentPointer.prev = null;
                    currentPointer.next = null;

                }
                currentPointer = null;
            } else {
                currentPointer = currentPointer.next;
            }
        }
        return this;
    }
    printLeftToRight(node) {
        if (node == null) {
            return this.printLeftToRight(this.head); // start with head
        } else if (node.next != null) {  // recurse all the way to the end
            var result = this.printLeftToRight(node.next);
            return node.value + "" + result; // on your way back up, prepend
        } else {
            return node.value; // at the end do this
        }
    }
    printRightToLeft(node) { // print in reverse order
        if (node == null) {
            return this.printRightToLeft(this.head); // start with head
        } else if (node.next != null) {  // recurse all the way to the end
            var result = this.printRightToLeft(node.next);
            return result + "" + node.value; // on your way back up, append
        } else {
            return node.value; // at the end do this
        }
    }
}
const list = new LinkedList();
list.append(2).test("-[2]-");
list.append(3).test("-[2]--[3]-");
list.append(4).test("-[2]--[3]--[4]-");
list.prepend(1).test("-[1]--[2]--[3]--[4]-");
list.prepend(0).test("-[0]--[1]--[2]--[3]--[4]-");
list.removeHead().test("-[1]--[2]--[3]--[4]-");
list.removeTail().test("-[1]--[2]--[3]-");
list.append(4).test("-[1]--[2]--[3]--[4]-");
list.append(5).test("-[1]--[2]--[3]--[4]--[5]-");
list.append(6).test("-[1]--[2]--[3]--[4]--[5]--[6]-");
list.reverse().test("-[6]--[5]--[4]--[3]--[2]--[1]-");
list.reverse().test("-[1]--[2]--[3]--[4]--[5]--[6]-");
list.append(7).test("-[1]--[2]--[3]--[4]--[5]--[6]--[7]-");
list.reverse().test("-[7]--[6]--[5]--[4]--[3]--[2]--[1]-");
list.reverse().test("-[1]--[2]--[3]--[4]--[5]--[6]--[7]-");
list.deleteWithValue(7).test("-[1]--[2]--[3]--[4]--[5]--[6]-");
list.deleteWithValue(3).test("-[1]--[2]--[4]--[5]--[6]-");
list.deleteWithValue(1).test("-[2]--[4]--[5]--[6]-");

list.append(8).test("-[2]--[4]--[5]--[6]--[8]-");
list.reverseByRef().test("-[8]--[6]--[5]--[4]--[2]-");
list.reverseByRef().test("-[2]--[4]--[5]--[6]--[8]-");
list.append(9).test("-[2]--[4]--[5]--[6]--[8]--[9]-");
list.reverseByRef().test("-[9]--[8]--[6]--[5]--[4]--[2]-");
list.reverseByRef().test("-[2]--[4]--[5]--[6]--[8]--[9]-");
console.log("got " + list.printLeftToRight());
console.log("Expecting 245689");
console.log("got " + list.printRightToLeft());
console.log("Expecting 986542");
