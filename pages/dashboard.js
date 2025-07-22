import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';

export default function Dashboard() {
  return (
    <>
      <SignedIn>
        <h1>Welcome to Dashboard</h1>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
