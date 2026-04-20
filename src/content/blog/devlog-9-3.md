---
title: 'DevLog 9-3'
description: 'MeGPT — UI Design'
pubDate: '2026-04-19'
---

I didn't end up using Figma. My project was unique in the fact that I was trying to clone a ui. The design reference was ChatGPT itself. I opened it, looked at how things were laid out, and rebuilt from there.

For components I used [spell.sh](https://spell.sh/), which generates shadcn-style UI components. The text animations (thinking, loading, etc) come from this library. ChatGPT itself is built off Shadcn, so this was a perfect drop in addition.

The main priority was keeping related functionality together: auth stuff in one place, the chat pipeline in another, Discord routing isolated from the frontend.

The goal was for it to look like ChatGPT. Close enough so that nobody questions it.

Check it out here:
[megpt.boo](https://megpt.boo/)