/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var deleteDuplicates = function(head) {
  let current = head;
  let prev = new ListNode(null);
  while(current !== null){
      if(prev.val === current.val){
          prev.next = current.next;

      } else {
          prev = current;
      }

      current = current.next
  }
  return head;

};
