/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let tempHead = head
    let prev = null
    while (tempHead) {
        if (tempHead.val === val) {
            // when head is present at 0th index
            if (!prev) {
                head = head.next
                tempHead = tempHead.next
            } else {
                prev.next = tempHead.next
                tempHead = tempHead.next

            }
        } else {
            prev = tempHead
            tempHead = tempHead.next
        }
    }

    return head

};