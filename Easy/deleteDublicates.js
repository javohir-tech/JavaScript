function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

const deleteDuplicates = (head) => {
    let current = head;

    while (current !== null && current.next !== null) {
        if(current.val ===  current.next.val){
            current.next = current.next.next
        }else{
            current = current.next
        }
        console.log(current)
    }

    return head
}

let head = new ListNode(1, new ListNode(1, new ListNode(2)))

// console.log(deleteDuplicates(head))

let result = deleteDuplicates(head);
let arr = []
while(result!==null){
    arr.push(result.val)
    result = result.next
}

console.log(arr)