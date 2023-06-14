

const DetailArt = () => {
    return(
        <>
        <div className="flex flex-col sm:px-[120px] px-5 gap-4">
            <section id="source-article" className="flex flex-col gap-2 mt-[100px] text-3xl">Sumber</section>
            <section id="tanggal-article" className="flex flex-col gap-2 mb-4 mt-[-15px]">Tanggal</section>
            <section id="img" className="w-4/5 mx-auto h-60 sm:h-96  bg-slate-800 rounded-xl"></section>
            <section id="par1" className="w-full text-justify mb-2 text-xl">aa</section>
            <section id="img2" className="w-2/3 mx-auto h-60 sm:h-96 bg-slate-800 rounded-xl"></section>
            <section id="par2" className="w-full text-justify mb-2 text-xl">aa</section>
        </div>
        </>
    )
}

export default DetailArt