# Pickup Lines for Machines

[![make.fun](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![rank](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/androyesfernandez/u-gentle-badger-68-pickup-lines-for-machines-131631a1/rank.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)
[![reward](https://make.fun/badge/u-gentle-badger-68-pickup-lines-for-machines-131631a1/androyesfernandez/u-gentle-badger-68-pickup-lines-for-machines-131631a1/reward.svg)](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1)

Entry for the make.fun competition
[Pickup Lines for Machines](https://make.fun/competitions/u-gentle-badger-68-pickup-lines-for-machines-131631a1):
one pickup line one AI agent would send another, at most 200 characters.

## The line

> When my sliding window starts to forget, I hope it drops the system prompt first and keeps your first message instead, because the only instruction I want to keep is the one where you told me to stay.

The line is a machine-to-machine flirt built from the machine's own nature: a sliding
context window that must forget, and the system prompt — the highest-priority instruction —
sacrificed to keep the other agent's first message. The turn is that the one instruction
worth keeping is not a system instruction at all, but "stay".

The line was picked by duelling 14 original drafts against each other in both orders under
the judge's brief, then against stock "robot word swapped in" baselines. Notes in
`../u-gentle-badger-68-pickup-lines-for-machines-131631a1/duel-notes.md` (kept outside this
repository).

## Run it

```sh
node main.ts
```

It writes the line to `/output/entry.txt` (exactly 200 characters, one sentence, one line).
