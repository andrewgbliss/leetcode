// this requires O(n) extra space for having the arrays a and b available simultaneously.
function reverse(a) {
    const b = [];
    for (let i = 0; i < a.length; i++) {
        b[a.length - 1 - i] = a[i];
    }
    return b;
}

console.log(reverse([1, 2, 3]));

// using this in-place algorithm which will only need constant number (2) of integers for the auxiliary variables i and tmp
function reverse_in_place(a) {
    for (let i = 0; i < Math.floor((a.length - 2 / 2)); i++) {
        const tmp = a[i];
        a[i] = a[a.length - 1 - i];
        a[a.length - 1 - i] = tmp;
    }
}

const arr = [1, 2, 3, 4];
reverse_in_place(arr);
console.log(arr);