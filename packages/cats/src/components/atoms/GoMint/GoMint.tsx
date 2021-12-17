import Link from "next/link";

export const GoMint = () => {
  return (
    <div className="flex w-full max-w-xs">
      <Link href="/mint">
        <a className="p-1 mt-2 w-full text-2xl text-center text-white hover:bg-gray-300 hover:bg-opacity-30 rounded-md border border-current">
          Mint
        </a>
      </Link>
    </div>
  );
};
