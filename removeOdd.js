// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(head) {
  if(!head) return null;
  let position = 1;
  let prev = new ListNode();
  let current = head;
  if(current.value % 2 === 1){
      position += 1;
      head = current.next;
      current = current.next;
  }
  while(current !== null){
      if((position % 2 === 1) && (current.value % 2 === 1)){
          prev.next = current.next;
      }

      position += 1;
      prev = current;
      current = current.next;
  }
  return head;

}
