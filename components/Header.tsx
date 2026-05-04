export default function Header() {
    return (
        <header className="w-full">
            <div className="flex justify-between">
                <div className="w-76">
                    <h1 className="text-2xl font-light">Salty Licorice Radio</h1>
                    <p>2nd and 4th Tuesday of the month from 7-9PM Eastern</p>
                </div>
                <div>
                    Listen at: <a href="https://www.germantownradio.com/" target="_blank" rel="noopener noreferrer" className="text-sm underline" aria-label="Germantown Community Radio website">
                        GTOWN RADIO
                    </a>
                </div>
            </div>
            <hr />
        </header>
    )
}