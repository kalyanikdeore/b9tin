// import { Outlet } from "react-router-dom";
// import Sidebar from "../components/Sidebar/Sidebar";
// import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
// const AdminLayout = () => {
//   return (
//     <div className="admin-layout" style={{ display: "flex" }}>
//       <div className="flex-1">
//         <AdminNavbar />
//         <div className="flex">
//           {/* <Sidebar /> */}
//           {!hideSidebar && <Sidebar />}
//           <div className="flex mx-auto justify-center items-center">
//             <Outlet />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import { useState } from "react"; // Import useState hook

const AdminLayout = () => {
  const [hideSidebar, setHideSidebar] = useState(false); // Define state variable

  return (
    <div className="admin-layout" style={{ display: "flex" }}>
      <div className="flex-1">
        <AdminNavbar />
        <div className="flex">
          {!hideSidebar && <Sidebar />}
          <div className="flex mx-auto justify-center items-center">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
