import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <nav>
            <div className='navLeft'>
                <Link to='/sneakers/1'><h1>GA Club</h1></Link>
            </div>
            <div className='navRight'>
                <h2>Cart</h2>
            </div>
        </nav>
    );
}