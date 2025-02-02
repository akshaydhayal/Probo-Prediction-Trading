export default function TradesRow({
  title,
  imageUrl,
  amountInvested,
  amountGain,
  result,
  predicted
}: {
  title: string;
  imageUrl: string;
  amountInvested: number;
  amountGain: string;
  result: "YES" | "NO" | "PENDING";
  predicted: "YES" | "NO" | "PENDING";
}) {
  return (
    <div className="w-full flex border-b border-b-slate-700 py-3">
      <div className="w-5/12 sm:w-3/5 md:w-1/2 flex items-center gap-2 px-4">
        <img className="w-12 h-12 rounded-full" src={imageUrl} />
        <p className="text-slate-300 text-[15px]">{title}</p>
      </div>
      <div className="w-7/12 sm:w-2/5 md:w-1/2 flex">
        <p className=" text-slate-300 w-1/3  lg:w-1/4 text-center">Rs {amountInvested}</p>
        <p className=" text-slate-300 w-1/3  lg:w-1/4 text-center">{amountGain}</p>
        <p className=" text-slate-300 w-1/3   lg:w-1/4 text-center">{predicted}</p>
        <p className=" text-slate-300 w-1/3 hidden lg:block lg:w-1/4 text-center">{result}</p>
      </div>
    </div>
  );
}
