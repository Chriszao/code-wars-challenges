String.prototype.toJadenCase = function () {
    var text = this.valueOf();
    var result = '';
    for (var index = 0; index < text.length; index += 1) {
        var currentPosition = text[index];
        var previousPosition = text[index - 1];
        if (previousPosition === ' ') {
            result = result.concat(currentPosition.toUpperCase());
            continue;
        }
        if (index === 0) {
            result = result.concat(currentPosition.toUpperCase());
            continue;
        }
        result = result.concat(currentPosition);
    }
    return result;
};
var test = "How can mirrors be real if our eyes aren't real";
console.log(test.toJadenCase());
