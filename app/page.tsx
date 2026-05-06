import HomeContent from "@/components/HomeContent";
import Header from "@/components/Header";
import { getSortedArticles } from "@/lib/articles";


const HomePage = () => {
  const sortedArticles = getSortedArticles();

  return (
    <>
      <Header />
      <section className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16 mb-20">
        <HomeContent articles={sortedArticles} />
      </section>
    </>
  )
}

export default HomePage;