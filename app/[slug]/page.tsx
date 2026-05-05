import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getSortedArticles } from "@/lib/articles";
import Header from "@/components/Header";
import Playlist from "@/components/Playlist";


export async function generateStaticParams() {
    const articles = getSortedArticles();
    return articles.map((article) => ({
        slug: article.id,
    }));
}

const Article = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    return (
        <>
            <Header />
            <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
                <div className="flex justify-between">
                    <Link
                        href="/"
                        className="flex items-center gap-1 text-sm text-neutral-500"
                    >
                        <ArrowLeftIcon className="w-4" />
                        Back to home
                    </Link>
                </div>
                <Playlist articleId={slug} />
            </section>
        </>
    )
}

export default Article;