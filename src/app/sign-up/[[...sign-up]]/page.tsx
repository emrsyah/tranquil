import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-w-screen to flex min-h-screen items-center justify-center bg-indigo-300 bg-gradient-to-br from-indigo-800">
      <SignUp />
    </div>
  );
}
