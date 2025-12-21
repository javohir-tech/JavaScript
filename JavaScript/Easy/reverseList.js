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
    let prev = null;
    let current = head

    while (current !== null) {
        let nextTemp = current.next; // 2... 
        current.next = prev; null

        prev = current; //
        current = nextTemp
    }
    return prev
};

let result = reverseList(head)
let arr = [];

while (result !== null) {
    arr.push(result.val);
    result = result.next
}

console.log(arr)