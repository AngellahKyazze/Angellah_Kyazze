const express =require('express');
//service import
const my_business_logic = require('./service/my_business_logic');

const app = express();
const port = 3004;
app.use(express.json());

//GET
app.get('/',(req,res)=>{
    res.send('ANGELLAH KYAZZE');
});

app.get('/greetings',(request,response)=>{
    return response.send({msg :"Hello ANGELLAH KYAZZE"});
});
//friend list
let friend = [
    {"id":1,"name":"Angellah"},
    {"id":2,"name":"Mary"},
    {"id":3,"name":"Alvyn"},
    {"id":4,"name":"Deborah"},
    {"id":5,"name":"Mark"}
];
app.get('/list-of-friend',(request,response)=>{
    return response.send(friend);
});
//class list
let classmate = [
    {"id" :1,"accessno":"b28340","name":"KYAZZE"},
    {"id" :2,"accessno":"b28341","name":"BOBREEN"},
    {"id" :3,"accessno":"b28342","name":"ANGELLAH"},
    {"id" :4,"accessno":"b28343","name":"NAMAKULA"},
    {"id" :5,"accessno":"b28344","name":"MUYOBO"},
    {"id" :6,"accessno":"b28345","name":"KIRABO"},
    {"id" :7,"accessno":"b28346","name":"BENJAMIN"},
    {"id" :8,"accessno":"b28347","name":"EMOJONG"},
    {"id" :9,"accessno":"b28348","name":"MARY"},
    {"id" :10,"accessno":"b28349","name":"FLORENCE"}
];
app.get('/class-lists',(request,response)=>{
    return response.send(classmate);
});
app.get('/class-lists-by-id/:id',(request,response)=>{
    console.log("Logging request params",request.params);
    console.log("Use value from front end",request.params.id);

    //forloop
    for (i = 1;i< 5;i++)
        
    
    console.log(classmate[i]);
    return response.send("Sending nothing back");
});

//POST
app.post('/sign-up',(request,response)=>{
    console.log("Logging request params",request.body)
    return response.status(200).send("Heey we are using a post method")
});

//DELETE
app.delete('/delete',(request,response)=>{
    console.log("Logging request for body to delete",request.body)
    return response.status(200).send("Heey we are using a delete method")
});

app.get('/get-all-the-students',(request,response)=>{
    return response.status(200).send(my_business_logic.getAllStudents)
})

app.listen(port,()=>{

    console.log('Example app listening at http://localhost:${port}')
});

