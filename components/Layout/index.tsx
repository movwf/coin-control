import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Drawer from "./Drawer";
import SettingsPanel from "../SettingsPanel";

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
        <Drawer {...{ children: <SettingsPanel />, position: "left" }} />
      </div>
    </div>
  );
}

export default index;
