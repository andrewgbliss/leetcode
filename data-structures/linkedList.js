class ListNode{
	constructor(val) {
			this.val = val;
			this.next = null;
			this.prev = null;
	}
}

class SinglyLinkedList{
	constructor() {
			this.head = null;
			this.tail = null;
			this.length = 0;
	}

	push(val) {
		var newNode = new ListNode(val);
		if (!this.head){
				this.head = newNode;
				this.tail = this.head;
		} else {
				this.tail.next = newNode;
				this.tail = newNode;
		}
		this.length++;
		return this;
	}

	shift() {
		if (!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0){
				this.tail = null;
		}
		return currentHead;
	}
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length += 1;

    return newNode;
  }

  pop() {
    // if empty: return null
    if (!this.length) {
      return null;
    } else {
      // save current tail (to return it later)
      const nodeToRemove = this.tail;

      if (this.length === 1) {
        // after removing the only node, there will be no head and tail
        this.head = null;
        this.tail = null;
      } else {
        // set the node before the current tail as the new tail
        this.tail = this.tail.prev;
        // remove the connection from the new tail to the old tail
        this.tail.next = null;
        // remove the connection from the old tail to the new tail
        nodeToRemove.prev = null;
      }

      // decrease length by 1
      this.length -= 1;

      // return old tail
      return nodeToRemove;
    }
  }
}