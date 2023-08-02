import { longestWord, wordLengths, shortestWord } from './word-game.js';
import { totalPhoneBill } from './totalPhoneBill.js';
import { enoughAirtime } from './enough-airtime.js';
import express from 'express';

const app = express();

// declareconfigurable port number
const PORT = process.env.PORT || 4009;

//
app.use(express.json());

app.use(express.static('public'));


//game secton
app.get('/api/word_game', function (req, res) {
    const sentence = req.query.sentence;

    if (!sentence) {
        return res.json({
            error: 'No sentence entered...'
        })
    }


    res.json({
        longestWord: `${longestWord(sentence)}`,
        shortestWord: `${shortestWord(sentence)}`,
        wordLengths: `${wordLengths(sentence)}`,
    })
});

// the total phone bill


const types = {
    "sms": '',
    "call": ''
}

const bills = {
    bill : 'call, sms, sms, call',
    usage : 'call, sms'
}

//show the prices
app.get('/api/phonebill/prices', function (req, res) {
    const type = req.query.type;
    const price = req.query.price;

    res.json({
        "type": type,
        "price": price
    })
})



app.post('/api/phonebill/price', function (req, res) {

    // add and entry to our types map
    const type = req.body.type;
    types[type] = req.body.types

    res.json({
        status: 'success',
        message: `Added a bill for ${type}`
    });

});

app.post('/api/phonebill/total', function(req, res){
    const bill = req.body.bill;
    bills[bill] = req.body.bills


    res.json({
        status: 'success',
        message: `Added a bill for ${bill}`
    });
    
})

app.get('/api/phonebill/total', function(req, res){
    const bill = req.query.bill;    

    res.json({
        bill: totalPhoneBill(bill)
    })
})


app.post('/api/enough', function(req, res){
    const usage = req.body.usage;
    const available = req.body.available;

    res.json({
        status: 'success',
        message: `Added a ${usage} for ${available}`
    });
    
})

app.get('/api/enough', function(req, res){
    const usage = req.query.usage;
    const available = req.query.available;

    res.json({
        result : enoughAirtime(usage, available)
    });
    
})


// run the server
app.listen(PORT, function () {
    console.log(`App running on ${PORT}`)
});