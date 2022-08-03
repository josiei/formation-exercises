// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function solution(list1, list2) {
  if(list1 === null) return null;
  let current1 = list1;
  let current2 = list2;
  let newHead = new ListNode()
  let tail = newHead;
  while(current1 !== null || current2 !== null){
      tail.value = current1.value + current2.value;
      if(current1.next && current2.next){
          tail.next = new ListNode();
      }
      current1 = current1.next;
      current2 = current2.next;
      tail = tail.next;

  }
  return newHead;
}
