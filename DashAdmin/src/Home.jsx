import React from "react";
import { BsPersonFill, BsTruck, BsFileEarmarkTextFill, BsSpeedometer2, BsEnvelopeFill, BsGearFill  } from 'react-icons/bs'

function Home () {
  return(
   <main className="main-container">
     <div className="main-title">
      <h3> Dashbord </h3>
     </div>


     <div className="main-cards">
     <div className="card">
     <div className="card-inner">
        <h3>  Dashbord</h3>
        <BsSpeedometer2  className="card_icon"/>


     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Transporter</h3>
        <BsTruck  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>


     <div className="card">
     <div className="card-inner">
        <h3>  User</h3>
        <BsPersonFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Clients pro request</h3>
        <BsEnvelopeFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>


     <div className="card">
     <div className="card-inner">
        <h3>  Trans pro request </h3>
        <BsEnvelopeFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3>  Clients Reports</h3>
        <BsFileEarmarkTextFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>
     

     <div className="card">
     <div className="card-inner">
        <h3>  Trans Reports</h3>
        <BsFileEarmarkTextFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>

     <div className="card">
     <div className="card-inner">
        <h3> Settings</h3>
        <BsGearFill  className="card_icon"/>
     </div>
     <h1>300</h1>
     </div>
    
    
      
     </div>


   </main>
  )
}

export default Home;