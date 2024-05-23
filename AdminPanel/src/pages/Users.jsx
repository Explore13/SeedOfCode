import React, { useState } from "react";
import UsersTable from "../components/Tables/UsersTable";
import UsersCard from "../components/Cards/UsersCard";
import SearchBar from "../components/Buttons/SearchBar"; // Import the SearchBar component
import AddUserButton from "../components/Buttons/AddUserButton";

function Users() {
  const [searchTerm, setSearchTerm] = useState(""); // State for the search term

  // Use a state to keep track of the viewport width
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // Update the viewport width state on resize
  React.useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine whether to show card or table based on viewport width
  const isMobileView = viewportWidth < 480;
  const cardViewWidth = viewportWidth < 1170;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4 py-1 shadow-xs text-center bg-slate-300">
        Users
      </h1>

      {/* SearchBar component */}
      <div className={`${!isMobileView ? "flex justify-between" : ""} my-4`}>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isMobileView={isMobileView} />
        <AddUserButton isMobileView={isMobileView} />

      </div>

      {/* Conditional rendering based on viewport width */}
      {cardViewWidth ? (
        <UsersCard searchTerm={searchTerm} />
      ) : (
        <UsersTable searchTerm={searchTerm} />
      )}
    </div>
  );
}

export default Users;
