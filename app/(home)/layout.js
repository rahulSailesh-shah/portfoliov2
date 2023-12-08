import Navbar from "./_components/Navbar";

const HomeLayout = ({ children }) => {
  return (
    <div className="bg-[#111111]">
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HomeLayout;
