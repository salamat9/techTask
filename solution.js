

function find(nums) {
    let result = [];
    let left = 0, right = nums.length - 1;

    if (nums[0] !== 1) result.push(1)

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] - nums[mid - 1] === 2)
            result.push(nums[mid] - 1)
        else if (nums[mid] - nums[mid - 1] === 3) {
            result.push(nums[mid] - 2, nums[mid] - 1)
            break
        }

        if (nums[mid] - mid === 3) right = mid - 1
        else if (nums[mid] - mid === 1) left = mid + 1
        else if (nums[mid] - mid === 2) left = mid + 1
    }

    // В некоторых тест кейсах, я использовал второй бинарный поиск
    // для того чтобы искать первое число, которая оставалась слева, для этого я обнулил перемменную left,
    // а переменная right становилась меньше второго числа который ищем

    left = 0;

    while (left <= right && result.length < 2) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] - nums[mid - 1] === 2)
            result.push(nums[mid] - 1)

        if (nums[mid] - mid === 3) right = mid - 1
        else if (nums[mid] - mid === 2) right = mid - 1
        else if (nums[mid] - mid === 2) left = mid + 1
        else if (nums[mid] - mid === 1) left = mid + 1
    }

    return result
}

let nums1 = [1, 2, 4, 5, 6, 8, 9, 10] // 3, 7
let nums2 = [1, 3, 5] // 2, 4
let nums3 = [1, 2, 3, 5, 6, 7, 8, 10] // 4, 9
let nums4 = [1, 2, 5, 6, 7, 8, 9, 10] // 3, 4
let nums5 = [1, 3, 5, 6, 7, 8, 9, 10] // 2, 4
let nums6 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20] // 4, 16
let nums7 = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20] // 1, 16
let nums8 = [2, 3, 5] // 1, 4
let nums9 = [2, 3, 4, 5, 6, 8, 9, 10] // 1, 7

console.log(`Missing numbers are: 3, 7. output = ${find(nums1)}`)
console.log(`Missing numbers are: 2, 4. output = ${find(nums2)}`)
console.log(`Missing numbers are: 4, 9. output = ${find(nums3)}`)
console.log(`Missing numbers are: 3, 4. output = ${find(nums4)}`)
console.log(`Missing numbers are: 2, 4. output = ${find(nums5)}`)
console.log(`Missing numbers are: 4, 16. output = ${find(nums6)}`)
console.log(`Missing numbers are: 1, 16. output = ${find(nums7)}`)
console.log(`Missing numbers are: 1, 4. output = ${find(nums8)}`)
console.log(`Missing numbers are: 1, 7. output = ${find(nums9)}`)
