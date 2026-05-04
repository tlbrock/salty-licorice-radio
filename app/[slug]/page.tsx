import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { getArticleData, getSortedArticles } from "@/lib/articles";


export async function generateStaticParams() {
    const articles = getSortedArticles();
    return articles.map((article) => ({
        slug: article.id,
    }));
}

const Article = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const articleData = await getArticleData(slug);
    return (
        <section className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
            <div className="flex justify-between font-poppins">
                <Link
                    href="/"
                    className="flex items-center gap-1 text-sm text-neutral-500"
                >
                    <ArrowLeftIcon className="w-4" />
                    Back to home
                </Link>
                <p>{articleData.date.toString()}</p>
            </div>
            <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
        </section>
    )
}

export default Article;