import { ClerkProvider } from '@clerk/nextjs';
import '../styles/globals.css'; 

export default function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
    </ClerkProvider>
  );
}



