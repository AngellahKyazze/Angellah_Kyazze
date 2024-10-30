const express =require('express');
const app = express();
const port =3002;


//GET
app.get('/',(req,res)=>{
    res.send('ANGELLAH KYAZZE');
});

app.get('/greetings',(request,response)=>{
    return response.send({msg :"Hello ANGELLAH KYAZZE"});
});

app.listen(port,()=>{

    console.log('Example app listening at http://localhost:${port}')
});