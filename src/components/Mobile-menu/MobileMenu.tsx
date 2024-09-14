import navbarItems from "../../data/navbar.json";
import NavbarItem from '../Header/Navbar-item/NavbarItem';
import s from "./s.module.scss"
const MobileMenu = ({setOpen}: {setOpen: (open: boolean) => void}) => {
  return (
    <div className={s.menu}>
      <ul>
        {navbarItems.map((item, index) => (
          <NavbarItem
            key={index}
            name={item.name}
            link={item.link}
            isBig={false}
            setOpen={setOpen}
          />
        ))}
      </ul>
    </div>
  );
}

export default MobileMenu