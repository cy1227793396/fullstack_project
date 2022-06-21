/**
 * 链表中环的入口 节点
 * 双指针 o（n） o（1）
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * 
 * 
 * 
 * 
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(head==null||head.next==null||head.next.next==null){
        return null;
    }
   let fast=head.next.next;
   let slow=head.next;
   while(fast!=slow){
       if(fast.next==null||fast.next.next==null){
           return null;
       }
       fast=fast.next.next;
       slow=slow.next;
   }
   fast=head;
   while(fast!=slow){
       fast=fast.next;
       slow=slow.next;
   }
   return fast;

    
    

};