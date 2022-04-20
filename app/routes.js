const express = require('express')
const router = express.Router()
const DB = require('../database/connection.js')

router.get("/", (req, res) => {
    DB.query(`SELECT * FROM blogs WHERE  status = 0 `, (err, blogpost) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('home.ejs', { blogpost, msg: "" })
        }
    })
})

router.get("/draft", (req, res) => {
    DB.query(`SELECT * FROM blogs WHERE  status = 1 `, (err, blogpost) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('home.ejs', { blogpost, msg: "" })
        }
    })
})

router.get("/draft/:id/:status", (req, res) => {
    const id = req.params.id
    const status = req.params.status
    if (status == 0) {
        DB.query(`UPDATE blogs SET STATUS= "1" WHERE  id = "${id}" `, (err, blogpost) => {
            if (err) {
                console.log(err)
            }
            else {
                DB.query(`SELECT * FROM blogs WHERE  status = 1 `, (err, blogpost) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.redirect('/')
                    }
                })
            }
        })
    } else {
        DB.query(`UPDATE blogs SET STATUS= "0" WHERE  id = "${id}" `, (err, blogpost) => {
            if (err) {
                console.log(err)
            }
            else {
                DB.query(`SELECT * FROM blogs WHERE  status = 1 `, (err, blogpost) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        res.redirect('/')
                    }
                })
            }
        })
    }
})

router.get("/post/new", (req, res) => {
    res.render('create.ejs', { error: '' })
})


router.post("/post/new", (req, res) => {
    const post = req.body
    if (post.title !== '' & post.description !== '') {
        if (post.status == 0) {
            DB.query(`INSERT INTO blogs (title,description,status) VALUES ('${post.title}','${post.description}',"0")`,
                (err, result) => {
                    if (err) {
                        console.log(err)
                        res.render('create.ejs', { error: "Please Fill All Fields Properlly !!" })
                    }
                    else {
                        res.redirect('/')
                    }
                })
        } else {
            DB.query(`INSERT INTO blogs (title,description,status) VALUES ('${post.title}','${post.description}',"1")`,
                (err, result) => {
                    if (err) {
                        console.log(err)
                        res.render('create.ejs', { error: "Please Fill All Fields Properlly !!" })
                    }
                    else {
                        res.redirect('/')
                    }
                })
        }
    } else {
        res.render('create.ejs', { error: "Please Fill All Fields ..." })
    }
})


router.get("/post/:id", (req, res) => {
    const id = req.params.id
    DB.query(`SELECT * FROM blogs WHERE id="${id}" LIMIT 1`, (err, blog) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('show.ejs', { blog })
        }
    })
})

router.get("/post/update/:id", (req, res) => {
    const id = req.params.id
    const post = req.body
    DB.query(`SELECT * FROM blogs WHERE id="${id}" LIMIT 1`, (err, blog) => {
        if (err) {
            console.log(err)
        }
        else {
            res.render('update.ejs', { blog, error: "" })
        }
    })
})

router.put("/post/update/:id", (req, res) => {
    const id = req.params.id
    const post = req.body
    if (post.title !== '' & post.description !== '') {
    DB.query(`UPDATE blogs SET title = '${post.title}', description = '${post.description}'
    WHERE id ="${id}"`,
        (err, result) => {
            if (err) {
                console.log(err)
                res.render('update.ejs', { error: "Post is not updated , PLZ try again" })
            }
            else {
                console.log("update successfully")
                res.redirect('/')
            }
        })
    } else {
        res.render('update.ejs', { error: "Please Fill All Fields ..." })
    }
})

router.get("/delete/:id", (req, res) => {
    const id = req.params.id
    DB.query(`DELETE FROM blogs WHERE id="${id}" LIMIT 1`, (err, blog) => {
        if (err) {
            console.log(err)
        }
        else {
            DB.query(`SELECT * FROM blogs WHERE  status = 0 `, (err, blogpost) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.render('home.ejs', { blogpost, msg: "Post Delete Successfully" })
                }
            })
        }
    })
})



module.exports = router