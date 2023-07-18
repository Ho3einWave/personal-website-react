export default function Tooltip({ message, children }) {
  return (
    <div className="group relative flex">
      {children}
      <span className="absolute right-1/2 top-[-3rem] scale-0 transition-all rounded bg-boxes p-2 text-xs text-white group-hover:scale-100 translate-x-1/2">
        {message}
      </span>
    </div>
  );
}
