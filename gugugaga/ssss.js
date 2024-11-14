function findmax(arr) {
    let max = arr[0];
    for(let i = 1; i < arr.length; i++ ){
        if (arr[i] > max ) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findmax([3, 8985097867856, 7, 2, 8]));