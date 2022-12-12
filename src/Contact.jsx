import React, { useState } from "react";
import "./App.css";



function Contact() {

const[user,setUser] = useState({
  name:"",
  email:"",
  phone:"",
  message:"",

});

let name,value
const getUserData = (event) => {
name= event.target.name;
value= event.target.value;

setUser({...user, [name]:value})
}

const postData = async(e) =>{
  e.preventDefault()
  const{name,email,phone,message} = user;
  if(name&&email&&phone&&message){
    const res = await fetch("https://ujjawalwebservicesform-default-rtdb.firebaseio.com/ujjawalwebservicesform.json", {method:"POST", headers:{
    "Content-Type": "application/json",
  },
body: JSON.stringify({
  name,
  email,
  phone,
  message,
})
});
if(res){
  setUser({
    name:"",
  email:"",
  phone:"",
  message:"",
  })
  alert("Data Stored to Firebase Realtime Database");
}
  }
  else{alert("Please fill all the data")}
};

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">ContactUS</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form method="POST">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                 value={user.name}
                 onChange={getUserData}
                  placeholder="Enter Your Name"
                  autoComplete="off"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                 value={user.phone}
                 onChange={getUserData}
                  placeholder="Mobile Number"
                  autoComplete="off"
                  name="phone"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                 value={user.email}
                 onChange={getUserData}
                  placeholder="name@example.com"
                  autoComplete="off"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Your Message Here"
                  value={user.message}
                  onChange={getUserData}
                  autoComplete="off"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="col-auto">
    <button type="submit" onClick={postData} className="btn btn-primary mb-3">Submit</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
