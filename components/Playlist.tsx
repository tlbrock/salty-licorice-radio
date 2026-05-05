import { getArticleData } from "@/lib/articles";

export default async function Playlist({ articleId }: { articleId: string }) {
    const articleData = await getArticleData(articleId);
    return (
        <section className="flex flex-col gap-5">
            <p>{articleData.date.toString()}</p>
            <article dangerouslySetInnerHTML={{ __html: articleData.contentHtml }} />
            <hr />
        </section>
    )
}