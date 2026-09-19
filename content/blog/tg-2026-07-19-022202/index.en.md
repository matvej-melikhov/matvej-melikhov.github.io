---
title: "Magic Studio"
date: 2026-07-19T02:22:02
tags: ["telegram"]
tg_link: "https://t.me/moving_to_ds/136"
tg_media: ["/personal-site/images/posts/tg-2026-07-19-022202/photo_75@19-07-2026_02-22-02.jpg", "/personal-site/images/posts/tg-2026-07-19-022202/photo_76@19-07-2026_02-22-02.jpg"]
---

For a very long time, I dreamed of Telegram adding markdown-formatted messages: native headers, formulas, inline illustrations, etc. I thought it would never happen. But...

A month ago, Telegram [added](https://t.me/xor_journal/9509) rich messages (essentially markdown). Only for bots. So the idea came up to make a service similar to [@Posted](https://t.me/Posted) (if anyone knows it), allowing users to create posts in the new rich format (a bot posts on your behalf in the channel).

In the end, my colleague and I sat down to ~~vibecode~~ build the project. We created an MVP and it turned out really great, like a full-fledged post studio. Most importantly, it gave the unique ability to write posts in the new format back when regular users and channels didn't have that option.

### Features:

- A convenient editor with AI features
- Scheduled posting
- Multi-channel management
- Premium emoji support
- Works completely without a VPN

And we had planned so much more. You can test out the latest version here – [**Magic Studio v1.0**](http://161.104.32.130/prod/editor).

And then, last Monday, [news](https://t.me/technomedia/13286) broke that Telegram is rolling out this feature absolutely everywhere: in DMs and in channels. And they did it really well: sleek UI, they even stole the AI features :(

On the downside, functionality is heavily restricted for non-premium users. And the styling itself is currently somewhat limited.

It's a bummer. It felt like with their development pace, they'd either take forever or never do it at all. Especially considering how raw the rich-text rendering still looks (I filed several issues on their client myself), they rushed it.

Well, looks like the project will have to be shelved. Still, it was an interesting experience. I even rented S3 and a VPS, tinkered with CI/CD, and set up dev/prod environments – after all, we take things seriously around here.

### What do you think? Is it worth continuing?

- ❤ – Yes, after all the official feature requires Premium
- 😢 – No, whoever wants it will just buy Premium and write right in Telegram