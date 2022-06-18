let curr = head;
let newHead = null;
let prev = null;

while (curr !== null) {
  newNode = new ListNode(fn(curr.val);
  if (newHead === null) {
    newHead = newNode;
  } else {
    prev.next = newNode;
    newNode.prev = prev;
  }
  prev = newNode;
  curr = curr.next;
}

return newHead;
