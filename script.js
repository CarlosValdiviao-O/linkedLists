const linkedList = (val = null) => {
    let head = val;
    let tail = val;
    let count = (val !== null) ? 1 : 0;

    function appendValue(val) {
        const newNode = node(val);
        if (head === null){
            head = newNode;
            return
        }
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        tail = newNode;
        count++;
    }

    function prependValue(val) {
        const newNode = node(val);
        newNode.next = head;
        head = newNode;
        if (tail === null)
            tail = newNode;
        count++;
    }

    function size() {
        return count;
    }

    function getHead() {
        return head;
    }

    function getTail() {
        return tail;
    }

    function at(index) {
        let current = head;
        let n = 0;
        while (n < index) {
            if (current.next)
                current = current.next;
            else
                return(`No node found at index: ${index}`);
            n++;
        }
        return current;
    }

    function pop() {
        let current = head;
        let prev = head;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        prev.next = null;
        tail = prev;
        count--;
    }

    function contains(value) {
        let current = head;
        while (current) {
            if (current.value === value)
                return true;
            current = current.next;
        }
        return false;
    }

    function find (value) {
        let current = head;
        let n = 0;
        while (current) {
            if (current.value === value)
                return n;
            current = current.next;
            n++;
        }
        return null;
    }

    function toString() {
        let current = head;
        let str = '';
        while (current) {
            str += `( ${current.value} ) -> `;
            current= current.next;
        }
        return str + 'null';
    }

    function insertAt(value, index) {
        if (index === 0) {
            prependValue(value);
            return;
        }
        if (index >= count - 1) {
            appendValue(value);
            return;
        }
        const newNode = node(value);
        let current = head;
        let prev = head;
        let n = 0;
        while (n < index && current) {
            prev = current;
            current = current.next;
            n++;
        }
        newNode.next = current;
        prev.next = newNode;
        count++;
    }

    function removeAt(index) {
        if (index === 0) {
            head = head.next;
            count--;
            return;
        }
        if (index >= count - 1) {
            pop();
            return;
        }
        let current = head;
        let prev = head;
        let n = 0;
        while (n < index && current) {
            prev = current;
            current = current.next;
            n++;
        }
        prev.next = current.next;
        count--;
    }

    return { appendValue, prependValue, size, getHead, getTail,
            at, pop, contains, find, toString, insertAt, removeAt}
}

const node = (val) => {
    let value = val;
    let next = null;

    return { value, next }
}