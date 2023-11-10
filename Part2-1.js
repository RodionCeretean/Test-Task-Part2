// Написать функцию которая: учитывает массив несортированных чисел и определяет являются ли числа в массиве последовательными, например :
//
// a. Если массив равен [5, 2, 3, 1, 4] тогда функция должна вернуть true потому что массив содержит последовательные числа от 1 до 5 (1,2,3,4,5)
//
// b. Если массив равен [34, 23, 52, 12, 3] тогда функция должна возвращать значения  false потому что элементы не являются последовательными.
//
//     с. Если массив равен [7, 6, 5, 5, 3, 4] тогда функция должна возвращать значения false, потому что 5  и 5 не являются последовательными

function consecutiveNumbers(array) {
    let result
    if (array.length !== Array.from(new Set(array)).length) result = false
    else {
        const sortedArray = array.sort()
        const sum = sortedArray.reduce((acc, val) => acc + val)
        const arithmeticProgression = (sortedArray[0] + sortedArray[sortedArray.length - 1]) * sortedArray.length / 2
        result = sum === arithmeticProgression
    }
    console.log(result)
    return result
}

consecutiveNumbers([5, 2, 3, 1, 4])
consecutiveNumbers([34, 23, 52, 12, 3])
consecutiveNumbers([7, 6, 5, 5, 3, 4])