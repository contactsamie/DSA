class Node {
    constructor(value) {
        this.value = value;
        this.prev = null; this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null; this.tail = null;
    }
    append(value) {
        let newNode = new Node(value);
        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }
    findByKey(key) {
        if (this.head == null) {
            return null;
        } else {
            if (this.head == this.tail) {
                if (this.head.value != null) {
                    if (this.head.value.key == key) {
                        return this.head.value;
                    } else {
                        return null;
                    }
                }
            } else {

                let current = this.head;
                while (current) {
                    if (current.value && current.value.key == key) {
                        let result = current;
                        return current.value;
                    } else {
                        current = current.next;
                    }
                }
            }
        }
    }
}

class HashHandler {
    keyToHash(key) {
        var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split('');
        return key.split("").map(x=>alphabet.lastIndexOf(x)).reduce((a,b)=>a+b);
    }
    hashToIndexWithinRange(hash, range) {
        return hash % range;
    }
}

class HashTable {
    hashHandler = new HashHandler();
    arraySize = 100;
    array = [];// array of linked list
    constructor() {
        for (let index = 0; index < this.arraySize; index++) {
            let ll = new LinkedList();
            this.array.push(ll);
        }
    }
    set(key, value) {
        let hash = this.hashHandler.keyToHash(key);
        let index = this.hashHandler.hashToIndexWithinRange(hash, this.arraySize);
        let store = this.array[index];
        if (store) {
            store.append({ key: key, value: value,index:index });
            return index;
        } else {
            console.log("Store not found in array");
            return null;
        }

    }
    get(key) {
        let hash = this.hashHandler.keyToHash(key);
        let index = this.hashHandler.hashToIndexWithinRange(hash, this.arraySize);
        let store = this.array[index];
        if (store) {
            return this.array[index].findByKey(key);
        } else {
            console.log("Store not found in array");
            return null;
        }

    }
}

let hashTable = new HashTable();
for (let index = 0; index < 15000000; index++) {
    hashTable.set((index)+"", "apple-"+index);
    if(index%3000000==0){
        console.log(index);
    }
}
console.time('1')
console.log(hashTable.get("1"))
console.timeEnd('1')


var a =  new Date().getTime();;
console.log(hashTable.get("14999999"))

var b =  new Date().getTime();;
console.log('It took ' + (b - a) + ' ms.');
