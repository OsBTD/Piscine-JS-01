const escapeStr = "'/\"\\`";
const arr = [4, '2'];
const obj = {
str : "hello",
num : 48,
bool : true, 
undef : undefined, 
};


const nested = {
arr : [4, undefined, '2'],
obj : {
    str : "this is a string",
    num : 50,
    bool : true,
},
};
Object.freeze(obj);
Object.freeze(arr);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
