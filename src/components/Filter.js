// import { useRef, UseState } from "react"
import '../pages/css/sneakers.scss'

export default function Filter() {
    return (
        <>
            <div className='FilterBrand'>
                <h4>Shop by: Brand</h4>
                <button>Adidas</button> <br />
                <button>Nike</button> <br />
                <button>Air Jordan</button> <br />
                <button>Puma</button> <br />
                <button>Reebok</button> <br />
            </div >
            <div className='FilterPrice'>
                <h4>Shop by: Price</h4>
               $0<input 
               type="range"
               min='$0'
               max='$1000'
               />$1000

            </div>
            <div className='FilterGender'>
                <h4>Shop by: Gender</h4>
                <button>Male</button> <br />
                <button>Female</button> <br />
            </div>

            <div className='FilterColor'>
                <h4>Shop by: Color</h4>
                <button>Red</button> <br />
                <button>Blue</button> <br />
                <button>White</button> <br />
                <button>Black</button> <br /> 
                <button>Grey</button> <br />  
                <button>Yellow</button> <br />
                <button>Pink</button> <br />
                <button>Multi-Color</button> <br />

            </div>

        
        </>
    )
    // const [sneaks, setSneaks] = useRef([]);
    // const [map, ]

    // const filterSneakers = (e, filterType, filterCondition) => 
    // let filter = useRef([...StateVar]);
}
