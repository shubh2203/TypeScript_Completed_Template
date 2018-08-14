/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/



/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */

let car ={
    Model :'Audi',
    Year : '2018',
    Color : 'white'
}

/*let stringConcat = "<div style='background-color: #4CAF50'>" +
    "<h3>Model :"+car.Model +"</h3>" + "<h3>Year :"+car.Year +"</h3>"+
    "<h3>Color :"+car.Color +"</h3>"
    "</div>"
document.querySelector('#container').innerHTML =stringConcat;
*/


let templateStr = `<div style="background-color:purple">
                    <h3>Model : ${car.Model}</h3>
                    <h3>Year : ${car.Year}</h3>
                    <h3>Color : ${car.Color}</h3>                   
                    </div>`;
document.querySelector('#container').innerHTML = templateStr;
