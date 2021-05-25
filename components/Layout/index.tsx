import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { getStorage } from "../../services/localStorage";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Drawer from "./Drawer";
import SettingsPanel from "../SettingsPanel";

function index({ children }) {
  const theme = useSelector<RootState>((state) => state.theme.value);
  const [storedTheme, setStoredTheme] = useState("");
  useEffect(() => {
    setStoredTheme(getStorage("theme"));
  }, []);
  return (
    <div
      className={`flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light ${
        theme == "default" ? storedTheme : theme
      }`}
    >
      <Sidebar />
      <div className="flex-1 h-full overflow-x-hidden overflow-y-auto">
        <Topbar />
        <main className="bg-light h-full dark:bg-dark dark:text-light">
          {children}
        </main>

        <Drawer {...{ children: <SettingsPanel />, position: "left" }} />
        <Footer />
      </div>
    </div>
  );
}

export default index;
