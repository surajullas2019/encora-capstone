import { useState } from "react";
import { useNavigate } from "react-router";

export default function PaymentGateway() {
  const navigate = useNavigate();
  const [stage, setStage] = useState("form"); 
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    // basic fake validation
    if (cardNumber.length < 12 || expiry.length < 4 || cvv.length < 3) {
      alert("Please enter valid payment details.");
      return;
    }

    setStage("processing");

    // simulate processing
    setTimeout(() => {
      setStage("success");

      // redirect to landing page after 2 more seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 3000);
  };

  /* -------------------------------------------------------------------------- */
  /*                          1) PAYMENT FORM SCREEN                            */
  /* -------------------------------------------------------------------------- */

  if (stage === "form") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-6">
        <div className="bg-base-100 p-10 rounded-xl shadow-xl border border-base-300 w-full max-w-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Payment Gateway</h1>

          <div className="form-control mb-4">
            <label className="label"><span className="label-text">Card Number</span></label>
            <input
              type="text"
              className="input input-bordered"
              placeholder="1234 5678 9012 3456"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <div className="form-control flex-1">
              <label className="label"><span className="label-text">Expiry</span></label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>
            <div className="form-control flex-1">
              <label className="label"><span className="label-text">CVV</span></label>
              <input
                type="password"
                className="input input-bordered"
                placeholder="123"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>

          <button className="btn btn-primary w-full mt-6" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                         2) PROCESSING PAYMENT SCREEN                       */
  /* -------------------------------------------------------------------------- */

  if (stage === "processing") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-6">
        <div className="loading loading-spinner loading-lg text-primary mb-8"></div>
        <h1 className="text-3xl font-bold">Processing Payment…</h1>
        <p className="text-base-content/70 mt-2">
          Please wait while we verify your transaction.
        </p>
        <p className="text-base-content/50 text-sm mt-3">Do not refresh or close this page.</p>
      </div>
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                         3) PAYMENT SUCCESS SCREEN                          */
  /* -------------------------------------------------------------------------- */

  if (stage === "success") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-6">
        <div className="text-green-500 text-8xl mb-4">✔</div>
        <h1 className="text-4xl font-bold mb-2">Payment Successful</h1>
        <p className="text-base-content/70 mb-4">Thank you for your purchase!</p>
        <p className="text-sm text-base-content/50">
          Redirecting you to the homepage...
        </p>
      </div>
    );
  }
}
