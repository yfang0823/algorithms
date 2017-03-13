var array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var node = function(value) {
    this.value = value
    this.lChild = null
    this.rChild = null
}

var makeTree = function(array) {
    var length = array.length
    if(length < 1){
        return null
    }
    var mid = Math.floor(length / 2)
    var left = array.slice(0, mid - 1)
    var right = array.slice(mid + 1, length - 1)
    var root = new node(array[mid])
    root.lChild = makeTree(left)
    root.rChild = makeTree(right)
    return root
}
