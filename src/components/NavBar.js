import { Link } from "react-router-dom";

export default function NavBar(){

    return(
        <nav>
            <div className='navLeft'>
                <Link to='/'>
                    <h1>GA Club</h1>
                </Link>
            </div>
            <div className='navRight'>
                <Link to='/cart'>
                    <h1>Cart</h1>
                </Link>
            </div>
        </nav>
    );
}