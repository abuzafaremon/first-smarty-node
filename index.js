const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from my personal smarty Pant!!')
});
const users = [
  { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01788888888' },
  { id: 2, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01788888888' },
  { id: 3, name: 'Shabnoor', email: 'shabnoor@gmail.com', phone: '01788888888' },
  { id: 4, name: 'Suchona', email: 'suchona@gmail.com', phone: '01788888888' },
  { id: 5, name: 'Shokhi', email: 'shokhi@gmail.com', phone: '01788888888' },
  { id: 6, name: 'Bobita', email: 'bobita@gmail.com', phone: '01788888888' },
  { id: 7, name: 'Kobita', email: 'kobita@gmail.com', phone: '01788888888' },
]

// app.get('/users',(req,res)=>{
//   res.send(users);
// })

app.get('/users', (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(matched);
  }
  else{
    res.send(users);
  }
});
app.get('/user/:id', (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find(u => u.id == id);
  res.send(user);
});

app.post('/user', (req, res) => {
  console.log('request', req.body);
  const user = req.body;
  user.id = user.length + 1;
  users.push(user);
  res.send(user);
})

app.get('/fruits', (req, res) => {
  res.send(['mango', 'apple', 'oranges', 'banana']);
})

app.listen(port, () => {
  console.log('Listening to port', port);
})