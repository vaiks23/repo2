import { Link } from "react-router-dom";


const Menu = () : JSX.Element => {
    return (
        <ul className="nav">
            <li> < Link to ="/Find" > Find a transaction </Link></li>
            <li> < Link to ="/Add" > New transaction </Link></li>
            
        </ul>
    );
}

export default Menu;
