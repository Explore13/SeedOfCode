import { LayoutDashboard, Home, StickyNote, Calendar, Settings } from "lucide-react";
import { Sidebar, SidebarItem } from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Users from "./pages/Users";
import Setting from "./pages/Setting";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar>
          <SidebarItem icon={<Home size={20} />} text="Home" to="/" />
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" to="/dashboard" />
          <SidebarItem icon={<StickyNote size={20} />} text="Users" to="/users"/>
          <SidebarItem icon={<Calendar size={20} />} text="Notes" to="/notes" />
          <hr className="my-3" />
          <SidebarItem icon={<Settings size={20} />} text="Settings" to="/settings" />
        </Sidebar>
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/settings" element={<Setting />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
