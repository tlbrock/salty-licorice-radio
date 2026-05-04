import Link from "next/link";
import type { ArticleItem } from "../types";

interface Props {
    category: string,
    articles: ArticleItem[],
}
const ArticleListItem = ({ category, articles }: Props) => {
    return (
        <div className="flex flex-col gap-5">
            <h2>{category}</h2>
            {articles.map((article) => (
                <Link
                    key={article.id}
                    href={`/${article.id}`}
                >
                    {article.title}
                </Link>
            ))}
        </div>
    )
}

export default ArticleListItem;