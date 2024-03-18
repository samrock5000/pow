import {
  bigIntToBinUint256BEClamped,
  binToBigIntUint256BE,
  binToBigIntUintBE,
  binToHex,
  hash256,
  hexToBin,
  numberToBinInt32LE,
  bigIntToBlockDifficultyTarget,
  binToCompactTarget,
  compactTargetToBinUint256BE,
  blockDifficultyTargetToBigInt,
} from "./libauth";
import {
  decodeHeader,
  encodeHeader,
  readHeader,
  type BlockHeader,
} from "./header";
// import headerData from "./headers-835201.json";
import headerData from "./test-data/headers-genesis.json";
import { genesisHeader, uahfHeader } from "./test-data/header-data";
//Chipnet block 0-3000
import chainData from "./test-data/work.json";
const hdata = hexToBin(JSON.parse(headerData).hex);

/**
 * Converts a compact target representation (as a Uint8Array) to a 32-byte chainwork representation.
 * 2**256 / (x + 1) == ~x / (x + 1) + 1
 * @param compactTarget - The compact target representation as a Uint8Array.
 * @returns The 32-byte block difficulty target as a Uint8Array.
 */
export const compactTargetToChainwork = (target: Uint8Array) => {
  const maxWork = 1n << 256n;
  return bigIntToBinUint256BEClamped(
    maxWork / (binToBigIntUint256BE(compactTargetToBinUint256BE(target)) + 1n),
  );
};

/**
 * Verifies the proof of work for a given block header.
 *
 * @param {Uint8Array} header - The raw block header data.
 * @returns {boolean | string} True if the proof of work is valid,
 */
export const verifyProofOfWork = (header: Uint8Array) => {
  const headerDecoded = decodeHeader(header);
  if (typeof headerDecoded == "string") {
    return headerDecoded;
  }
  const target = blockDifficultyTargetToBigInt(
    compactTargetToBinUint256BE(
      numberToBinInt32LE(headerDecoded.difficultyTarget).reverse(),
    ),
  );
  const blockHashToBigint = binToBigIntUintBE(hash256(header).reverse());
  return blockHashToBigint < target;
};

export const calculateHeaderChainWork = (headers: Uint8Array) => {
  const headerRead = readHeader({ bin: headers, index: 0 });
  if (typeof headerRead == "string") {
    return headerRead;
  }
  const { result, position } = headerRead;
  let nextPosition = 0; //position.index;
  let chainWork = 0n;
  while (true) {
    if (nextPosition == headers.length) {
      break;
    }
    let work = compactTargetToChainwork(
      numberToBinInt32LE(result.difficultyTarget).reverse(),
    );
    chainWork += BigInt(`0x${binToHex(work)}`);
    nextPosition += position.index;
  }
  return bigIntToBlockDifficultyTarget(chainWork);
};

// console.log(verifyProofOfWork(uahfHeader));

let accumulatedChainWork = 0n;
chainData.work.forEach((work) => {
  accumulatedChainWork += binToBigIntUint256BE(hexToBin(work));
});
const CHIP_BLOCK_3000_CHAINWORK = hexToBin("10c4bd330e34");
console.log(
  "accumulated chipnet chainwork\ngenesis to block 3000\ntest data:\n",
  binToHex(bigIntToBlockDifficultyTarget(accumulatedChainWork)),
  "\nexpect\n",
  binToHex(
    bigIntToBlockDifficultyTarget(
      BigInt(`0x${binToHex(CHIP_BLOCK_3000_CHAINWORK)}`),
    ),
  ),
);

const header = decodeHeader(genesisHeader) as BlockHeader;
console.log(
  "\nGenesis Block\n",
  new Date(header.time * 1000).toDateString(),
  "\nDifficulty Target\n",
  binToHex(numberToBinInt32LE(header.difficultyTarget).reverse()),
  "\nMerkle Hasxwh\n",
  binToHex(header.merkleRootHash),
);

const blockHash = hash256(
  encodeHeader(readHeader({ bin: hdata, index: 0 }).result),
);
console.log("\ngenesis blockhash\n", binToHex(blockHash.reverse()));

const decoded = decodeHeader(uahfHeader);
console.log("\nuahf header\n", decoded);
