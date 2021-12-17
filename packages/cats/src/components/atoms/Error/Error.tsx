import type { FallbackProps } from "react-error-boundary";

export const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <h3 className="text-6xl text-center text-red-600">Error</h3>
      <p className="overflow-hidden max-w-full text-lg text-center text-red-700 line-clamp-5">
        {error.message}
      </p>
      <button
        className="p-3 mt-8 text-3xl text-white hover:bg-slate-300 hover:bg-opacity-30 border-2"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </>
  );
};
