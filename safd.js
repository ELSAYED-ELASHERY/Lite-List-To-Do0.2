function shortestString(strings) {
    if (strings.length === 0) return null;
    var shortest = strings[0];
    for (var i = 0; i < strings.length; i++) {
        if (strings[i].length < shortest.length) {
            shortest = strings[i];
        }
    }
    return shortest;
}

// Example
var data = ["code", "backend", "ai", "circle"];
console.log(shortestString(data));