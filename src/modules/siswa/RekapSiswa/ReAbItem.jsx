const ReAbItem = ({ date, status }) => {
  return (
      <tr className="flex pt-[20px] justify-between w-full">
          <td className="text-poppins font-medium text-black text-lg">
              <p>{date}</p>
          </td>
          <td className="text-poppins font-medium text-black text-lg">
              <p>{status}</p>
          </td>
      </tr>
  );
};

export default ReAbItem;
