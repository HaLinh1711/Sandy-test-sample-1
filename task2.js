function printInTable(arr) {
    //find size of matrix
    var numCols = Math.sqrt(arr.length);


    //function to return max length of each column
    function maxLen(col) {
        var max = 0;
        for (var i = 0; i < numCols; i += 1) {
            if (col[i].length > max) {
                max = col[i].length;
            }
        }
        return max;
    }

    //find max length of each column
    var maxLengths = []; // 1. create array have number of numCols
    for (var i = 0; i < numCols; i += 1) {
        var column = [];
        for (var j = 0; j < numCols; j += 1) {
            column.push(arr[j*numCols + i]); // 2. push each element in column to col array
        }
        maxLengths[i] = maxLen(column);
    }

    //create border line
    border = "+";
    for (var i = 0; i < numCols; i += 1) {
        border += "-".repeat(maxLengths[i] + 2) + "+";
    }

    //print the matrix
    for (var i = 0; i < numCols; i += 1) {
        var row = "";
        console.log(border);
        for (var j = 0; j < numCols; j += 1) {
            row += "+ " + arr[i*numCols + j] + " ".repeat(maxLengths[j] - arr[i*numCols + j].length +1);
        }
        row += "+";
        console.log(row);
    }

    //print the last border line
    console.log(border);
}

const test = ["1", "2222", "32", "411", "5", "61", "712", "8333", "95", "121212", "111", "1234", "555", "6", "7777777", "888"];
printInTable(test);