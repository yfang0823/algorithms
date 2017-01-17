// 2017/01/04
//
// ============
// 作业 19 (本次作业会再更新)
//
//
// 注意, 提示在文件最末尾
// ============
//


// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}


// ======
// 测试
// ======
//
// 定义我们用于测试的函数
// ensure 接受两个参数
// condition 是 bool, 如果为 false, 则输出 message
// 否则, 不做任何处理
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}


// 作业 0
//
// 定义一个 HashTable 类
// 它有一个 data 属性(类型是 array)来存储数据
// 有一个 size 属性来指定 data 的长度, 令它为 101
var HashTable = function() {
    this.data = []
    this.size = 101
    this.data.length = this.size
}

// 作业 1
//
// 给 HashTable 类加上一个 hash 函数
HashTable.prototype.hash = function(s) {
    /*
    s 是一个 string
    通过 s 来返回一个数字
    这个算法需要参考上课代码和讲解
    返回一个 数字
    */
    var sum = 0
    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        sum += c.charCodeAt(0)
    }
    return sum
}


// 作业 2
//
// 给 HashTable 类加上一个 index 函数
HashTable.prototype.index = function(s) {
    /*
    s 是一个 string
    本函数使用 hash(s) 函数来得到一个数字
    然后用这个数字对 HashTable 的 size 属性取余数来得到一个下标数字
    返回一个 数字
    */
    var size = this.size
    var sum = this.hash(s)
    var index = sum % size
    return index
}


// 作业 3
//
// 给 HashTable 类加上一个 set 函数
HashTable.prototype.set = function(key, value) {
    /*
    key 是一个 string
    value 是一个任意类型的数据
    把 key 代表的 value 存入 data 中
    下标通过 index 函数获取

    注意, 不同的 key 可能拥有相同的下标, 所以设置之前要判断这个下标是否存有数据
    如果没有数据, 就把 [key, value] 放入一个数组中存入 data
    如果已有数据, 分两种情况
        1, 已经有这个 key 存的数据了, 修改存储的 value 的值
        2, 这个 key 第一次存数据, 把 [key, value] push 到存储的数组中

    注意, 必须存储 [key, value] 这个整体
    否则你就无法得知存储的数据到底是哪个 key 存进来的

    本题不理解就群里讨论吧
    */
    var index = this.index(key)
    var data = this.data
    var cell = [key, value]
    var array = data[index]
    if(array == undefined) {
        array = []
        array.push(cell)
    }else {
        var found = false
        for (var i = 0; i < array.length; i++) {
            if(array[i][0] == key) {
                array[i][1] = value
                found = true
                break
            }
        }
        if(!found) {
            array.push(cell)
        }
    }
    data[index] = array
    return index
}


// 作业 4
//
// 给 HashTable 类加上一个 get 函数
HashTable.prototype.get = function(key, value) {
    /*
    key 是一个 string
    value 是一个任意类型的数据

    在 data 中以 key 查找存储的数据并返回
    如果没找到, 就返回 value
    */
    var index = this.index(key)
    var data = this.data
    if(data[index] != undefined) {
        var array = data[index]
        for (var i = 0; i < array.length; i++) {
            if(array[i][0] == key) {
                return array[i][1]
            }
        }
    }
    return value
}


// 作业 5
//
// 给 HashTable 类加上一个 has 函数
HashTable.prototype.has = function(key) {
    /*
    key 是一个 string

    在 data 中检查是否存储了 key 并以布尔值返回结果
    */
    var index = this.index(key)
    var data = this.data
    if(data[index] != undefined) {
        var array = data[index]
        for (var i = 0; i < array.length; i++) {
            if(array[i][0] == key) {
                return true
            }
        }
    }
    return false
}
