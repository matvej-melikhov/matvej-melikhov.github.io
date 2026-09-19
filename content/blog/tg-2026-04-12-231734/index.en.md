---
title: "🔥 Week News – AI News of the Week"
date: 2026-04-12T23:17:34
tags: ["telegram", "week_news", "news"]
tg_link: "https://t.me/moving_to_ds/119"
tg_media: []
---

### ⏪️ Anthropic ⏩️

- Announced Claude Mythos – a model roughly 1.5 times more powerful than Opus 4.6 in coding and 10–15 percentage points better in agentic tasks. There is no public release yet – the model is restricted to Project Glasswing. Access has only been granted to select partners for finding vulnerabilities in critical infrastructure and software.

- Anthropic plans to develop its own AI chips to reduce dependence on Nvidia and Google. They expanded their partnership with Google and Broadcom, reserving infrastructure deliveries starting in 2027. By the way, they might indeed be having [infrastructure problems](https://t.me/seeallochnaya/3531) right now.

- A rumor circulated that the new version of Opus thinks noticeably less – allegedly up to minus 67% reasoning. Whether it's true or not is [unclear.](https://t.me/seeallochnaya/3540)

### ⏪️ Claude Code ⏩️

- Implemented the [Advisor strategy](https://claude.com/blog/the-advisor-strategy) – a Sonnet/Haiku model performs the task, while Opus steps in only for critical decisions. Cheaper while preserving quality.

- Moved planning to the cloud using the [/ultraplan command.](https://code.claude.com/docs/en/ultraplan) Faster code analysis and reduced local load.

- Sped up work on large codebases by 4x using [repowise,](https://github.com/repowise-dev) which efficiently analyzes dependencies and project structure.

### ⏪️ OpenAI ⏩️

- OpenAI is wrapping up work on Spud, a powerful model with restricted access (similar to Claude Mythos). The trend of gatekeeping SOTA models from the general public continues.

- GPT-5.4 Pro, together with the Aristotle system, [solved](https://arxiv.org/abs/2603.29961) two scientific problems, including Erdős problem #650, which had remained unsolved for over 60 years.

### ⏪️ Other ⏩️

- Elon Musk claimed that 7 models are simultaneously being trained on the Colossus 2 platform, including giant ones with 6 and 10 trillion parameters. We await releases from xAI.

- Scientists from ITMO [developed the ReplaceMe method,](https://arxiv.org/abs/2505.02819) which allows significantly speeding up LLM inference without fine-tuning.

- Andrej Karpathy [shared the LLM Wiki concept](https://uproger.com/karpati-sobral-vtoroj-mozg-na-llm/) – AI independently maintains a structured personal knowledge base in markdown format instead of classic RAG.

- Unsloth and Google Colab launched a [tool](https://t.me/data_analysis_ml/4950) for fine-tuning over 500 open-source models right in the browser.

- Qwen Code received an update and now supports multiple features, such as channels. On the bright side – you can use the flagship Qwen3.6-Plus for free, up to 1,000 requests per day. 

### ⏪️ New Models ⏩️

- Meta Muse Spark. Zuckerberg's new proprietary model – the first major release since Llama 4. According to [benchmarks,](https://t.me/seeallochnaya/3523) it looks very solid, perhaps even too solid.

- [MiniMax-M2.7.](https://huggingface.co/MiniMaxAI/MiniMax-M2.7) MoE 229B A10B, specializing in agentic and coding tasks. Competitive results against Claude Sonnet 4.5 and GPT-5 at significantly lower cost.

- [Z.ai GLM-5.1.](https://huggingface.co/zai-org/GLM-5.1) MoE 754B. According to benchmarks, it outperforms even Opus 4.6 with a much cheaper API.

- [GemOpus-4 26-A4B.](https://huggingface.co/Jackrong/Gemopus-4-26B-A4B-it-GGUF) A compact model based on Gemma 4 with community distillation of Opus logic.

- [Qwen3.5-27B Claude-4.6-Opus Distilled.](https://huggingface.co/Jackrong/Qwen3.5-27B-Claude-4.6-Opus-Reasoning-Distilled-v2-GGUF) A 27B distilled version of Qwen3.5 featuring Opus 4.6 reasoning distillation from the community.

- [Liquid AI LFM2.5-VL-450M.](https://huggingface.co/LiquidAI/LFM2.5-VL-450M) A 450M-parameter vision-language model for edge devices. Processes video at ~4 FPS, supports bounding boxes, multilingual capabilities, and function calling.