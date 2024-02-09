import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        const publicKey = 'pk_test_51MlXR9E1whbspcMfPN4h6DNXZbkhTwiAwungghkVsELo81oiVrzrWwfOp8izGBnzDAlyswsUm8lE4JRPkCQvhm16007ey0YYtM';
        stripePromise = loadStripe(publicKey);
    }
    return stripePromise;
};

export default getStripe;
