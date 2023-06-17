const sql = require('sqlite3').verbose();
const express = require('express');
const app = express();

const port = 5000;



const db = new sql.Database('./database.db',(error) =>{
    if(error){console.error('connection failed')}
    else{console.log('sucessful connection')}
});

app.get('/users', (req, res) => {
    db.all('SELECT * FROM users',(error, data) => {
        if(error){
            console.error('failed to retrieve data from users table');
            res.status(500).send('server error');
        }
        else{
            res.json(data);
        }
    });
});

app.get('/users/picture/:id', (req, res) => {
    const id = req.params.id;
    const path = __dirname + `/profilePic/${id}_id.png`;
    res.sendFile(path);
});


app.get('/users/limit=:lim', (req, res) => {
    const lim = parseInt(req.params.lim);
    db.all('SELECT * FROM users LIMIT ?',lim,(error, data) => {
        if(error){
            console.error('failed to retrieve data from users table');
            res.status(500).send('server error');
        }
        else{
            res.json(data);
        }
    });
});

app.get('/users/search/:text', (req, res) => {
    const text = req.params.text.toLowerCase();
    db.all('SELECT * FROM users',(error, data) => {
        if(error){
            console.error('failed to retrieve data from users table');
            res.status(500).send('server error');
        }
        else{
            res.json(data.filter((data) => {
                if(data.user_tag.toLowerCase().includes(text) ||
                data.first_name.toLowerCase().includes(text) ||
                data.last_name.toLowerCase().includes(text)){
                    return data;
                }
            }))
        }
    });
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    db.all('SELECT * FROM users WHERE id = ?', id,(error, data) => {
        if(error){
            console.error('failed to retrieve data from users table');
            res.status(500).send('server error');
        }
        else{
            res.json(data[0]);
        }
    });
});




app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
