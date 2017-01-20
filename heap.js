/*
  0，定义heap对象
  1，获取左、右子树根节点下标函数 done
  2，维护最大推性质函数
  3，建立最大堆
  4，堆排序
*/
var heap = function(array) {
    this.array = array
    this.size = array.length
}

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

var swap = function(array, i, j) {
    var temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

// arr = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1]
// var maxHeap = new heap(arr)

var maxHeapify = function(maxHeap, index) {
    // 调整下标为index的节点，使其满足最大堆性质
    var arr = maxHeap.array
    var l = left(index)
    var r = right(index)
    var max = index
    var size = maxHeap.size
    if(l < size && arr[l] > arr[max]) {
        max = l
    }
    if(r < size && arr[r] > arr[max]) {
        max = r
    }
    if(max != index) {
        swap(arr, index, max)
        maxHeap.array = arr
        maxHeapify(maxHeap, max)
    }
}

// arr = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7]
// maxHeap = new heap(arr)

var buildMaxHeap = function(array) {
    // 建立最大堆
    var maxHeap = new heap(array)
    var size = array.length
    var begin = Math.floor(size / 2)
    for (var i = begin - 1; i >= 0; i--) {
        maxHeapify(maxHeap, i)
    }
    return maxHeap
}

var heapSort = function(array) {
    // 堆排序
    var maxHeap = buildMaxHeap(array)
    var length = maxHeap.size
    for (var i = 0; i < length - 1; i++) {
        swap(maxHeap.array, 0, maxHeap.size - 1)
        maxHeap.size--
        maxHeapify(maxHeap, 0)
    }
    return maxHeap.array
}
