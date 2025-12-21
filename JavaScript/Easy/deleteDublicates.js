function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

let head = new ListNode(1, new ListNode(1, new ListNode(2 , new ListNode(2, new ListNode(3)))));

function deleteDuplicates(head) {
    let current = head;

    while (current !== null && current.next !==null) {
        if (current.val === current.next.val) {
            current.next = current.next.next;
            console.log(current, "salom")
        }else{
            current = current.next;
            console.log(current, "alik")
        }
    }

    return head
}

let result = deleteDuplicates(head);
let arr = [];

while(result!==null){
    arr.push(result.val)
    result = result.next
}

console.log(arr)