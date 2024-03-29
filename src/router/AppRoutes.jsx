import { Route, Routes } from "react-router-dom";
import Dashboard from "../containers/Dashboard/Dashboard";
import AddTruck from "../containers/AddTruck/AddTruck";
import Lab from "../containers/Lab/Lab";
import WeighbridgeIn from "../containers/Weighbridge/WeighbridgeIn";
import WeighbridgeOut from "../containers/Weighbridge/weighbridgeOut";
import Tankfarm from "../containers/Tankfarm/Tankfarm";
import Trucks from "../containers/Trucks/Trucks";
import SignIn from "../components/forms/SignIn";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />

      <Route element={<AuthOutlet fallbackPath="/Login" />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trucks" element={<Trucks />} />
        <Route path="/weighbridgein" element={<WeighbridgeIn />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/tankfarm" element={<Tankfarm />} />
        <Route path="/Weighbridgeout" element={<WeighbridgeOut />} />
        <Route path="/addtruck" element={<AddTruck />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
