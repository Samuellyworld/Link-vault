import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { CustomHashLoader } from "@/widgets/hashloader";
import Dashboard from "@/pages/Dashboard";
import Processing from "@/components/send/processing";
const LandingPage = lazy(() => import("@/pages/Landing"));
const Bills = lazy(() => import("@/pages/Utilities"));
const SendMoney = lazy(() => import("../pages/SendMoney"));
const ServicePay = lazy(() => import("../pages/ServicePay"));

const AppRouter = () => {

  return (
    <Suspense fallback={<CustomHashLoader color="#409099" size={60} />}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Bills />} />
          <Route path="/remit" element={<SendMoney />} />
          <Route path="/services/pay" element={<ServicePay />} />
          <Route path="/processing" element={<Processing />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default AppRouter;

