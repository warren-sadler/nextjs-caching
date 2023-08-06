import Link from "next/link";
import { Random } from "./random";

export default function IndexPage() {
  return (
    <main className="h-screen flex items-center justify-center text-center">
      <article>
        <h2>
          Unchanging - <span className="text-orange-200">{Math.random()}</span>
        </h2>
        <Random /> {/* <- Our Random Component */}
        <Link href="/away">Navigate Away ⏩</Link>
      </article>
    </main>
  );
}
