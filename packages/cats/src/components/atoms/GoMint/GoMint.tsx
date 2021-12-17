import Link from "next/link";

export const GoMint = () => {
  return (
    <Link href="/mint">
      <a className="p-1 mt-2 w-full max-w-xs text-2xl text-center text-white hover:bg-slate-300 hover:bg-opacity-30 rounded-md border border-current">
        Mint
      </a>
    </Link>
  );
};
