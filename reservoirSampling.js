var s = [11, 22, 33, 44, 55, 66, 77, 88 ,99, 110]
var k = 5

var sampling = function(s, k) {
    var r = []
    for (var i = 0; i < k; i++) {
        r[i] = s[i]
    }
    for (var j = i; j < s.length; j++) {
        var num = Math.floor(Math.random() * (j + 1))
        console.log('random', num)
        if(num < k) {
            r[num] = s[j]
        }
    }
    return r
}
