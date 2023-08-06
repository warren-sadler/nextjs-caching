import Link from "next/link";

export default function BeforePage() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Link href={"/"}>⏮ Back</Link>
    </main>
  );
}
