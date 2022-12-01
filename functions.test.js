const functions=require("./functions")

test("add 2 numbers",()=>{
    expect(functions.add(2,2)).toBe(4);
})