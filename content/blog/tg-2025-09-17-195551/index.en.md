---
title: "⚡️ 5 useful pandas functions I use often..."
date: 2025-09-17T19:55:51
tags: ["telegram", "python", "pandas"]
tg_link: "https://t.me/moving_to_ds/39"
tg_media: ["/personal-site/images/posts/tg-2025-09-17-195551/photo_18@17-09-2025_19-55-51.jpg", "/personal-site/images/posts/tg-2025-09-17-195551/photo_19@17-09-2025_19-55-51.jpg", "/personal-site/images/posts/tg-2025-09-17-195551/photo_20@17-09-2025_19-55-52.jpg", "/personal-site/images/posts/tg-2025-09-17-195551/photo_21@17-09-2025_19-55-52.jpg", "/personal-site/images/posts/tg-2025-09-17-195551/photo_22@17-09-2025_19-55-52.jpg", "/personal-site/images/posts/tg-2025-09-17-195551/photo_23@17-09-2025_19-55-52.jpg"]
---

### 🐼 .loc[lambda]
Handy when you want to filter a dataframe "on the fly" within method chains — especially if conditions depend on the dataframe itself and you want to avoid creating intermediate variables. Pairs perfectly with `.assign()` for a clean functional style.

### 🐼 df.explode()
Allows you to "unpack" lists within columns into separate rows. I often use it in the sequence: `groupby` → filter groups → `explode`: for example, after aggregating into a list, returning each value as an individual row while retaining the group relationship.

### 🐼 df.query()
Lets you filter rows using readable string expressions. A worthy alternative to `.loc` in straightforward cases — especially when you have many conditions and want to avoid cluttered parentheses and `&`/`|` operators. You can also reference environment variables and Python expressions using `@` and `engine='python'`.

### 🐼 df.assign()
Enables creating new columns within method chains without mutating the original dataframe. Great for intermediate computations — e.g. when sequentially engineering features, normalizing, ranking, or calculating deviations while keeping code concise.

### 🐼 .transform()
Applies a function across groups but returns an output matching the length of the original dataframe — meaning each row receives the value computed for its group. Perfect for adding group means, within-group ranks, or normalization.