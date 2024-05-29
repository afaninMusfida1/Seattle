const PresensiItem = () => {
    return (
        <>
            <div className="item-container flex justify-between w-full border-2 rounded-lg px-4 py-1">
                <div className="nama">Dwi Saputra</div>
                <div className="status flex gap-6">
                    <input type="radio" id="hadir" name="keterangan" value="H" />
                    <label htmlFor="hadir">H</label><br />
                    <input type="radio" id="izin" name="keterangan" value="I" />
                    <label htmlFor="izin">I</label><br />
                    <input type="radio" id="sakit" name="keterangan" value="S" />
                    <label htmlFor="sakit">S</label><br />
                </div>
            </div>
        </>
    )
}

export default PresensiItem