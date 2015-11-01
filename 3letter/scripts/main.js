function combinations(current_string, actual_string, seen) {
    var result = [];
    if (current_string.length === actual_string.length) {
        return [current_string];
    }
    actual_string.forEach(function(currentChar, index) {
        if (seen.indexOf(index) === -1) {
            result = [].concat.apply(result, combinations(current_string
                + currentChar, actual_string, seen.concat(index)));
        }
    });
    return result;
}

console.log(combinations("", "ABC".split(""), []));