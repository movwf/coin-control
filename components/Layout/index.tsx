import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function index({ children }) {
  // Change with theme dispatch
  const isDark = true;
  return (
    <div
      className={`flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light ${
        isDark ? "dark" : ""
      }`}
    >
      <Sidebar />
      <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
        <Topbar />
        <main className="bg-light dark:bg-dark dark:text-light">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default index;
