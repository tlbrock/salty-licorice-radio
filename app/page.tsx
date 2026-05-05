import ArticleListItem from "../components/ArticleListItem";
import { getCategorizedArticles, getSortedArticles } from "../lib/articles";
import Header from "../components/Header";
import Playlist from "@/components/Playlist";

const HomePage = () => {
  const articles = getCategorizedArticles()

  return (
    <>
      <Header />
      <section className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16 mb-20">
        <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
          {articles !== null && Object.keys(articles).map((category) => (
            <ArticleListItem
              key={category}
              category={category}
              articles={articles[category]}
            />
          ))}
        </section>
        <div className="mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
          <h2 className="text-xl font-bold uppercase">Latest show:</h2>
          <Playlist articleId={getSortedArticles()[0]?.id} />
        </div>
      </section>
    </>
  )
}

export default HomePage;