class LLNode {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LLQueue {
  constructor() {
    this.len = 0;
    this.head = null;
    this.end = null;
  }
  enqueue(newValue) {
    let node = new LLNode(newValue, null, this.end);
    if(this.len === 0){
      this.head = node;
    } else if(this.len > 0){
      this.end.next = node;
    }
    this.end = node;
    this.len += 1;
  }
  dequeue() {
    let popped = this.head;
    let next = this.head.next;
    this.head.next = null;
    this.head = next;
    this.len -= 1;
    return popped;
  }
  size() {
    return this.len;
  }
}

const q = new LLQueue();
console.log(q.size()) // 0
q.enqueue(2);
q.enqueue(3);
console.log(q.size()) // 2
console.log(q.dequeue()); // 2
console.log(q.size()) // 1
console.log(q.dequeue()); // 3
