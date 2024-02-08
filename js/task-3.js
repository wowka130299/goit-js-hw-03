function filterArray(numbers, value) {
    let numbersLength = numbers.length;
    let result = [];
    for (let i = 0; i < numbersLength; i++) {
        if (numbers[i] > value) {
            result.push(numbers[i]); 
        }
        
    }
    return result;
    
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив

console.log(filterArray([12, 24, 8, 41, 76, 11, 11, 13, 14, 15], 1));