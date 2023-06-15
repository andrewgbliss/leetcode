// binarySearch(arr, x, low, high)
//     repeat till low = high
//            mid = (low + high)/2
//            if (x = arr[mid])
//                return mid
//           else if (x > arr[mid])
//                low = mid + 1
//           else
//                high = mid – 1


// Time Complexity: O(log N)
// Auxiliary Space: O(1)

// Implementation of Iterative  Binary Search Algorithm: 

const binarySearch = (arr, target) => {
    let l = 0;
    let h = arr.length - 1;
    while (l <= h) {
        let m = l + (Math.floor((h - l) / 2));
        if (target === arr[m]) {
            return m;
        } else if (target > arr[m]) {
            l = m + 1;
        } else {
            h = m - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));

/*

l = 0
h = 9

m = 0 + ((9 - 0) / 2) = 4

l = 0
h = 3

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 l        m                  h

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 l  m  h 

If its greater than the middle, then move the low to the middle + 1
If its less than the middle, then move the high to the middle - 1

*/


// binarySearch(arr, x, low, high)
//        if low > high
//            return False
//        else
//            mid = (low + high) / 2 
//            if x = arr[mid]
//                return mid 
//            else if x > arr[mid]
//                return binarySearch(arr, x, mid + 1, high)
//            else
//                return binarySearch(arr, x, low, mid – 1)

// Implementation of Recursive  Binary Search Algorithm:

// Time Complexity: O(logN)
// Auxiliary Space: O(1), If the recursive call stack is considered then the auxiliary space will be O(logN).

const binarySearchRecursive = (arr, target, l = 0, h = arr.length - 1) => {
    if (l > h) {
        return -1;
    } else {
        let m = l + (Math.floor((h - l) / 2));
        if (target === arr[m]) {
            return m;
        } else if (target > arr[m]) {
            return binarySearchRecursive(arr, target, m + 1, h);
        } else {
            return binarySearchRecursive(arr, target, l, m - 1);
        }
    }
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));

