"use client";

import { useNextShowTime, useIsLiveNow } from "@/hooks/useNextShowTime"
import moment from "moment"

export default function NextShow() {
    const { getNextShowTime } = useNextShowTime();
    const nextShowTime = getNextShowTime();
    const isLiveNow = useIsLiveNow();
    const formattedTime = moment(nextShowTime).format("MMMM Do YYYY, h:mm A");

    if (isLiveNow) {
        return (
            <div className="text-red-500 flex animate-pulse">
                <div className="size-4 rounded-full bg-red-500 inline-block mr-1 my-auto" />
                On Air!
            </div>
        )
    }

    return (
        <p>{formattedTime}</p>
    )
}