---
title: 'DevLog 8-3'
description: 'MeGPT — Starting the Final Project'
pubDate: '2026-04-04'
---

## MeGPT: Getting Started

I've been working on MeGPT for about two months. The idea is from DevLog 6 — a ChatGPT UI clone where messages get routed to me through Discord and I type the replies. No AI, just me.

Users see a normal chat interface. Behind the scenes, their message goes to a Discord channel I control, I reply there, and it shows up in their browser.

---

## Basic Design

The frontend is Next.js. There's a sidebar, a message thread, and an input bar at the bottom. It's meant to look like ChatGPT — not a pixel-perfect copy, just familiar enough.

There's a typing indicator that shows while I'm replying in Discord. It's just three dots, but it makes the wait feel less weird.

---

## Message Routing: Web → Discord

Basic flow:

1. User sends a message
2. Frontend POSTs to `/api/send`
3. A Discord bot forwards it to a private channel, tagged with the user's info
4. I reply in Discord
5. The server picks up my reply and sends it back to the browser via SSE

I used `discord.js` for the bot. Each message gets sent as an embed with the user's email so I can track who sent what if multiple people are chatting at once.

The reply routing works but it's fragile. I filter by my own Discord user ID so only my replies get sent back, not the bot's messages. Edge cases like a user sending multiple messages before I respond still need some work.

---

## Auth and Hosting

Google OAuth through NextAuth. Users sign in before they can chat, which also makes session tracking easier — I just use their email to label messages in Discord instead of generating IDs.

Everything is hosted on Railway: the Next.js app and a Postgres container in the same project. The database stores conversation and message history so chats persist. Internal networking on Railway means the DB isn't exposed publicly.

---

## What's Next

- SSE reconnect handling is rough, needs cleanup
- Need to think through what happens when multiple users are messaging at the same time

The hardest part isn't really technical at this point. It's figuring out how to make my replies feel like an AI — response length, tone, timing. I'm going to have to actually act.
