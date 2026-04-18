<div align = "center">
<h style = "margin-bottom: 0px; margin-top: 0px; color : purple;" align = "center" class = "header">

## ⌨ 25. Reverse Nodes in k-Group

</h>
</div>

<h2><a href="https://leetcode.com/problems/reverse-nodes-in-k-group" target = "_blank">25. Reverse Nodes in k-Group</a></h2><h3>Hard</h3><hr><p>Given the <code>head</code> of a linked list, reverse the nodes of the list <code>k</code> at a time, and return <em>the modified list</em>.</p>

<p><code>k</code> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <code>k</code> then left-out nodes, in the end, should remain as it is.</p>

<p>You may not alter the values in the list's nodes, only nodes themselves may be changed.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex1.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 2
<strong>Output:</strong> [2,1,4,3,5]
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://assets.leetcode.com/uploads/2020/10/03/reverse_ex2.jpg" style="width: 542px; height: 222px;" />
<pre>
<strong>Input:</strong> head = [1,2,3,4,5], k = 3
<strong>Output:</strong> [3,2,1,4,5]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of nodes in the list is <code>n</code>.</li>
	<li><code>1 <= k <= n <= 5000</code></li>
	<li><code>0 <= Node.val <= 1000</code></li>
</ul>

<p>&nbsp;</p>
<p><strong>Follow-up:</strong> Can you solve the problem in <code>O(1)</code> extra memory space?</p>

<CodeTabs :languages="[
  { name: 'C++', slot: 'cpp' },
  { name: 'Java', slot: 'java' },
  { name: 'Python', slot: 'py'}
]">

<template #java>

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ArrayList<Integer> res = new ArrayList<>();
        ListNode temp = head;
        while (temp != null) {
            res.add(temp.val);
            temp = temp.next;
        }
        ArrayList<Integer> nodes = new ArrayList<>();
        int left = 0, right = 0;
        while (left < res.size()) {
            int current_pointer = k;
            ArrayList<Integer> temp_nodes = new ArrayList<>();
            while (right < res.size() && current_pointer > 0) {
                current_pointer--;
                temp_nodes.add(res.get(right++));
            }
            if (temp_nodes.size() == k) Collections.reverse(temp_nodes);
            for (int ele : temp_nodes) nodes.add(ele);
            left = right;
        }
        Collections.reverse(nodes);
        ListNode res_node = new ListNode(nodes.get(0));
        for (int i = 1; i < nodes.size(); i++) {
            res_node = insert(res_node, nodes.get(i));
        }
        return res_node;
    }
    private ListNode insert(ListNode head, int val) {
        ListNode to_insert = new ListNode(val);
        to_insert.next = head;
        head = to_insert;
        return head;
    }
}
```

</template>

<template #cpp>

```cpp
/**
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
    ListNode* reverseList(ListNode* head) {
        if(head == NULL || head -> next == NULL){
            return head;
        }

        ListNode* newHead = reverseList(head -> next);
        ListNode* front = head -> next;
        front -> next = head;
        head -> next = NULL;
        return newHead;
    }

    ListNode* getKthNode(ListNode* temp , int k){
        k -= 1;
        while(temp != NULL && k > 0){
            temp = temp -> next;
            k--;
        }
        return temp;
    }
    ListNode* reverseKGroup(ListNode* head, int k) {
        ListNode* temp = head;
        ListNode* prevNode = NULL;

        while(temp != NULL){
            ListNode* kthNode = getKthNode(temp , k);
            if(kthNode == NULL){
                if(prevNode) prevNode -> next = temp;
                break;
            }

            ListNode* nextNode = kthNode -> next;
            kthNode -> next = NULL;
            reverseList(temp);
            if(temp == head){
                head = kthNode;
            }
            else{
                prevNode -> next = kthNode;
            }
            prevNode = temp;
            temp = nextNode;
        }
        return head;
    }
};
```

</template>

<template #py>

```py
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def add_node(self, head, val):
        temp = ListNode(val)
        temp.next = head
        head = temp
        return head

    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        nodes = []
        dummy = head
        res = None

        while dummy:
            nodes.append(dummy.val)
            dummy = dummy.next

        idx = 0
        while idx < len(nodes):
            if idx + k - 1 >= len(nodes): break
            nodes[idx:idx + k] = nodes[idx:idx + k][::-1]
            idx += k

        for i in range(len(nodes) - 1, -1, -1):
            res = self.add_node(res, nodes[i])

        return res

```

</template>

</CodeTabs>
