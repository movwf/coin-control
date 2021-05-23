import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function index({ children }) {
  return (
    <div className="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
      <Sidebar />
      <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
        <Topbar />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
  
export default index;
