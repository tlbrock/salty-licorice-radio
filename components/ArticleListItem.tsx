import Link from "next/link";
import type { ArticleItem } from "../types";

interface Props {
    categories: string,
    articles: ArticleItem[],
}
const ArticleListItem = ({ categories, articles }: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2>{categories}</h2>
            {articles.map((article) => (
                <Link
                    key={article.id}
                    href={`/${article.id}`}
                    aria-label={`Read playlist: ${article.title}`}
                >
                    {article.title}
                </Link>
            ))}
        </div>
    )
}

export default ArticleListItem;