# Next setup: consultation + eBook payments

## Cal.com

Consultation page:
`/book-consultation`

Booking URL:
`https://cal.com/hiranyak-chatterjee-iajpeu/1-1-nutrition-consultation`

Fee: ₹1,000

## Razorpay

Add these environment variables in Vercel and locally when testing:

```env
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
NEXT_PUBLIC_SITE_URL=https://nutrition.hiranyakhchatterjee.com
```

Never commit the Key Secret.

The eBook checkout creates Razorpay Orders server-side and verifies the returned signature server-side.

## eBook launch pricing

- Regular price: ₹499
- Launch price: ₹99
- Launch allocation: first 100 successful paid orders

The current implementation checks successful Razorpay Orders before creating a new order. This is suitable for the initial integration, but for a strict concurrency-safe first-100 guarantee we should add a persistent atomic counter (for example Redis/Neon/Supabase) before a high-volume launch.

## eBook delivery

The payment verification route is ready, but the actual PDF delivery should only be enabled after the final eBook PDF and delivery method are supplied. Recommended production flow: verify payment, record the order, then send a time-limited download link by email.
