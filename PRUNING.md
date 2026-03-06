# Feature Pruning Analysis

This document outlines features identified as candidates for removal to improve codebase maintainability.

## High Confidence Removals

### 1. Legacy Governance v1 (~4,341 LOC)

The routing file explicitly comments these as `// old v1 governance`. They are fully superseded by the v2 governance system.

| Package | LOC | Superseded by |
|---|---|---|
| `page-democracy` | 1,983 | `page-referenda` (v2) |
| `page-council` | 1,628 | `page-ranked` |
| `page-tech-comm` | 730 | `page-ranked` |

### 2. Legacy Staking (~9,114 LOC)

- **`page-staking-legacy`** — The routing file comments it as `// Legacy staking Pre v14 pallet version`. It is nearly identical in size to `page-staking` (9,309 LOC) but targets the obsolete v13 protocol. No modern chain requires this.

### 3. Trivial Wrapper Pages (~74 LOC)

- **`page-fellowship`** (37 LOC) — Renders `page-ranked` with the `fellowshipCollective` pallet wired in. Nothing more.
- **`page-ambassador`** (37 LOC) — Same pattern, but with `ambassadorCollective`.

Both should be eliminated by making `page-ranked` accept a pallet name as a route parameter.

---

## Medium Priority

| Package | LOC | Reason |
|---|---|---|
| `page-poll` | 310 | The 2017 DOT denomination vote. Voting is closed — this is a historical artifact with no active use. |
| `page-calendar` | 1,360 | Visualization of scheduled on-chain events. Useful, but not essential functionality. |

---

## Low Priority (Small but Specialized)

| Package | LOC | Notes |
|---|---|---|
| `page-rpc` | 292 | RPC method submission interface. Redundant with external tools (Polkadot.js Apps, wscat). |
| `page-runtime` | 257 | Runtime metadata viewer. Useful reference, but covered by external documentation. |

---

## What to Keep

These packages may look like candidates but are worth retaining:

| Package | LOC | Reason to Keep |
|---|---|---|
| `page-staking-async` | 6,996 | Specialized for the AssetHub migration (dual-connection: relay chain + asset hub). Distinct use case. |
| `page-staking2` | 2,395 | Streamlined staking UI. Could eventually replace `page-staking` for most users. |
| `page-js` | 1,099 | JavaScript playground. Dev-only but sandboxed in an iframe and genuinely unique. |
| `page-files` | 974 | Crust IPFS integration. Chain-specific but small and self-contained. |
| `page-collator` | 292 | Small and essential for parachain operators. |
| `page-scheduler` | 360 | Small, useful to power users scheduling on-chain dispatches. |
| `page-signing` | 556 | Essential security utility for message signing and verification. |
| `page-extrinsics` | 480 | Commonly used by developers and power users; also supports decoding. |
| `page-storage` | 851 | Raw storage query builder; unique enough to justify keeping. |
| `page-coretime` | 2,295 | Modern, actively developed feature for on-demand parachain core sales. |
| `page-broker` | 1,148 | Complements `page-coretime`; essential infrastructure for the broker pallet. |

---

## Summary

| Priority | Packages | LOC Removed |
|---|---|---|
| High | `page-staking-legacy`, `page-democracy`, `page-council`, `page-tech-comm`, `page-fellowship`, `page-ambassador` | ~13,529 |
| Medium | `page-poll`, `page-calendar` | ~1,670 |
| Low | `page-rpc`, `page-runtime` | ~549 |
| **Total** | **10 packages** | **~15,748** |

The highest-ROI action is removing the three legacy v1 governance packages and `page-staking-legacy` — all explicitly labeled as obsolete in the routing configuration, with zero loss of functionality for any modern chain.
