import LogoComponent from '../../logoandicons/logo.component';
import './homepage.css';
function HomePage()
{
    return(
        <div>
            <div className='rev mb-2'>
                <div>
                    <h1 className='glow'><a href="http://t.me/vkctrainings">ClickHere to join Our Telegram Group For LatestUpdates</a></h1>
                </div>
                <div>
                     <button className='btn btn-danger top-button'>LOGIN</button>
                </div>
           </div>
       <LogoComponent/>
        </div>
    )
}
export default HomePage;