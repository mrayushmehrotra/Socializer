"use client";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";

export default function useIsAuth() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/sign-in");
      return false;
    }
  }, [isLoaded, isSignedIn, router]);

  return isSignedIn;
}
