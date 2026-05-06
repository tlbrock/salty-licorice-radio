import PaginationControl from "@/components/PaginationControl";
import Playlist from "@/components/Playlist";
import { getSortedArticles } from "@/lib/articles";
import Header from "@/components/Header";
import RecentEpisodes from "@/components/RecentEpisodes";

const POSTS_PER_PAGE = 5;

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
        <>
            <Header />
            <section className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16 mb-20">
                <div className="flex flex-col gap-10 md:flex-row md:gap-20">
                    <section className="mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
                        <div>
                            {paginatedArticles.map((article) => (
                                <div key={article.id} className="mb-6">
                                    <Playlist articleId={article.id} />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mb-6">
                            <PaginationControl currentPage={currentPage} totalPages={totalPages} />
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
}
