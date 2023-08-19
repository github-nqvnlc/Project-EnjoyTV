import Avatar from "../Avatar";
import Container from "../Container";
import Logo from "../Logo";
import MenuList from "./MenuList";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-screen z-50 bg-[#0f172a]">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-10">
            <Logo />
            <MenuList />
          </div>
          <div className="flex flex-row items-center justify-end gap-10">
            <SearchBar />
            <Avatar />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
