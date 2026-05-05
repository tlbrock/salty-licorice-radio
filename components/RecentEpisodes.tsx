import { getSortedArticles } from "@/lib/articles";
import Link from "next/link";

export default function RecentEpisodes() {
    const first5Articles = getSortedArticles().slice(0, 5);
    return (
        <section className="flex flex-col gap-2">
            <h2 className="">Recent episodes:</h2>
            {first5Articles !== null && first5Articles.map((a) => (
                <Link key={a.title} href={`/${a.id}`} aria-label="Read playlist: ${a.title}">
                    {a.title}
                </Link>
            ))}
            <Link href="/page/1" className="text-sm text-neutral-500" aria-label="View all episodes">
                View all episodes
            </Link>
        </section>
    )
}