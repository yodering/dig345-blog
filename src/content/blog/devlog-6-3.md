---
title: 'DevLog 6-3'
description: 'Develop Your Final Project Concept'
pubDate: '2026-02-26'
---

---

## 1. Initial Research Links

- https://platform.openai.com/docs/api-reference — OpenAI API docs (for mimicking ChatGPT's interface patterns)
- https://core.telegram.org/bots/api — Telegram Bot API documentation
- https://firebase.google.com/docs/auth/web/google-signin — Google OAuth via Firebase
- https://supabase.com/docs — Supabase for auth + Postgres DB
- https://next-auth.js.org/ — NextAuth for Google login in Next.js

---

## 2. Potential Topics

This project is a "Wizard of Oz" AI chatbot — a ChatGPT UI clone where users believe they're talking to an AI, but every message is secretly routed to me via Telegram, and my typed responses are what appear in the chat. It explores human-computer interaction by simulating AI through a real human intermediary. The project raises interesting questions about perception, latency expectations, and what makes something feel "AI-like."

---

## 3. Related Articles

**Article 1: "The Wizard of Oz Prototyping Method" — Interaction Design Foundation**
https://www.interaction-design.org/literature/topics/wizard-of-oz

This article explains the classic UX research technique where a human operator secretly simulates a system's responses to test user behavior before the real system is built. It covers how this method has been used in AI, voice assistants, and chatbot design — directly relevant to this project's core concept.

**Article 2: "How Telegram Bots Work" — Telegram Blog**
https://telegram.org/blog/bot-revolution

This post introduces the Telegram Bot API and its webhook/polling architecture. It's foundational for understanding how to pipe user messages from a web frontend into a Telegram chat in real time, which is the technical backbone of this project.

---

## 4. Inspiring / Related Projects

**1. Clarkesworld Magazine AI Submissions Detector**
https://neil-clarke.com/a-concerning-trend/

An editor manually reviewed AI-generated submissions — the inverse of this project (human pretending to be AI vs. AI pretending to be human). Inspires thinking about the boundary between human and machine communication.

**2. "Is This Person Real?" — This Person Does Not Exist**
https://thispersondoesnotexist.com/

A site generating AI faces that feel indistinguishable from real ones. Similar energy: making something artificial feel authentic. Relevant as a design and conceptual reference for convincing UIs.

**3. Replika AI Chatbot**
https://replika.com/

A commercial AI companion app with a polished chat UI. Useful reference for how real-time chat interfaces are designed — typing indicators, message bubbles, response timing — all things I'll need to replicate convincingly.

---

## 5. New Skills / Technologies

- **Telegram Bot API + webhooks** — receiving messages from a web app and routing them to Telegram
- **Google OAuth / NextAuth** — implementing Google login in a Next.js app
- **Supabase or Firebase** — storing user sessions and chat history in a real database
- **WebSockets or SSE (Server-Sent Events)** — pushing my Telegram replies back to the frontend in real time without polling
- **Next.js API routes** — building the backend logic that bridges Telegram ↔ frontend

---

## 6. Summary

This project is a full-stack ChatGPT UI clone with a twist: rather than connecting to an AI model, every user message is forwarded to me via a Telegram bot, and my typed reply is delivered back to the user in real time. The app features Google OAuth login, a database to persist conversation history, and a polished chat interface that mimics ChatGPT closely enough that users may not immediately realize it's human-powered. Technically, the main challenges are real-time bidirectional messaging (WebSockets or SSE), the Telegram webhook pipeline, and making the latency feel natural enough to be convincing.

---

## 7. Random Idea from Idea Generator

**"Reverse Dictionary"** — A tool where you describe a concept in plain English and it returns the exact word. Users type things like "the smell of rain on dry earth" and get back "petrichor." Built with embeddings + vector search.

---

## 8. Random Idea from Idea Generator

**"Spotify but for Moods"** — Instead of searching by song/artist, users select an emotional state (anxious, nostalgic, numb, euphoric) and get a procedurally generated playlist. Mood is set via a visual slider interface, not text.

---

## 9. Random Idea from Idea Generator

**"Public Inbox"** — A shared email address anyone can write to, and all received emails are displayed live on a public website (sanitized). Like a collaborative art piece / social experiment around digital communication.

---

## 10. Concerns About the Final Project

The biggest technical concern is real-time message delivery — if there's noticeable lag between me receiving the Telegram message and my reply appearing in the chat, the illusion breaks immediately. I'm also worried about the project scope creeping: getting Google login, a database, a Telegram bot, and a convincing UI all working together in a short timeline is a lot of moving parts. Finally, I need to think through edge cases like what happens if multiple users message simultaneously and I can't keep up with replies.
