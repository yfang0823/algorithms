/*
  1，获取左、右子树根节点下标函数 done
  2，维护最大推性质函数
  3，建立最大堆
  4，堆排序
*/

var left = function(index) {
    // 1，转换为1开始的下标
    // 2，计算左孩子下标
    // 3，转换回0开始下标
    var i = index + 1
    var l = 2 * i
    return l - 1
}

var right = function(index) {
    // 1，转换为1开始的下标
    // 2，计算右孩子下标
    // 3，转换回0开始下标
    var i = index + 1
    var r = 2 * i + 1
    return r - 1
}

arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]

var maxHeapify = function(array, index) {
    // 调整下标为index的节点，使其满足最大堆性质
    var l = left(index)
    var r = right(index)
    var max = index
    var size = array.length
    if(l < size && array[l] > array[index]) {
        max = l
    }else if(r < size && array[r] > array[index]) {
        max = r
    }
    if(max != index) {
        let temp = array[index]
        array[index] = array[max]
        array[max] = temp
        maxHeapify(array, max)
    }
}
