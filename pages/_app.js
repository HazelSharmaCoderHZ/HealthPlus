import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
  
      <Component {...pageProps} />
    </ClerkProvider>
  );
}



