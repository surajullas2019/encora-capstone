import { useNavigate } from "react-router";
export default function CheckoutPage() {
    const navigate = useNavigate();
    return (
        <div className="max-w-3xl mx-auto p-10 bg-base-100 shadow-xl rounded-xl mt-10 border border-base-300">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>

            <div className="space-y-4 mb-10">
                <div className="p-4 bg-base-200 rounded-lg">
                    <p className="font-semibold">C1</p>
                    <p className="text-sm text-base-content/70">Quantity: 0</p>
                    <p className="text-sm text-base-content/70">Price: ₹1</p>
                </div>

                <div className="p-4 bg-base-200 rounded-lg">
                    <p className="font-semibold">C2</p>
                    <p className="text-sm text-base-content/70">Quantity: 1000</p>
                    <p className="text-sm text-base-content/70">Price: ₹179999</p>
                </div>
            </div>
        
            <div className="flex justify-between text-lg font-semibold mb-8">
                <span>Total:</span>
                <span>₹10000000</span>
            </div>

             <button
        className="btn btn-primary btn-wide mt-8"
        onClick={() => navigate("/payment")}
      >
        Proceed to Payment
      </button>
    </div>
  );
}