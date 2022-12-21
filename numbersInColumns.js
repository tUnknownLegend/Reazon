// https://rubaxa.github.io/playground/#printnumbers

function printNumbers(max, cols) {
    let result = [];
    const rows = Math.ceil(max / cols);
    let r, c, num;

    for (r = 0; r < rows; r++) {
        row = [];
        for (c = 0; c < cols; c++) {
            num = r + (c * rows);
            if (num < max) {
                row.push(num);
            }
        }

        result.push(row.join(' '));
    }

    return result.join('\n');
};