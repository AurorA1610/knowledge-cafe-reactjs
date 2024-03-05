import profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <div className="flex justify-between items-center mx-4 p-4 border-b-2">
      <h1 className="text-6xl">Tailwind Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
