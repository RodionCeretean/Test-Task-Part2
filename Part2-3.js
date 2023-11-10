// 3. Написать функцию которая принимает в качестве аргумента массив чисел и возвращает новый массив с количеством повторений первоначального массива
// {число: кол во повторений}
//
// Примеры:
//
//     Входной массив: [1, 3, 2, 2, 4, 3, 5, 6, 5] Выходной массив: [{1:1}, {3: 2}, {2:2}, {4:1},{5:2},{6:1}]

function counter(array) {
    const set = Array.from(new Set(array))
    const result = []
    set.forEach(item => {
        let count = 0
        array.forEach(num => {
            if (item === num) count++
        })
        result.push({[item]: count})
    })
    console.log(result)
    return result
}

counter([1, 3, 2, 2, 4, 3, 5, 6, 5])