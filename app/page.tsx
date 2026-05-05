import { getSortedArticles } from "../lib/articles";
import Header from "../components/Header";
import Playlist from "@/components/Playlist";
import RecentEpisodes from "@/components/RecentEpisodes";

const HomePage = () => {
  return (
    <>
      <Header />
      <section className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16 mb-20">
        <div className="flex gap-5">
          <RecentEpisodes />
          <div className="mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
            <h2 className="text-xl font-bold uppercase">Latest show:</h2>
            <Playlist articleId={getSortedArticles()[0]?.id} />
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage;