---
title: "⚡ Weekly News – A New Format"
date: 2026-04-03T16:09:51
tags: ["telegram", "week_news", "news"]
tg_link: "https://t.me/moving_to_ds/107"
tg_media: []
---
Rounding up the biggest news in the AI/ML world from the past week.

### Claude Code Source Code Leak

An Anthropic developer accidentally published a file during an npm release from which all source code was easily reconstructed — 1,906 TypeScript files and roughly 500k lines of code. The leaked code sparked immense buzz, and within days open-source enthusiasts spun up alternatives based on it — such as [OpenCode](http://github.com/Gitlawb/openclaude) and [ClawCode](https://t.me/machinelearning_interview/2666).

Anthropic is doing everything they can to scrub traces of the leak, including issuing DMCA takedowns against repositories on GitHub.

### Cursor 3

Cursor 3 is officially transitioning away from the AI-IDE paradigm toward an AgentFirst paradigm. They redesigned the Agents Window — now you can run multiple agents in parallel within a single interface. At the same time, the code editor remains intact, so you can still edit code manually.

### AutoClaw

[Z.ai](https://z.ai) introduced AutoClaw — an out-of-the-box turnkey solution for quickly and seamlessly spinning up OpenClaw without manual configuration. It comes with the GLM-5-Turbo model built in, but supports any other model as well.

### Claude Code: Computer Use

Anthropic introduced a new feature allowing the agent to control your computer like a human (viewing the screen, moving the mouse, clicking, and interacting with arbitrary applications). Currently running in preview on macOS.

### Claude Code: PowerUp

They added a new `/powerup` command that displays interactive tutorials for working with Claude Code — looks super handy.

### NEW MODELS

[DeepMind Gemma 4](https://deepmind.google/models/gemma/gemma-4/). Open-source, available in 26B and 31B variants, alongside ultra-lightweight E2B and E4B models specifically tailored for edge devices. It has already claimed the #1 spot among US open-weights models. The larger versions match the quality of Chinese competitors 20–30 times larger (GLM-5, Kimi-K2.5-Thinking). Available in GGUF format for local deployment.

**Alibaba Qwen 3.6-Plus**. Available via API and web. The new flagship model, successor to the Qwen 3.5 family. Read more [here](https://t.me/ai_machinelearning_big_data/9805).

[Z.ai](https://z.ai) **GLM-5-Turbo & GLM-5V-Turbo**. Available via API. Models optimized for agentic workloads in OpenClaw. The former is text-only, while the latter handles images, video, and text. In several benchmarks, it [outperforms even Claude Opus 4.6](https://habr.com/ru/news/1018220/).

[H Company Holo3](https://huggingface.co/Hcompany/Holo3-35B-A3B). Open-source. Models built specifically for GUI automation. Holo3-122B-A10B achieved SOTA results on the OSWorld-Verified benchmark.

[LiquidAI LFM2.5-350M](https://huggingface.co/LiquidAI/LFM2.5-350M). Open-source. An agentic model with only 350M parameters. Perfect for edge devices: local document processing, lightweight agent workflows.

**Google Veo 3.1 Lite**. Available via API. A more accessible video generation model. You can test it out in [Google AI Studio](https://aistudio.google.com/prompts/new_video).

**Alibaba Wan 2.7-Image**. Available via API. Next-generation image generation model focusing on ultra-realistic face generation, precise color reproduction, and fine-grained detail editing. Try it out [here](https://create.wan.video/generate/image/generate?model=wan2.7-pro).