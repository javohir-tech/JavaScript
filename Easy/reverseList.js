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

function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))))

var reverseList = function (head) {
    return head
};

let result = reverseList(head)
// console.log(result)
let arr = [];

while (result !== null) {
    arr.unshift(result.val);
    result = result.next
}

console.log(arr)