export default function Youtube(props: any) {
    return (
        <div className="flex w-screen h-screen justify-center items-center rounded-xl bg-[#F5F2EA]">
            <div className="aspect-video w-[800px]">
            <iframe className="w-full h-full rounded-xl" src="https://www.youtube.com/embed/X2PBc3smR1M" title="โสดมาก (DM Me) l MEAN x sarah salola 「Official Video」" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>

        </div>
    )
}