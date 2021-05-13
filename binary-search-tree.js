class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    printInOrder(node) {
        if (node == null) {
            return "";
        } else {
            let left = "";
            let right = "";
            if (node.left != null) { //recurse down the left of the tree
                left = this.printInOrder(node.left) + ",";
            }
            let self = node.value; // print itself

            if (node.right != null) { // recurse down the right of the tree
                right = "," + this.printInOrder(node.right);
            }
            return left + self + right; // compose print
        }
    }

    insert(newNode, currentNode) {
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        if (currentNode == null) {
            currentNode = this.root;
        }
        if (newNode.value <= currentNode.value) {
            if (currentNode.left == null) {
                currentNode.left = newNode;
                return;
            } else {
                this.insert(newNode, currentNode.left)
            }
        } else {
            if (currentNode.right == null) {
                currentNode.right = newNode;
                return;
            } else {
                this.insert(newNode, currentNode.right)
            }
        }
    }
    contains(value, node) {
        if (node == null) {
            return false;
        }

        if (node.value == value) {
            return true;
        } else {

            if (value <= node.value) { //careful
                if (node.left != null) {
                    return this.contains(value, node.left);
                }
            } else {
                if (node.right != null) {
                    return this.contains(value, node.right)
                }
            }
            return false;
        }
    }
}

let bst = new BinarySearchTree();
bst.insert(new Node(10));
bst.insert(new Node(6));
bst.insert(new Node(15));

bst.insert(new Node(5));
bst.insert(new Node(3));
bst.insert(new Node(4));
bst.insert(new Node(20));
bst.insert(new Node(18));
bst.insert(new Node(22));
console.log(bst.contains(18, bst.root));
console.log(bst.contains(19, bst.root));
console.log(bst.contains(22, bst.root));
console.log(bst.contains(100, bst.root));
console.log(bst.printInOrder(bst.root));

const size = 20;
for (let index = 0; index < size; index++) {
    const data = Math.floor(Math.random() * size);
    bst.insert(new Node(data));
}
console.log(bst.printInOrder(bst.root));

let y = bst;
