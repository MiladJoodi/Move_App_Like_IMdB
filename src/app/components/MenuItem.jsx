import Link from "next/link";

const MenuItem = ({ title, address, Icon }) => {
    return (
        <Link href={address}>
            <Icon />
            <p className="uppercase hidden sm:inline">{title}</p>
        </Link>
    );
}

export default MenuItem;