---
title: "⚡️ Useful Git Commands"
date: 2026-03-15T12:11:19
tags: ["telegram", "useful", "git"]
tg_link: "https://t.me/moving_to_ds/72"
tg_media: ["/images/posts/tg-2026-03-15-121119/photo_34@15-03-2026_12-11-19.jpg", "/images/posts/tg-2026-03-15-121119/photo_35@15-03-2026_12-11-19.jpg", "/images/posts/tg-2026-03-15-121119/photo_36@15-03-2026_12-11-19.jpg", "/images/posts/tg-2026-03-15-121119/photo_37@15-03-2026_12-11-19.jpg", "/images/posts/tg-2026-03-15-121119/photo_38@15-03-2026_12-11-19.jpg"]
---

- ✨ git stash / git stash pop
When you need to temporarily shelve uncommitted changes to switch to another branch or work on a different task.

- ✨ git commit --amend
When you need to modify or add to the most recent commit. 

- ✨ git push --force
When you need to force-push to the remote repository, overriding conflicts. Very commonly used after commit --amend. (Caution: you can overwrite other developers' commits if they have already pushed changes!)

- ✨ git reset --hard
When you need to roll back the repository to a specified commit (changes HEAD, clears staging area, and discards changes in the working directory).

- ✨ git rebase -i
When you need to rewrite commit history: squash commits, drop them, or reorder them.