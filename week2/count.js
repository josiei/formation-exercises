
//Q. Given an unsorted linked list, count the number of elements (iteratively or //recursively).


class ListNode {
  constructor(value = 0, next = null) {
      this.value = value
      this.next = next
  }
}

function count(head) {
let count = 0;
let current = head;
  while(current !== null){
    count += 1;
    current = current.next;
  }


  return count;
}

// Test Cases
var LL1 = new ListNode(1, new ListNode(4, new ListNode(5)))
console.log(count(null)) // 0
console.log(count(LL1)) // 3
console.log(count(new ListNode())) // 1

