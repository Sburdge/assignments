const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');

app.use(bodyParser.json());

const bounty = [
    {
        firstName: 'Anakin',
        lastName: 'Skywalker',
        living: false,
        bountyAmount: 400,
        type: 'sith',
        id: '172c5c20-223e-11e8-9ec6-651b4281a618'
    },
    {
        firstName: 'Luke',
        lastName: 'Skywalker',
        living: true,
        bountyAmount: 4400,
        type: 'jedi',
        id: '172c5c20-223e-11e8-9ec6-6525321a618'
    },
    {
        firstName: 'C3PO',
        lastName: '',
        living: true,
        bountyAmount: 4890,
        type: 'robot',
        id: '172c5c20-223e-1548-9ec6-6345221a618'
    }
]


app.get('/bounty', (req, res) => {
    if(req.query.type){
        res.send(bounty.filter(person => person.type === req.query.type));
    }
    res.send(bounty);
})

app.get('/bounty/:id', (req, res) => {
    const foundBounty = bounty.find(person => person.id === req.params.id);
    res.send(foundBounty);
})


app.post('/bounty', (req, res) => {
    req.body.id = uuid();
    bounty.push(req.body);
    return res.send(req.body);
})


app.put('/bounty/:id', (req, res) => {
    const foundBounty = bounty.find(person => person.id === req.params.id);
    for(let key in req.body){
        foundBounty[key] = req.body[key];
    }
    return res.send(foundBounty);
})


app.delete('/bounty/:id', (req, res) => {
    const foundBounty = bounty.find(person => person.id === req.params.id);
    bounty.splice(bounty.indexOf(foundBounty), 1);
    return res.send(bounty);
})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
})
