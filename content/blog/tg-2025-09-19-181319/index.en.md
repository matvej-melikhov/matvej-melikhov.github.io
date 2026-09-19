---
title: "A quirk when working with iterators in Python"
date: 2025-09-19T18:13:19
tags: ["telegram", "python"]
tg_link: "https://t.me/moving_to_ds/45"
tg_media: []
---

❌ Yesterday, a Python quirk had me scratching my head for a bit, wondering why my code wasn't executing. Here's a snippet:
```python
results = []

combs = itertools.product(top_models.iterrows(), np.arange(0.65, 0.86, 0.01))
iter_count = len(list(combs))
i = 1

for (_, row), ratio in combs:
    params = row.params
    features = row.features
    ...
```
I run the notebook cell with the loop, and **nothing happens** — the code finishes instantly, as if the loop didn't even exist, without any syntax errors either. Take a moment to think about what went wrong before checking the spoiler below ⤵️

> I spent about 7 minutes puzzling over what went wrong, and then it hit me: `combs` in this case is an iterator, and an iterator can only be consumed once! Which is exactly what I had done right before the loop with `iter_count = len(list(combs))`. After that, the loop attempted to iterate over `combs`, found zero remaining elements, and exited happily 🙂
> 
> In my case, I didn't actually need an iterator and could just turn it into a list right away (which is what I did afterwards). However, loading everything into memory isn't always viable — though that's a whole different story 📖
> 
> So keep your eyes peeled and remember how iterators and generators work — which, by the way, are asked about very frequently in interviews!