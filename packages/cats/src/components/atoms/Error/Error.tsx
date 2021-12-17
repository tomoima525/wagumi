import type { FallbackProps } from "react-error-boundary";

export const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <>
      <h3 className="text-3xl text-center text-red-800 ">Error</h3>
      <p className="text-lg text-center text-red-600 line-clamp-3">
        {error.message}
      </p>
      <button
        className="p-3 mt-8 text-3xl text-white border-2"
        onClick={resetErrorBoundary}
      >
        Try again
      </button>
    </>
  );
};
