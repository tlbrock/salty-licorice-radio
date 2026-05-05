import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="mx-auto w-11/12 md:w-5/6 mt-4 flex flex-col gap-16">
                <div className="flex justify-between">
                    <div className="w-76">
                        <Link href="/" className="text-sm">
                            <h1 className="text-2xl font-light">Salty Licorice Radio</h1>
                        </Link>
                        <p>2nd and 4th Tuesday of the month from 7-9PM Eastern</p>
                    </div>
                    <div>
                        Listen at: <a href="https://www.germantownradio.com/" target="_blank" rel="noopener noreferrer" className="text-sm underline" aria-label="Germantown Community Radio website">
                            GTOWN RADIO
                        </a>
                    </div>
                </div>
            </header>
            <hr className="my-2" />
        </>
    )
}