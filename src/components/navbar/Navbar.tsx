import Avatar from "../Avatar";
import Container from "../Container";
import Logo from "../Logo";
import MenuList from "./MenuList";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <Logo />
            <MenuList />
          </div>
          <div className="flex flex-row items-center gap-10">
            <SearchBar />
            <Avatar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
