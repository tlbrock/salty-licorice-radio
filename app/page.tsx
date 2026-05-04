import ArticleListItem from "../components/ArticleListItem";
import { getCategorizedArticles } from "../lib/articles";
import Header from "../components/Header";

const HomePage = () => {
  const articles = getCategorizedArticles()

  return (
    <section className="mx-auto w-11/12 md:w-5/6 mt-20 flex flex-col gap-16 mb-20">
      <Header />
      <section className="md:grid md:grid-cols-2 flex flex-col gap-10">
        {articles !== null && Object.keys(articles).map((category) => (
          <ArticleListItem
            key={category}
            category={category}
            articles={articles[category]}
          />
        ))}

      </section>

    </section>
  )
}

export default HomePage;