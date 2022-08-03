class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function arrayify(head) {
  let ptr = head
  var array = []
  while (ptr != null) {
      array.push(ptr.value)
      ptr = ptr.next
  }
  return array
}

// Q. Given a linked list, append an element with a target value to the list iteratively.

function append(head, target){
  if(head === null) return new ListNode(target);
  let current = head;
  while(current.next !== null){
    current = current.next;
  }
  current.next = new ListNode(target);
  return head;
}

var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(arrayify(append(null, 1))) // [1]
console.log(arrayify(append(LL1, 7))) // [1, 4, 5, 7]
console.log(arrayify(append(new ListNode(), 7))) // [0, 7]

