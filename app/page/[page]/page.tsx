import PaginationControl from "@/components/PaginationControl";
import Playlist from "@/components/Playlist";
import { getSortedArticles } from "@/lib/articles";
import Header from "@/components/Header";
import { Suspense } from "react";

const POSTS_PER_PAGE = 1;

export function generateStaticParams() {
    const articles = getSortedArticles();
    const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => ({
        page: (i + 1).toString(),
    }));
}

export default async function ArticleListPage({ params }: { params: { page: string } }) {
    const { page } = await params;
    const currentPage = Number(page);
    const articles = getSortedArticles();
    const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
    const paginatedArticles = articles.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

    return (
        <main>
            <div>
                <Header />
            </div>
            <div className="mx-auto w-10/12 md:w-1/2 mt-20 flex flex-col gap-5">
                {paginatedArticles.map((article) => (
                    <div key={article.id} className="mb-6">
                        <Playlist articleId={article.id} />
                    </div>
                ))}
            </div>
            <div className="flex justify-center mb-6">
                <PaginationControl currentPage={currentPage} totalPages={totalPages} />
            </div>
        </main>
    );
}
