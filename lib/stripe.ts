import Stripe from 'stripe';

export const stripe = new Stripe(
    process.env.STRIPE_API_KEY || '',
    {
        apiVersion: '2022-11-15',
        typescript: true
    }
);

export function absoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}