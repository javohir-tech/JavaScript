function ListNode(val, next = null) {
    this.val = val;
    this.next = next
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeTwoLists = (list1, list2) => {
    let dummy = new ListNode(-1)
    let current = dummy

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            current.next = list2,
            list2 = list2.next
        }else{
            current.next = list1;
            list1 =  list1.next
        }
        current = current.next
        // console.log(current)
    }

    current.next = list1 !== null ? list1 : list2;

    return dummy.next
}

let merged = mergeTwoLists(list1, list2);

while(merged !== null){
    console.log(merged.val)
    merged = merged.next
}