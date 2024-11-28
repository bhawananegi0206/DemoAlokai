import React from "react";
import {
  SfIconArrowBack,
  SfIconCreditCard,
  SfIconBlock,
} from "@storefront-ui/react";
import tailwindStyles from "../dist/tailwind.css";

const AlokaiCheckout = ({ products }) => {
  return (
    <>
      <style>{tailwindStyles}</style>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 custombg">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500 mt-2">{product.description}</p>
            <p className="text-lg font-bold mt-4">${product.price}</p>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <main>
        <div className="max-w-screen-3xl mx-auto md:px-6 lg:px-10 3xl:px-0">
          <div className="px-4 md:px-0 mb-20">
            <div className="flex justify-between mt-8 mb-10">
              <h1 className="text-2xl md:text-3xl font-bold uppercase">
                Proceed with Checkout
              </h1>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-x-6">
              <div className="col-span-7">
                <hr className="w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0" />
                <div className="md:px-4 py-6">
                  <div className="flex justify-between items-center">
                    <h2 className="typography-headline-4 text-neutral-900 font-bold mb-4">
                      Contact Information
                    </h2>
                  </div>
                  <div className="w-full md:max-w-[520px]">
                    <p>
                      Add your email and phone number to communicate with the
                      store.
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                    >
                      Add contact information
                    </button>
                  </div>
                </div>
                <hr className="w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0" />
                <div className="md:px-4 py-6">
                  <div className="flex justify-between items-center">
                    <h2 className="typography-headline-4 text-neutral-900 font-bold mb-4">
                      Billing Address
                    </h2>
                  </div>
                  <div className="w-full md:max-w-[520px]">
                    <p>
                      Add a billing address. You will receive the invoice to the
                      email address provided above.
                    </p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                    >
                      Add billing address
                    </button>
                  </div>
                </div>
                <hr className="w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0" />
                <div className="md:px-4 py-6">
                  <div className="flex justify-between items-center">
                    <h2 className="typography-headline-4 text-neutral-900 font-bold mb-4">
                      Shipping Address
                    </h2>
                  </div>
                  <div className="w-full md:max-w-[520px]">
                    <p>Add a shipping address to view shipping details.</p>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto"
                    >
                      Add shipping address
                    </button>
                  </div>
                </div>
                <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0" />
                <div className="md:px-4 my-6">
                  <div className="flex justify-between items-center">
                    <h3 className="typography-headline-4 text-neutral-900 font-bold">
                      Shipping details
                    </h3>
                  </div>
                  <div className="mt-4">
                    <div className="flex mb-6">
                      <SfIconBlock />
                      <p>Not available until a shipping address is provided.</p>
                    </div>
                  </div>
                </div>
                <hr className="w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0" />
                <div className="md:px-4 py-6">
                  <h3 className="typography-headline-4 text-neutral-900 font-bold mb-4">
                    Payment method
                  </h3>
                  <div className="grid gap-4 grid-cols-2">
                    <button
                      type="button"
                      className="border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600"
                    >
                      <SfIconCreditCard className="mr-2" />
                      <span className="font-medium">Credit Card</span>
                    </button>
                    <button
                      type="button"
                      disabled
                      className="border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-xs text-neutral-500">
                          Coming soon
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      disabled
                      className="border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-xs text-neutral-500">
                          Coming soon
                        </span>
                      </div>
                    </button>
                    <button
                      type="button"
                      disabled
                      className="border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600"
                    >
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-xs text-neutral-500">
                          Coming soon
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
                <div id="payment-element" className="md:px-4 py-6"></div>
                <hr className="w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0 mb-10" />
              </div>
              <div className="col-span-5 md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 md:mb-10 h-fit">
                <div className="flex justify-between items-center md:items-end mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0">
                  <h2 className="typography-headline-4 md:typography-headline-3 font-bold">
                    Order Summary
                  </h2>
                  <span className="font-medium">(Items:10)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span>Items subtotal</span>
                  <div className="flex items-end">
                    <div className="flex flex-col items-end mr-2"></div>
                    <div className="flex flex-col items-end">
                      <p>$20</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start mt-3">
                  <p>Delivery</p>
                  <p>--</p>
                </div>
                <div className="flex justify-between items-start mt-3">
                  <p>Estimated Sales Tax</p>
                  <p>$0.00</p>
                </div>
                <hr className="w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto" />

                <form className="flex gap-2 items-center justify-between">
                  <span className="flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-neutral-200 h-[40px] flex-1">
                    <input
                      className="min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent"
                      type="text"
                      size={1}
                      placeholder="Enter promo code"
                      required
                      defaultValue=""
                    />
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50"
                  >
                    Apply
                  </button>
                </form>
                <hr className="w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto" />
                <div className="flex justify-between items-end mb-5">
                  <h2 className="typography-headline-4 md:typography-headline-3 font-bold">
                    Total
                  </h2>
                  <h2 className="typography-headline-4 md:typography-headline-3 font-bold">
                    $50
                  </h2>
                </div>
                <hr className="w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto" />
                <button
                  type="button"
                  className="flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full h-[48px]"
                >
                  Place order and pay
                </button>
                <p className="text-sm text-center mt-4 pb-4 md:pb-0">
                  By placing my order, you agree to our and our
                </p>
                <hr className="h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AlokaiCheckout;


