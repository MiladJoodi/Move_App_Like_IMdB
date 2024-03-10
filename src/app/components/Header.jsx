import MenuItem from "./MenuItem";
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'

const Header = () => {
    return (
        <header>
            <div className="">
                <MenuItem title="home" address="/" Icon={AiFillHome} />
                <MenuItem title="about" address="/" Icon={BsFillInfoCircleFill} />
            </div>

            <div className="">

            </div>
        </header>
    );
}

export default Header;