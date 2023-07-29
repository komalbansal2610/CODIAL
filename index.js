const express=require('express');
const app=express();
const port=8000;

app.use('/',require('./routes'));
app.set('viewengine','ejs');
app.set('views','./views');

app.listen(port,function(error)
{
    if(error)
    {
        console.log(`Error in running the server: ${error}`);
    }
    console.log(`server is running on port : ${port}`);
})