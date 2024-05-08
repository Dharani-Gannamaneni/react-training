import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { getReport } from './manager';
// import { getReport } from './employer';

//name aliasing
// import { getReport as managerReport} from './manager';
// import { getReport as employerReport} from './employer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

var user = {
  id:"xyz",
  phone:1234567,
  //phone:9876542
}
user.name = "abc"

console.log("user",user);

var user2 = user;
console.log("user2",user2);

var user3 = {...user} //spread operator
console.log("user3",user3);

var f1 =['a','b','c']
var f2 =['x','y','z']

var fs=[...f1,...f2]
console.log("fs",fs);


// var phone = user.phone //copying value of phone property into phone variable
// console.log("phone",phone);
// var {phone,id} =user; // destryctoring,
// console.log("phone",phone);






//what is deepcopy and shallow copy?



