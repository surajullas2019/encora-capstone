import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function FakePaymentPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      alert("Payment Completed Successfully!");
      navigate("/"); // redirect to landing page
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base-200 text-center px-6">
      <div className="loading loading-spinner loading-lg text-primary mb-6"></div>

      <h1 className="text-3xl font-bold mb-2">Processing Payment…</h1>

      <p className="text-base-content/70 text-lg">
        Please wait while we complete your transaction.
      </p>

      <p cl assName="mt-4 text-base-content/50 text-sm">
        This may take around <span className="font-bold">5 seconds</span>.
      </p>
    </div>
  );
}
