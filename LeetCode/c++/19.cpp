/**
删除链表的倒数第n个节点
c++ 递归 牛皮！！！
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
 int cur=0;
    ListNode* removeNthFromEnd(ListNode* head, int n) {
       
        if(!head) return NULL;
  head->next=removeNthFromEnd(head->next,n);
  cur++;
  if(cur==n) return head->next;
  return head;
  
      
  
    }
};