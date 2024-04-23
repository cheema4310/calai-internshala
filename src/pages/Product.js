import Footer from '../components/Footer';
import Header from '../components/Header';
import CheckoutButtons from '../components/paypal/CheckoutButtons';

export default function Product() {
  const product = {
    name: 'BLEU DE CHANEL',
    price: 1,
  };
  return (
    <div className="w-full h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="w-3/4 mx-auto grid grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <div className="flex gap-2 my-heading font-extrabold">
            <h2 className="flex-1">BLEU DE CHANEL</h2>
            <p>₹1</p>
          </div>
          <p className="my-para text-base">Parfum Spray</p>

          <p className="my-para font-bold my-6">3.4 fl oz</p>
          <input
            className="my-input my-4 focus:bg-lightest rounded-md"
            type="text"
            placeholder="Enter Coupon Code here"
          />
          <div>
            <CheckoutButtons product={product} />
          </div>
        </div>
        <div className="">
          <img
            className="w-full h-full object-cover"
            alt="perfume"
            src="https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_autoplus,fl_lossy,dpr_1.1/w_840/bleu-de-chanel-parfum-spray-3-4fl-oz--packshot-default-107180-9539148775454.jpg"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
