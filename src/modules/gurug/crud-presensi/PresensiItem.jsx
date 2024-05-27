const PresensiItem = () => {
    return (
        <>
            <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
                <div className="nama">Dwi Saputra</div>
                <div className="status flex gap-10">
                    <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">hadir</button>
                    <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">izin</button>
                    <button className="bg-green-400 text-white px-[15px] py-[3px] rounded ">sakit</button>
                </div>
            </div>
        </>
    )
}

export default PresensiItem