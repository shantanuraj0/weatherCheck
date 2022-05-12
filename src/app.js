//firing express server
const express = require('express');
const { template } = require('handlebars/runtime');
const path = require('path');

const hbs = require('hbs');
const { partials } = require('handlebars');
const app = express(); //with help of this we can acess all functionalities of application
const port = process.env.PORT || 8000; //added process... part for handling hosting


//public static path
const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname ,"../templates/views");
const partials_path = path.join(__dirname ,"../templates/partials");

//setting the view engine
app.set("view engine","hbs");

//changing the views path
//by default it is views folder
app.set('views' ,template_path);

//register the partials
hbs.registerPartials(partials_path);

app.use(express.static(static_path))






//routing

//home page
app.get('' , (req ,res)=>{
    res.render("index")
})

//about page
app.get('/about' , (req ,res)=>{
    res.render("about")
})

//weather page
app.get('/weather' , (req ,res)=>{
    res.render("weather")
})
 
//any other page other than above will lead to 404 page
app.get('*' , (req ,res)=>{
    res.render("404error" ,{
        errorMsg : "Oops! Page Not Found"
    })
})



app.listen(port , () => {
    console.log('Server is running on the port: ', port );
})
