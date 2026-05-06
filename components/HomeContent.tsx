

import Playlist from "@/components/Playlist";
import RecentEpisodes from "@/components/RecentEpisodes";
import { ArticleItem } from "@/types";

export default function HomeContent({ articles }: { articles: ArticleItem[] }) {

    return (
        <div className="flex flex-col gap-5 md:flex-row">
            <RecentEpisodes />
            <div className="mx-auto w-10/12 md:w-1/2 flex flex-col gap-5">
                <h2 className="text-xl font-bold uppercase">Latest show:</h2>
                <Playlist articleId={articles[0]?.id} />
            </div>
        </div>
    )
}