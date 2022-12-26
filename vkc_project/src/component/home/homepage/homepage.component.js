import LogoComponent from '../../logoandicons/logo.component';
import './homepage.css';
import { useState } from 'react';
import {FcGoogle} from 'react-icons/fc';
import NavBar from '../../navbar/Navbar';
import {BrowserRouter,Routes} from 'react-router-dom';
function HomePage()
{
    const[popupVisible,setpopupVisible]=useState("hidden");
    function showPopup()
    {
        setpopupVisible("visible");
    }
    function hidePopup()
    {
        setpopupVisible('hidden');
    }
    return(
        <div>
            <div className='rev mb-2'>
                <div>
                    <h1 className='glow'><a href="http://t.me/vkctrainings" className='t-telegram'>ClickHere to join Our Telegram Group For LatestUpdates</a></h1>
                </div>
                <div>
                     <button className='btn btn-danger top-button' onClick={()=>{showPopup()}}>Login/Signup</button>
                </div>
            </div>
           <div className='s-disp'>
           <LogoComponent/>
       </div>
       <div className="popup" style={{'visibility':popupVisible}}>
                    <div className="card">
                        <div className="card-header">
                            <span className="text-success">
                               LOGIN DETAILS
                            </span>
                            <input type='button' value='X' className="btn btn-link float-right" onClick={()=>{hidePopup()}}></input>
                            
                        </div>
                        <div className="card-body">
                            <label>UserName/Email:</label>
                            <input type='text' className="form-control" ></input>
                            <label>Password:</label>
                            <input type='password' className="form-control" ></input>
                            <div>
                            <button className='btn btn-primary m-2'>Login</button>
                            <h8>not regestered yet? then registerhere or login Using <FcGoogle style={{ width:"50px",height: "80px" }}/></h8>
                            </div>
                        </div>
                    </div>
          </div>
          <BrowserRouter>
          <NavBar/>
          </BrowserRouter>
        </div>
    )
}
export default HomePage;