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

console.log(bst.printInOrder(bst.root))
let y = bst;
