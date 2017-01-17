// 定义我们的 log 函数
var log = function() {
    console.log.apply(console, arguments)
}

// ======
// 测试
// ======
var ensure = function(condition, message) {
    // 在条件不成立的时候, 输出 message
    if(!condition) {
        log('*** 测试失败:', message)
    }
}

var HashTable = function() {
    this.data = []
    this.size = 101
    this.data.length = this.size
}

HashTable.prototype.hash = function(s) {
    var sum = 0
    var weight = 1
    for (var i = 0; i < s.length; i++) {
        var c = s[i]
        sum += c.charCodeAt(0) * weight
        weight *= 10
    }
    return sum
}

HashTable.prototype.index = function(s) {
    var size = this.size
    var sum = this.hash(s)
    var index = sum % size
    return index
}

HashTable.prototype.set = function(key, value) {
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

HashTable.prototype.get = function(key, value) {
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

HashTable.prototype.has = function(key) {
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
