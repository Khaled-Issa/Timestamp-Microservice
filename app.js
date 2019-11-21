var express = require('express');
var moment= require ('moment');

var app=express();

app.get('/:date', function(req,res){
    var date=req.params.date;

    if(!isNaN(date)){
        res.json({
            unix: new Date(parseInt(date)).getTime(),
            utc: new Date(parseInt(date)).toUTCString()
        });
    }
    
    else if(moment.utc(date, 'YYYY-M-D',true).isValid()){
        res.json({
            unix: new Date(date).getTime(),
            utc: new Date(date).toUTCString()
        });
    }

    else{
        res.json({
            err: 'Invalid Date'
        });
    }
    
});

app.get('/',function(req, res){
    res.json({
        unix:new Date().getTime(),
        utc: new Date().toUTCString()
    })
});






app.listen(3000, function(){
    console.log("working");
});











/*app.get('/dateValue/:dateVal',function(req,res,next){
    var dateVal = req.param.dateVal;

    var dateFormat = {
        year:'numeric',
        month:'long',
        day:'numeric'
    };

    if(isNaN(dateVal)){
        var naturalDate = new Date (dateVal);
        naturalDate=naturalDate.toLocaleDateString('en-us', dateFormat);
        var unixDate = new Date (dateVal).getTime/1000;
    }
    else{
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000);
        naturalDate=naturalDate.toLocaleDateString('en-us', dateFormat);
    }

    res.json({unix: unixDate, natural: naturalDate});
});*/