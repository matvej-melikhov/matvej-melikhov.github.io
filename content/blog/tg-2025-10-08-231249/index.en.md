---
title: "🐍 Python 3.14 is out! Here are the new features ranked by importance"
date: 2025-10-08T23:12:49
tags: ["telegram", "python"]
tg_link: "https://t.me/moving_to_ds/49"
tg_media: ["/images/posts/tg-2025-10-08-231249/photo_24@08-10-2025_23-12-49.jpg"]
---

- 1️⃣ **Official support for free-threaded Python builds**
The free-threaded build is an alternative interpreter version where the GIL is absent. Python 3.14 officially supports this build, paving the way for true thread-level concurrency on CPU-bound workloads.

- 2️⃣ **Template string literals (t-strings)**
A new string syntax complementing existing f-strings. While f-strings evaluate and interpolate variables immediately, t-strings create a template. This template can be preserved, passed to another function, and rendered later with the desired context.

- 3️⃣ **Lazy evaluation of type annotations**
Previously, referencing a type that wasn't defined yet (such as a forward reference to the class itself) required wrapping it in quotes (`'MyClass'`). Now Python defers the evaluation of annotations until they are actually needed.

- 4️⃣ **Official Android builds**
For the first time in Python history, there is official Android support: pre-built interpreter packages are now distributed for mobile devices. While you still can't just execute `.py` files out of the box directly on an Android OS, it provides tooling developers with a reliable foundation to build Python runtime environments and Android apps, as well as simplifying package installations via pip.

- 5️⃣ **Experimental JIT compiler**
Work continues on the Just-In-Time (JIT) compiler in Python 3.14. This experimental feature dynamically compiles frequently executed "hot" Python bytecode into machine code, potentially delivering significant speedups. It's not enabled by default yet and remains under active development and testing.

- 6️⃣ **Improved REPL**
Python's interactive shell now includes out-of-the-box syntax highlighting and smarter autocompletion, making quick experimentation and debugging much smoother.

😢 — Rest in peace, GIL