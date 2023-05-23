// Choose a pivot element from the array.
// Partition the array into two subarrays, one containing elements smaller than the pivot, and the other containing elements larger than the pivot.
// Recursively apply the quick sort algorithm to the two subarrays until the entire array is sorted.

// The average time complexity of quick sort is O(N log(N))

const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
        leftArr.push(arr[i]);
        } else {
        rightArr.push(arr[i]);
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([9, 3, 4, 6, 2, 5, 1, 8, 7, 0]));

/*

1.
    leftArr = [3, 4, 6, 2, 5, 1, 8, 7, 0]
    pivot = 9
    rightArr = []

2.

    leftArr = [2, 1, 0]
    pivot = 3
    rightArr = [4, 6, 5, 8, 7]

3.

    leftArr = [1, 0]
    pivot = 2
    rightArr = []

4.

    leftArr = [0]
    pivot = 1
    rightArr = []

*/