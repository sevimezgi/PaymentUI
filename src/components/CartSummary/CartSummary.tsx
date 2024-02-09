import React, { useState, useEffect } from "react";
import mastercardIcon from "../../assets/mastercard.png";
import stripeIcon from "../../assets/stripe.svg";
import usdtIcon from "../../assets/usdt.png";
import getStripe from "../../configs/stripeConfig"

const CartSummary = ({ cartItems }) => {
  const [selectedPayment, setSelectedPayment] = useState('Cryptocurrencies');

  const totalPrice = cartItems?.reduce((acc, a) => acc + a.price * a.itemCount, 0);
  const fee = Math.round((totalPrice / 100) * 1);

  async function handleCheckout() {
    if (selectedPayment !== 'Stripe') return;

    try {
        const stripe = await getStripe();
        const response = await fetch(`http://localhost:3000/api/create-checkout-session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartItems }),
        });
        const session = await response.json();

        if (stripe) {
            const result = await stripe.redirectToCheckout({
                sessionId: session.sessionId,
            });

            if (result.error) {
                alert(result.error.message);
            }
        } else {
            console.error("Stripe couldn't be initialized.");
        }
    } catch (error) {
        console.error('Error in handleCheckout:', error);
    }
}


  return (
    <div className={`summary flex flex-col flex-[30%] bg-white rounded-xl xl p-5 h-fit shadow-lg my-5 lg:my-0 ${cartItems.length == 0 ? "hidden" : ""}`}>
      <h1 className="font-medium text-lg sm:text-xl">Order Summary</h1>

      <div className="border-b-[#ddd] border-b-[0.5px] py-2">Items</div>

      <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
        {cartItems.map((product) => (
          <div key={product.id} className="flex justify-between mb-2">
            <div className="flex flex-col">
              <h1>{product.name}</h1>
              <p className="text-[grey] text-xs w-fit">{product.companyName}</p>
            </div>
            <h1 className="text-[#004] ">
              {product.itemCount} x ${product.price}
            </h1>
          </div>
        ))}
      </div>

      <div className="py-5 mb-5 border-b-[#ddd] border-b-[0.5px]">
        <h1>From:</h1>
        <p className="text-[grey] mb-3">Bornova</p>
        <h1>To:</h1>
        <p className="text-[grey]">Kahramanlar</p>
      </div>

      <div>
        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Weighted Item(s)</p>
          <p className="text-[#004] mb-3">
            ${cartItems?.reduce((acc, a) => acc + a.price * a.itemCount, 0)}
          </p>
        </div>

        <div className="flex justify-between">
          <p className="text-[grey] mb-3">Fees</p>
          <p className="text-[#004] mb-3">${fee}</p>
        </div>
      </div>

      <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
        <div className="flex justify-between font-semibold text-[18px] px-1">
          <p className="">Total</p>
          <p className="">
            ${totalPrice + fee}
          </p>
        </div>
      </div>

      <div className="py-5 border-b-[#ddd] border-b-[0.5px]">
        <h1 className="font-medium text-lg sm:text-xl">Payment Method</h1>
        <form>
          <div className="flex flex-col">
            <label className="inline-flex items-center mt-3">
              <input type="radio" className="form-radio h-5 w-5 text-gray-600" value="Cryptocurrencies" checked={selectedPayment === 'Cryptocurrencies'} onChange={() => setSelectedPayment('Cryptocurrencies')} />
              <img src={usdtIcon} alt="Cryptocurrencies" className="h-8 w-8 ml-2 mr-2" />
              <span className="text-gray-700">Cryptocurrencies</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="radio" className="form-radio h-5 w-5 text-gray-600" value="Mastercard" disabled />
              <img src={mastercardIcon} alt="Mastercard" className="h-8 w-8 ml-2 mr-2" />
              <span className="text-gray-700">Credit Card</span>
            </label>
            <label className="inline-flex items-center mt-3">
              <input type="radio" className="form-radio h-5 w-5 text-gray-600" value="Stripe" checked={selectedPayment === 'Stripe'} onChange={() => setSelectedPayment('Stripe')} />
              <img src={stripeIcon} alt="Stripe" className="h-8 w-8 ml-2 mr-2" />
              <span className="text-gray-700">Stripe</span>
            </label>
          </div>
        </form>
      </div>

      <div className="flex justify-between gap-2 mt-5">
        <button className="rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%]">
          Cancel
        </button>
        <button
          className={`rounded-lg outline-none border border-[#ddd] py-1 px-5 flex-[50%] ${selectedPayment === 'Stripe' ? 'bg-primaryColor text-white' : ''}`}
          onClick={handleCheckout}
          disabled={selectedPayment !== 'Stripe'}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default CartSummary;