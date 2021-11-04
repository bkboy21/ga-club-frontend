import { Link } from "react-router-dom";

export default function Index(props){
    return(
        <div>
            <div className='index'>
                <h1>Index</h1>

                <Link to='/sneakers'>
                    <h3>Sneakers List / Filter Page</h3>
                </Link>
            </div>
        </div>
    );
} 