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

var deleteDuplicates = function (head) {
    let current = head;
    while (current !== null && current.next !== null) {
        if (current.val === current.next.val) {
            current.next = current.next.next
        } else {
            current = current.next
        }
    }

    return head

};

let head = new ListNode(1, new ListNode(1, new ListNode(2)))

let result = deleteDuplicates(head)

let arr = [];
while (result !== null) {
    arr.push(result.val)
    result = result.next
}

console.log(arr)