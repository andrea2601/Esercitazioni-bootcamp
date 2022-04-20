import logo from './logo.png';
export const Header = () => {
  return (
    <header>
      <img src={logo} alt="React-ecommerce" />
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    </header>
  );
};
