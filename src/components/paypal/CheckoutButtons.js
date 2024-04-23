import { PayPalButtons } from '@paypal/react-paypal-js';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../db/firebase-config';

export default function CheckoutButtons({ product }) {
  const user = auth.currentUser;
  console.log(user);
  const amount = product.price;

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          description: product.name,
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = async (data, actions) => {
    const order = await actions.order.capture();
    console.log('Order:', order);

    // Save payment data to Firestore
    await setDoc(doc(db, 'Payments', order.id), {
      userId: auth.currentUser.uid,
      orderId: order.id,
      amount: order.purchase_units[0].amount.value,
      status: order.status,
      createdAt: new Date().toISOString(),
    });

    // onPaymentSuccess(order);
  };
  const onCancel = (data) => console.log('Cancel:', data);
  return (
    <PayPalButtons
      style={{
        layout: 'vertical',
        color: 'silver',
        shape: 'rect',
        label: 'paypal',
        height: 38,
      }}
      createOrder={createOrder}
      onApprove={onApprove}
      onCancel={onCancel}
    />
  );
}
