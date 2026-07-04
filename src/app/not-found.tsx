import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-edit flex min-h-[80vh] flex-col items-center justify-center pt-20 text-center">
      <p className="text-eyebrow text-ink/40">Error 404</p>
      <h1 className="mt-4 font-display text-5xl sm:text-6xl">Not found.</h1>
      <p className="mt-4 max-w-sm text-sm text-ink/55">
        The page you&apos;re looking for doesn&apos;t exist, or has moved.
      </p>
      <Link href="/" className="mt-10">
        <Button>Return Home</Button>
      </Link>
    </main>
  );
}
