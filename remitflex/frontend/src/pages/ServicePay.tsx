import PayBill from "@/components/service-pay";
import Header from "@/components/header";

const BillsPage = () => {
  return (
    <div className="service-pay">
      <Header />
      <PayBill />
    </div>
  );
};

export default BillsPage;