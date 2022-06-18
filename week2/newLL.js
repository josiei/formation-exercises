class ListNode {

}


function map(head, fn){
  let curr = head;
  let newHead = null;
  let prev = null;

  while (curr !== null) {
    let newNode = new ListNode(fn(curr.val));
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

}

console.log(map())
