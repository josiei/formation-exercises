// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//              n
//     c
// [1, 2, 3, 4]

function solution(list) {
  if(list === null) return null;
  let current = list;
  let x2 = list.next;
  while((x2 !== null) && (x2.next !== null)){
      current = current.next;
      x2 = x2.next.next;
  }
  return current.value;

}
