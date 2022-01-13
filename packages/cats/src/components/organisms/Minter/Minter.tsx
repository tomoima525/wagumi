import type { Contract, ContractTransaction } from "ethereal-react";
import {
  useWriteContract,
  useWaitForTransaction,
  useTokenBalance,
} from "ethereal-react";

import React, { Suspense, useEffect } from "react";

import { useTokenId } from "@/cats/hooks/useTokenId";

export const View = ({
  contract,
  name,
  image,
  tokenId,
}: {
  contract: Contract;
  name: string;
  image: string;
  tokenId: number;
}) => {
  return (
    <div className="my-3">
      <h3 className="text-6xl text-center">{name}</h3>
      <img className="mt-3 w-[300px] h-[300px]" src={image} alt={name} />
      <a
        href={`https://opensea.io/assets/${contract.address}/${tokenId}`}
        className="mt-6 text-2xl underline hover:bg-gray-600 hover:cursor-pointer"
        target="_blank"
        rel="noreferrer"
      >
        View on opensea
      </a>
    </div>
  );
};

export const Minted = ({
  transaction,
  contract,
  tokenId,
}: {
  transaction: ContractTransaction;
  contract: Contract;
  tokenId: number;
}) => {
  const confirmation = useWaitForTransaction(transaction);

  useEffect(() => {
    console.log(confirmation);
  });

  return (
    <View
      contract={contract}
      name={`#${tokenId}`}
      image={`https://cats.wagumi.xyz/${tokenId}`}
      tokenId={tokenId}
    />
  );
};

export const Minter = ({ contract }: { contract: Contract }) => {
  const [mint, { loading, data }] = useWriteContract(contract, "mint");
  const tokenId = useTokenId(contract);
  const balance = useTokenBalance(contract);

  if (balance.toNumber() !== 0) {
    return (
      <div>
        <h2 className="text-lg text-center">Minted already</h2>
      </div>
    );
  }

  if (data) {
    return (
      <Suspense fallback={<div className="my-2 text-2xl">Minting...</div>}>
        <div>
          <Minted
            contract={contract}
            tokenId={Number(tokenId) + 1}
            transaction={data}
          />
        </div>
      </Suspense>
    );
  }

  return (
    <div className="py-6">
      <button
        className="p-4 text-3xl hover:bg-gray-300/30 border-4 border-current"
        disabled={loading}
        onClick={e => {
          e.preventDefault();
          mint();
        }}
      >
        Mint NFT #{Number(tokenId.toString()) + 1}
      </button>
    </div>
  );
};
