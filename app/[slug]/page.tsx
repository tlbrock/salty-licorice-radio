import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { getSortedArticles, getNextAndPreviousArticles } from "@/lib/articles";
import Header from "@/components/Header";
import Playlist from "@/components/Playlist";


export async function generateStaticParams() {
    const articles = getSortedArticles();
    return articles.map((article) => (
        {
            slug: article.id,
        }));
}

const Article = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const { next, previous } = getNextAndPreviousArticles(slug);
    const nextSlug = next ? next.id : null;
    const prevSlug = previous ? previous.id : null;
    return (
        <>
            <Header />
            <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
                <div className="flex gap-4">
                    {prevSlug &&
                        <Link
                            href={`/${prevSlug}`}
                            className="flex items-center gap-1 text-sm text-neutral-500"
                            aria-label="Previous article"
                        >
                            <ArrowLeftIcon className="w-4" />
                            Previous
                        </Link>
                    }
                    {nextSlug &&
                        <Link
                            href={nextSlug ? `/${nextSlug}` : "/"}
                            className="flex items-center gap-1 text-sm text-neutral-500"
                            aria-label="Next article"
                        >
                            Next
                            <ArrowRightIcon className="w-4" />
                        </Link>
                    }
                </div>
                <Playlist articleId={slug} />
            </section>
        </>
    )
}

export default Article;