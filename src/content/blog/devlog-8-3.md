---
title: 'DevLog 8-3'
description: 'MeGPT — Starting the Final Project'
pubDate: '2026-04-04'
---

## MeGPT: Getting Started

This week I finally started building MeGPT — the project I've been planning since DevLog 6, where I outlined the concept: a ChatGPT UI clone where every user message is secretly routed to me, and my typed reply is what appears in the chat. No AI. Just me, pretending.

The core idea is still the same "Wizard of Oz" prototype I described earlier. Users land on a page that looks and feels like ChatGPT — input box at the bottom, message bubbles, a blinking cursor while "the AI thinks." But behind the scenes, their message hits an API route that forwards it to a private Discord server I control. I reply in Discord, and that reply gets pushed back to the user's browser in real time.

---

## Basic Design Implementation

I started with the frontend since that's what sells the illusion. The UI is a Next.js app with a simple chat layout: a dark sidebar (placeholder for conversation history), a main message thread, and a sticky input bar at the bottom. The message bubbles use the same general visual language as ChatGPT — user messages right-aligned with a subtle background, "AI" responses left-aligned with no background. I'm not pixel-matching, but it needs to feel immediately familiar.

Getting the typing indicator right was important. When a user sends a message, three animated dots appear on the "AI" side while I'm composing my reply in Discord. This is mostly just a loading state, but it matters — it sets the latency expectation and makes the wait feel intentional rather than broken.

---

## Message Routing: Web → Discord

The most interesting technical piece this week was wiring up the Discord integration. Here's the basic flow I got working:

1. User submits a message in the browser
2. The frontend POSTs to a Next.js API route (`/api/send`)
3. That route uses the Discord bot to send the message to a specific channel in my private server, formatted with the conversation ID so I can track which user sent it
4. I reply in Discord
5. A webhook listener on the server picks up my reply and pushes it back to the frontend via Server-Sent Events (SSE)

The Discord bot setup was straightforward — I used `discord.js` to create a bot, gave it permission to read and send messages in one dedicated channel, and stored the bot token in `.env`. Each incoming user message gets sent as a Discord embed that includes the user's session ID and their message text. That way if multiple people are chatting at once, I can tell who's who.

The reply routing is the trickier part. My current approach listens for messages I send in Discord (filtering by author ID so it only catches my replies, not the bot's own messages) and maps them back to the correct SSE stream using the session ID embedded in the original message. It works, but it's fragile — I need to be more careful about edge cases like users sending multiple messages before I reply.

---

## Auth and Hosting

Google OAuth is already wired up using NextAuth. Users have to sign in with their Google account before they can chat, which also solved the session identity problem — instead of generating random session IDs, I can just use the authenticated user's email to label messages in Discord. It's a lot cleaner.

For hosting I'm using Railway instead of Vercel. The whole project lives in one Railway project: the Next.js app as one service, and a Postgres container alongside it. Having the database on the same platform as the app keeps things simple — no external connection strings to manage, and Railway's internal networking means the DB isn't exposed publicly. I set up the schema with a `conversations` table and a `messages` table so chat history persists across sessions.

---

## What's Next

The core stack is working end-to-end. Next steps:

- Clean up the SSE connection handling — reconnects aren't graceful yet
- Think through the multi-user problem more carefully before I demo this to anyone

The thing that keeps surprising me is how much of the work is just maintaining the illusion at the interface level. The technology is almost secondary to the question: *what makes this feel like an AI?* Typing delay, response length, tone. I'm going to have to be a convincing actor.
