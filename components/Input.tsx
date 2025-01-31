export function Input({ type, placeholder }) {
  return (
    <input
      className="px-8 py-2 text-slate-300 rounded-md placeholder:text-slate-400
   outline-none bg-[#272525] border border-slate-600"
      type={type}
      placeholder={placeholder}
    />
  );
}
