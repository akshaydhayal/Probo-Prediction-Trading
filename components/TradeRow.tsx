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
      <div className="w-1/2 flex items-center gap-2 px-4">
        <img
          className="w-12 h-12 rounded-full"
          // src="https://probo.in/_next/image?url=https%3A%2F%2Fprobo.gumlet.io%2Fimage%2Fupload%2Fw_100%2Ch_100%2Cc_fill%2Cr_max%2Fprobo_product_images%2FIMAGE_e75356f6-0648-4b8d-810b-a950e5feb23d.png&w=96&q=75"
          src={imageUrl}
        />
        <p className="text-slate-300 text-[15px]">{title}</p>
      </div>
      <div className="w-1/2 flex">
        <p className=" text-slate-300 w-1/4 text-center">Rs {amountInvested}</p>
        <p className=" text-slate-300 w-1/4 text-center">{amountGain}</p>
        <p className=" text-slate-300 w-1/4 text-center">{predicted}</p>
        <p className=" text-slate-300 w-1/4 text-center">{result}</p>
      </div>
    </div>
  );
}
