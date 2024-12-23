import Navbar from '../components/Navbar';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="p-4">{children}</main>
    </div>
  );
};

export default MainLayout;
