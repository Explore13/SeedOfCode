import React from 'react';
import UsersTable from '../components/Tables/UsersTable';
import UsersCard from '../components/Cards/UsersCard';

function Users() {


  // Use a state to keep track of the viewport width
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);

  // Update the viewport width state on resize
  React.useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine whether to show card or table based on viewport width
  const isMobileView = viewportWidth < 1150;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold my-4 py-1 shadow-xs text-center bg-slate-300">Users</h1>
      
      {/* Conditional rendering based on viewport width */}
      {isMobileView ? <UsersCard /> : <UsersTable />}
    </div>
  );
}

export default Users;
