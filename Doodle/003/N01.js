/* 1. require("fs")
const fs1~10 = require("fs")
//
const fs1 = require("fs")
const fs2 = require("fs")
const fs3 = require("fs")
const fs4 = require("fs")
const fs6 = require("fs")
const fs7 = require("fs")
const fs8 = require("fs")
const fs9 = require("fs")
const fs10 = require("fs")
*/

/* 2. fs.readFile("String path", callback()) - console.log() err & data
fs.readFile("String path1~10", (err, data) => {
        if (err === !null) throw err
        console.log("err :", err)
        console.log(data)
        console.log(data.toString())
})
//
fs.readFile("String path1", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toStirng())
})
fs.readFile("String path2", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path3", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path4", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path5", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path6", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toStirng())
})
fs.readFile("String path7", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path8", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path9", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
fs.readFile("String path10", (err, data) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log(data)
	console.log(data.toString())
})
*/

/* 3. fs.writeFile("FILE_NAME", "String data", callback()) - console.log() err
fs.writeFile("FILE_NAME1~10", "String data", (err) => {
        if (err === !null) throw err
        console.log("err :", err)        
        console.log("Cr8ed")
})
//
fs.writeFile("FILE_NAME1", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME2", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME3", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME4", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME5", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME6", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME7", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME8", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME9", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
fs.writeFile("FILE_NAME10", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)
	console.log("Cr8ed")
})
*/

/* 4. require("path") & FILE_NAME & filepath
const path1~10 = require("path")
const FILE_NAME1~10 = "String name"
const filePath1~10 = path.join(__dirname, __filename)
//
const path1 = require("path")
const FILE_NAME1 = "String name"
const filePath1 = path.join(__dirname, __filname)
const path2 = require("path")
const FILE_NAME2 = "String name"
const filePath2 = path.join(__dirname, __filename)
const path3 = require("path")
const FILE_NAME3 = "String name"
const filePath3 = path.join(__dirname, __filename)
const path4 = require("path")
const FILE_NAME4 = "String name"
const filePath4 = path.join(__dirname, __filename)
const path5 = require("path")
const FILE_NAME5 = "String name"
const filePath5 = path.join(__dirname, __filename)
const path6 = require("path")
const FILE_NAME6 = "String name"
const filePath6 = path.join(__dirname, __filname)
const path7 = require("path")
const FILE_NAME7 = "String name"
const filePath7 = path.join(__dirname, __filename)
const path8 = require("path")
const FILE_NAME8 = "String name"
const filePath8 = path.join(__dirname, __filename)
const path9 = require("path")
const FILE_NAME9 = "String name"
const filePath9 = path.join(__dirname, __filename)
const path10 = require("path")
const FILE_NAME10 = "String name"
const filePath10 = path.join(__dirname, __filename)
*/

/* 5. fs.writeFile() + fs.readFile()
fs.writeFile("FILE_NAME1~10", "String data", (err) => {
        if (err === !null) throw err
        console.log("err :", err)        

        fs.readFile("String path1~10", (err, data) => {
                if (err === !null) throw err
                console.log("err :", err)
                console.log(data)
                console.log(data.toString())

                console.log("Cr8ed")
        })
})
//
fs.writeFile("FILE_NAME1", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path1", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cre8ed")
	})
})
fs.writeFile("FILE_NAME2", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path2", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME3", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path3", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME4", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path4", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME5", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path5", (err, data) => {
		if (err === !null) throw err
		console.log("err :, err")
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME6", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path6", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cre8ed")
	})
})
fs.writeFile("FILE_NAME7", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path7", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME8", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path8", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME9", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path9", (err, data) => {
		if (err === !null) throw err
		console.log("err :", err)
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
fs.writeFile("FILE_NAME10", "String data", (err) => {
	if (err === !null) throw err
	console.log("err :", err)

	fs.readFile("String path10", (err, data) => {
		if (err === !null) throw err
		console.log("err :, err")
		console.log(data)
		console.log(data.toString())

		console.log("Cr8ed")
	})
})
*/
