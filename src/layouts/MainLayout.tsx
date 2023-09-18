import "D:/Projects/hipatiament/src/styles/mainLayout.css";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainLayout;
