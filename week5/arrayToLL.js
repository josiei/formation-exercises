class LLNode {
  constructor(val, next = null) {
    this.value = val;
  }
}

function arrayToLL(array) {
  // FILL ME IN
  if(array.length === 0) return null;
  let head = new LLNode(array[0]);
  let current = head;
  for(let i = 1; i < array.length; i++){
    current.next = new LLNode(array[i]);
    current = current.next;
  }

  return head;
}

function printList(head) {
  if (!head) {
    return "<empty>";
  }
  const parts = [];
  while (head) {
    parts.push(head.value);
    head = head.next;
  }
  return parts.join(" -> ");
}

console.log(printList(arrayToLL([1, 2])))
console.log(printList(arrayToLL([])))
console.log(printList(arrayToLL([1])))
console.log(printList(arrayToLL([1, 2, 3, 4, 5])))
