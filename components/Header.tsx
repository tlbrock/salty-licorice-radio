"use client";

import Link from "next/link";
import NextShow from "./NextShow";
import { useMedia } from "react-use";

export default function Header() {
    const isMobile = useMedia('(max-width: 480px)')

    return (
        <>
            <header className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16">
                <div className="flex justify-between">
                    <div className="w-76">
                        <Link href="/" className="text-sm" aria-label="Salty Licorice Radio homepage">
                            <h1 className={isMobile ? 'max-w-24 text-2xl' : 'text-2xl'}>Salty Licorice Radio</h1>
                        </Link>
                        {!isMobile && <p>2nd and 4th Tuesday of the month from 7-9PM Eastern</p>}
                    </div>
                    <div>
                        <div>
                            Listen at: <a href="https://www.germantownradio.com/" target="_blank" rel="noopener noreferrer" className="text-sm underline" aria-label="Germantown Community Radio website">
                                GTOWN RADIO
                            </a>
                        </div>
                        <div>
                            Next Show:
                            <NextShow />
                        </div>
                    </div>
                </div>
            </header>
            <hr className="my-2" />
        </>
    )
}