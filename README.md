# pow

examples for working with Header data

```typescript
const header = decodeHeader(genesisHeader) as BlockHeader;
console.log(
  "\nGenesis Block\n",
  new Date(header.time * 1000).toDateString(),
  "\nDifficulty Target\n",
  binToHex(numberToBinInt32LE(header.difficultyTarget).reverse()),
  "\nMerkle Hasxwh\n",
  binToHex(header.merkleRootHash),
);
```

To install dependencies:

```bash
bun install
```

or

```bash
npm install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.31. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# pow
