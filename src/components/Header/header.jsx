import {Link} from "react-router-dom";

function Header() {

    return (
        <nav>
            <Link to={"/"}>
                <h1 className={"select-none font-extra font-extrabold text-5xl p-4 text-btn-func"}>Super<span className={"text-primary"}>Calc</span></h1>
            </Link>
        </nav>
    )

}

export default Header;