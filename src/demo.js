//import {iphone} from "./phone.js"

function square(num)
{
    return num * num;
}

class Abc {
    getData(){

        console.log("this value", this)

        setTimeout(()=>{
            console.log("this value", this)
        },0)
    }
}

var obj1 = new Abc()