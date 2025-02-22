function split(str, sp) {
    let res = [];
    let temp = "";
    if (sp === "") {
        for (let i = 0; i < str.length; i++) {
            res.push(str[i]);
        }
        return res;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === sp[0]) {
            let sub = str.slice(i, i + sp.length);
            if (sub === sp) {
                res.push(temp);
                temp = "";
                i += sp.length - 1;
            } else {
                temp += str[i];
            }
        } else {
            temp += str[i];
        }
    }

    res.push(temp);

    return res;
}
console.log(split("85 555 55 555 9", " "))

function join(arr, sep) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i];
      if (i < arr.length - 1) {
        str += sep;
      }
    }

    return str;
}
