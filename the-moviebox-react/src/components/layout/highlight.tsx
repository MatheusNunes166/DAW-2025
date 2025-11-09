export function Highlight() {
    return (
        <section className="flex bg-[url('../img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')] bg-position-[left_calc((50vw-170px)-340px)_top] bg-cover relative">
            <div className="absolute inset-0 z-10 bg-linear-to-r from-[#111] from-[calc((50vw-70px)-340px)] via-[#111]/70 via-50% to-[#111]/70"></div>
            <div className="container relative z-20 mx-auto flex gap-8 py-8">
                <img className="rounded-lg" src="../img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg" alt="Capa Filme" />
                <div className="flex flex-col">
                    <h2 className="text-5xl font-normal text-white">Como treinar o seu Dragão</h2>
                    <div className="my-3 flex items-center gap-2 text-sm">
                        <span className="rounded-full bg-white/20 px-3 py-1 text-white">Fantasia</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-white">Família</span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-white">Ação & Aventura</span>
                        <span className="pl-4 text-gray-300">2h 5m</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h4 className="pb-2 pt-12 text-2xl font-normal text-white">Sinopse</h4>
                        <p className="text-sm text-gray-400"> Em um mundo onde dragões e humanos coexistem, um jovem viking chamado soluço amigo de um dragão ferido chamado Banguela. Juntos, eles desafiam as tradições de suas tribos e descobrem que dragões não são monstros que todos acreditavam ser.</p>
                    </div>
                    <div className="my-6 flex gap-4">
                        <button className="cursor-pointer rounded border-none bg-[#e50914] px-6 py-3 font-bold text-white transition hover:bg-[#b8070f]">Assistir</button>
                        <button className="cursor-pointer rounded border border-white/30 bg-white/20 px-6 py-3 text-white transition hover:bg-white/30">Detalhes</button>
                        <button className="cursor-pointer rounded border border-white/30 bg-white/20 px-6 py-3 text-white transition hover:bg-white/30">+ Adicionar à lista</button>
                    </div>
                </div>
            </div>
        </section>
    )
}