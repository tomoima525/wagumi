import Link from "next/link";

export const GoMint = () => {
  return (
    <div className="py-3 max-w-xs">
      <Link href="/mint">
        <a className="py-3 px-6 mt-2 w-full text-2xl text-center text-white hover:bg-gray-400 hover:bg-opacity-20 rounded-md border border-current">
          Mint
        </a>
      </Link>
    </div>
  );
};
