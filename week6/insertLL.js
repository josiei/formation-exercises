// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list, target) {
  if(list === null) return new ListNode(target);
  let current = list;
  if(target < current.value){
          let newHead = new ListNode(target);
          newHead.next = current;
          return newHead;
  }
  while(current !== null){

      if((current.value < target) && (current.next === null)){
          current.next = new ListNode(target);
      } else if((current.value < target) && (target < current.next.value)) {
          let next = current.next;
          current.next = new ListNode(target);
          current.next.next = next;
      }
      current = current.next;
  }
  return list;
}
