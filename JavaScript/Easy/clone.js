function ListNode(val, naxt = null) {
    this.val = val;
    this.naxt = naxt
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

const mergeTwoLists = (list1, list2) => {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            current.naxt = list2;
            list2 = list2.naxt
        } else {
            current.naxt = list1;
            list1 = list1.naxt;
        }
        current = current.naxt
    }
    current = list1 !== null ? list1 : list2;
    return dummy.naxt
}

let merged = mergeTwoLists(list1, list2);

while (merged !== null) {
    console.log(merged.val)
    merged = merged.naxt
}