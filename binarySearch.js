module.exports.binarySearch = function(sortedArr, searchElem){
    let left = 0;
    let right = sortedArr.length - 1;
    while (left <= right){
        let middle = Math.floor(left + (right - left) / 2);
        if (searchElem === sortedArr[middle]){
            return middle;
        }else if (searchElem > sortedArr[middle]){
            left = middle + 1;
        }else{
            right = middle - 1;
        }
    }
    return -1;
}