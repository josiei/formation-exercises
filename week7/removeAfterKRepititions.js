// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head, k) {
  const count = {};
  let toRemove = new Set();
  if(!head) return null;
  if(k === 0) return null;
  let current = head;
  let prev = null;
  while(current !== null){
      if(toRemove.has(current.value)){
          prev.next = current.next;
          current = current.next;
          continue;
      }

      count[current.value] = count[current.value] || 0;
      count[current.value] += 1;
      if(count[current.value] >= k){
          toRemove.add(current.value);
      }

      prev = current;
      current = current.next;

  }
  return head;
}
