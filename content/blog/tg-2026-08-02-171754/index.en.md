---
title: "🧠 AI for a Personal Knowledge Base"
date: 2026-08-02T17:17:54
tags: ["telegram", "llm_wiki"]
tg_link: "https://t.me/moving_to_ds/138"
tg_media: []
---

A couple of months ago, I wrote my bachelor's thesis on knowledge systematization using AI. I based it on the fresh [LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f) pattern by Andrej Karpathy.

It ended up as a very powerful system combining:

- 🌟 The convenience of 💎 **Obsidian**  
- 🌟 The power of 💎 **Claude Code**  
- 🌟 The reliability of my custom **harness** (skills, hooks, and deterministic scripts)  

And it worked remarkably well. For those interested, here is the project repository – [karpathy-llm-wiki](https://github.com/matvej-melikhov/karpathy-llm-wiki) (I'd appreciate your ⭐️).

However, as often happens, the more feature-packed a tool becomes, the heavier and less flexible it gets.
Frankly speaking, to perform simple operations on text documents in a personal knowledge base, there is no need to use heavyweight models like Claude Opus or even Sonnet. Sure, they provide the best quality, but they run noticeably slower than alternatives. On top of that, a Claude subscription isn't the cheapest, not to mention the periodic risk of getting banned by Anthropic.

Therefore, to maintain my knowledge base now, I use the simplest possible setup:
💎 **Obsidian +** **💎** **Gemini 3.6 Flash** (via antigravity-cli).

The results make me happy:

- 🌟 Runs virtually an order of magnitude faster than Claude.
- 🌟 Successfully handles all my current tasks (source understanding, Q&A, synthesizing new pages).
- 🌟 Additionally generates great covers/illustrations for pages using 🍌 Nano Banana.

In short, **simple is better than complex**. If you're looking for a simple setup for your notes, I recommend giving it a try.