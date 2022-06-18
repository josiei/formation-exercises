/* eslint-disable no-unused-vars */
// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
class ListNode {

}

function solution(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  let newHead = new ListNode();
  let tail = newHead;

  if(!current1 || !current2){
      if(current1 !== null){
          newHead = current1;
      } else if(current2 !== null){
          newHead = current2;
      } else {
          newHead = []
      }
  }
  while(current1 !== null && current2 !== null){
          tail.value = current1.value + current2.value;
          console.log(tail.value, "tail value");
          current1 = current1.next;
          current2 = current2.next;
          if(current1 && current2){
              tail.next = new ListNode();
              tail = tail.next;
          }
  }

  if(current1 !== null){
      tail.next = current1;
  } else if(current2 !== null){
      tail.next = current2;
  }
  return newHead;
  }
