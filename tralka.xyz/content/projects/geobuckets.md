---
title: GeoBuckets
subtitle: "Lightweight TypeScript library for data classification "
skills:
  - Typescript
  - Git
links:
  - icon: ion:logo-github
    text: Github
    link: https://github.com/mtralka/GeoBuckets
slug: geobuckets
link: /projects/geobuckets
---

# 🌎🪣

Lightweight Javascript (TypeScript, really) library for classification. Dependency free, tested, and type safe.

## Features

- 🔥 supports **6** classification types
- ⚖️: Small!

  - 🚀 **4.4kb** minifed, **1.7kb** gzipped
  - 0️⃣ zero dependencies
  - 🌲 tree-shakeable

- 🧪 fully tested
- 🏷️ fully typed
- 🪨 asynchronous and non-blocking

## Supports

- Equal Intervals (EQI)

  - `equalIntervalBuckets`

- Standard Deviation (STD)

  - `standardDeviationBuckets`

- Arithmetic Progression (APG)

  - `arithmeticProgressionBuckets`

- Geometric Progression (GPG)

  - `geometricProgressionBuckets`

- Quantiles (QNT)

  - `quantileBuckets`

- Jenks (JNK)

  - `jenksBuckets`

## Install

Install through NPM

```
npm install geobuckets
```

## Usage

All outward facing functions are async and must be called with `await XXX`

Explicit import:

```typescript
import { jenksBuckets } from "geobuckets";

const data: Array<number> = [60, 26, 20, 17, 10, 27, 98, 42, 55, 35];
const numClasses: number = 3;

const buckets: Array<number> = await jenksBuckets(data, numClasses);

console.log(buckets) >> [10, 35, 60, 98];
```

Helper function and type

```typescript
import { generateBuckets, BucketTypes } from "geobuckets";

const data: Array<number> = [60, 26, 20, 17, 10, 27, 98, 42, 55, 35];
const numClasses: number = 3;

const buckets: Array<number> = await generateBuckets(
  BucketTypes.JNK,
  data,
  numClasses
);

console.log(buckets) >> [10, 35, 60, 98];
```

_A modern implementation of the [GeoStats]("https://github.com/simogeo/geostats") library by Simon Georget (MIT license)_
