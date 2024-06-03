const ReAbItem = ({ tanggal, keterangan }) => {
  return (
      <tr className="flex pt-[20px] justify-between w-full">
          <td className="text-poppins font-medium text-black text-lg">
              <p>{tanggal}</p>
          </td>
          <td className="text-poppins font-medium text-black text-lg">
              <p>{keterangan}</p>
          </td>
      </tr>
  );
};

export default ReAbItem;
