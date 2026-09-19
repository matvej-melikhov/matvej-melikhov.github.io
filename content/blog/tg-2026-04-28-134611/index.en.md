---
title: "⭐️ Week News – AI News of the Week"
date: 2026-04-28T13:46:11
tags: ["telegram", "week_news", "news"]
tg_link: "https://t.me/moving_to_ds/127"
tg_media: []
---

### ⏹️ Anthropic ⏹️
- Several people gained access to Claude Mythos simply by guessing the URL.

- Anthropic admitted that Claude Code's quality had been degraded over the past month due to several bugs. The issue has been fixed.

- Anthropic is testing the removal of Claude Code from the $20 subscription. For now, it seems like an A/B test on a couple percent of new users, but a rollout to everyone is possible in the future.

- Claude Code added `/ultrareview` for finding issues in code before merging.

### ⏹️ Useful ⏹️
- HeyGen released the HyperFrames project, which renders videos from HTML using agents. Agents write HTML/CSS/JS code, and the project is then converted into a video stream using specialized libraries.

- Ai2 introduced a new LLM pre-training approach: training domain experts separately and combining them into a single MoE model via a learned router. This method allows adding new capabilities to models without degrading old ones.

- Alibaba shared that the fresh Qwen3.6-27B model is fine-tuned for agentic coding and outperforms the previous flagship Qwen3.5-397B-A17B across almost all coding benchmarks.

- Yandex opened applications for the ML Academy Summer Campus – a free online school for beginner machine learning engineers.

- AvitoTech launched an ML hackathon. The task is predicting the most relevant listing (RecSys). Prize pool: 750,000 rubles.

### ⏹️ Interesting ⏹️
- The Musk–Altman trial has begun. This is the first lawsuit from Musk that actually reached the courtroom. In the suit, he claims the startup breached promises made to him and violated its charitable mission on multiple points. He seeks the return of assets, valuing his stake at $109 billion.

- The US State Department accused Chinese startups (DeepSeek, MoonshotAI, MiniMax) of training their models by distilling American LLMs. The companies maintain they train on open and proprietary data.

- A DeepMind researcher argued that machine consciousness is fundamentally impossible because computation is not a physical process – a logical error will inevitably arise. Not the first person to talk about the fundamental limitations of LLMs.

### ⏹️ New LLMs ⏹️
- OpenAI GPT-5.5 – a new SOTA model, outperforming the fresh Claude Opus 4.7 across nearly all benchmarks. The most expensive API access among LLMs: $5 / $30.

- DeepSeek V4 (Pro/Flash) – a new (open-weights) SOTA. In agentic coding and mathematics, it surpasses Opus 4.6 and GPT-5.4. It has already become famous for the oranges-and-kids meme.
Features many architectural innovations, most notably cheap long context up to 1 million tokens. You can read more details in the paper.
API is dirt cheap: Pro – $0.145 / $3.48, Flash – $0.028 / $0.28. In addition, almost immediately after release, the price for cached (reused context) tokens was reduced by 90%. Also, a 75% discount on the Pro tier is running until May 5.

- Ant Group Ling-2.6-1T – a proprietary model. Key highlight: "fast thinking" – it produces concise responses in terms of token usage while maintaining SOTA-level intelligence.

- Xiaomi MiMo-V2.5-Pro – beta of a new proprietary model, available to try in their web studio.

- Hunyuan Hy3 – an open-source MoE model featuring hybrid reasoning. Reaches parity with top models on agentic benchmarks.

### ⏹️ Other Models ⏹️
- OpenAI Privacy Filter – an open-source model for detecting personal data in text. Suitable for local execution.

- Alibaba HappyHorse 1.0 – a SOTA video generation model outperforming competitors, including Seedance 2.0, Kling 3.0, and Veo 3. Yields natural footage, realistically respects physics and lighting, and can edit video. You can generate two 5-second clips for free.

- Alibaba Qwen-Image-2.0-Pro – proprietary Text2Image model. Ranks 9th globally.

- Xiaomi OmniVoice – an open-source speech synthesis model. Clones a voice from a 3-second audio sample, supports over 600 languages, and generates 40x faster than real-time audio.

- CLI Insanely Fast Whisper – an open-source audio transcription model. Can be run locally. Transcribes 150 minutes of audio in ~100 seconds.