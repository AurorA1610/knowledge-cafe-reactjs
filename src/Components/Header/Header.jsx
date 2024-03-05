import profile from '../../assets/images/profile.png';
const Header = () => {
  return (
    <div className="flex justify-between items-center mt-4 mb-5 p-4 border-b-2">
      <h1 className="text-6xl">Insight Nest</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
