function hasCycle(head) {
    if (head === null) return false; // If the list is empty, no cycle exists
    
    let slow = head; // Tortoise
    let fast = head; // Hare
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next;          // Move slow pointer one step
        fast = fast.next.next;     // Move fast pointer two steps
        
        if (slow === fast) {       // If slow and fast meet, there's a cycle
            return true;
        }
    }
    
    return false; // No cycle found
}

// Example usage with a linked list:
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(node1)); // Output: true
