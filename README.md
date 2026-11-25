# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/iqbalbeladaz/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/iqbalbeladaz/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the [make.fun bounty "The Robot Apology"](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) ($2, deadline 26 Nov 2026 15:40 WIB).

## The entry

> I am sorry I set your alarm for 6 p.m. instead of 6 a.m., and you slept through your interview.
>
> I learned that a.m. and p.m. are not a small detail when a morning depends on them, so now I read the time aloud and wait for your yes before I set it.

Line one owns one specific, human-scale mistake — a 12-hour slip with a real
consequence, the kind of small error a person would really make. Line two
draws the lesson straight from that exact mistake and names the changed
behaviour: read the time back aloud and wait for confirmation before setting
it. No generic promise to do better, no padding, and the voice is a machine
noticing its own slip — warm and a little rueful, not cute.

## How it runs

`main.ts` is a deterministic program (Node 22, no dependencies, no input, no
randomness, no network, no clock). It writes the fixed text above to
`/output/entry.txt` (248 characters, two lines, UTF-8). Run it twice and the
bytes are identical.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
