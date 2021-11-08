import { Link } from "react-router-dom";
import './css/index.scss'


export default function Index(props) {
    return (
        <div>
            <div className='index'>
                <h1>Home/Index</h1>
                <Link to='/sneakers'>
                    <h3>Sneakers List / Filter Page</h3>
                </Link>
            </div>
            <div className="img_sneakers">
                <img src='https://image.goat.com/crop/3000/attachments/micropost_pictures/images/014/476/200/original/temp1536163748.jpeg' alt='sneakers' width='1100px' height='800px' />
            </div>

            <div className="shop_mens">
                <Link to='/sneakers'><h2>Men's Sneakers</h2>
                </Link>
                <img src='https://image.goat.com/crop/3000/attachments/micropost_pictures/images/008/102/013/original/919534CD-FDE9-48BE-A858-4FDFE575BD1B.jpeg' alt='mens_sneakers' width='400px' height='450px' />
            </div>

            <div className="shop_wmns">
                <h2>Women's Sneakers</h2>
                <img src='https://i.pinimg.com/564x/62/a5/d0/62a5d0c77df80b1262287768f20ed731.jpg' alt='womens_sneakers' width='400px' height='450px' />
            </div>

            <div className="shop_kids">
                <h2>Kid's Sneakers</h2>
                <img src='https://justfreshkicks.com/wp-content/uploads/2016/08/14063912_10154379115782978_2847083746988070319_n.jpg'
                alt='kids_sneakers' width='400px' height='450px'/>
            </div>
        </div>

    );
}