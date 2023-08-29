/* 1. If문
if (condition2n-1) {}
if (boolean true|false) {}
*/


/* 2. If..else문
if (condition2n-1) {} else {}
if (boolean true|false) {} else {}
*/


/* 3. For문
for (let i = 0~9; i < arr.length; i++) {
        const elem = arr[i]
        console.log(arr[i])
}
*/


/* 4. For..of문
for (const iterator1~10 of object) {
        console.log(iterator1~10)
}
*/


/* 5. Function
function name1~10([...params]) {
        // this
        // return this|undefined
}
*/


/* 6. Function & Exec
const a1~j10 = function () {
        // return undefined
}
a1~j10()
*/


/* 7. A.Function & Exec
const a11~j101 = () => {
        // return undefined
}
a11~j101()
*/


/* 8. require("fs")
const fs1~10 = require("fs")
*/


/* 9. fs.readFile("String path", callback()) - console.log() err & data
fs.readFile("String path1~10", (err, data) => {
        if (err) throw err
        console.log("err :", err)
        console.log(data)
        console.log(data.toString())
})


/* 10. fs.writeFile("FILE_NAME", "String data", callback()) - console.log() err
fs.writeFile("FILE_NAME1~10", "String data", (err) => {
        if (err) throw err
        console.log("Cr8ed")
})


/* 11. require("path") & FILE_NAME & filepath
const path1~10 = require("path")
const FILE_NAME1~10 = "String"
const filepath1~10 = path.join(__dirname, __filename)
*/


/* 12. fs.writeFile() + fs.readFile()
fs.writeFile("FILE_NAME1~10", "String data", (err) => {
        if (err) throw err

        fs.readFile("String path1~10", (err, data) => {
                if (err) throw err
                console.log("err :", err)
                console.log(data)
                console.log(data.toString())

                console.log("Cr8ed")
        })
})
*/
