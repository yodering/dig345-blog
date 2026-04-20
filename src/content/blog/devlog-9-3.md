---
title: 'DevLog 9-3'
description: 'MeGPT — UI Design'
pubDate: '2026-04-19'
---

I didn't end up using Figma. My project was unique in the fact that I was trying to clone a ui. The design reference was ChatGPT itself. I opened it, looked at how things were laid out, and rebuilt from there.

For components I used [spell.sh](https://spell.sh/), which generates shadcn-style UI components. The text animations (thinking, loading, etc) come from this library. ChatGPT itself is built off Shadcn, so this was a perfect drop in addition.

The main priority was keeping related functionality together: auth stuff in one place, the chat pipeline in another, Discord routing isolated from the frontend.


Check it out here:
[megpt.boo](https://megpt.boo/)

---

The project got to a point where I felt like releasing it. However, before doing so, I wanted to implement site analytics.. I chose [umami.is](https://umami.is/) for this, a simple, open source site analytics plugin. I wanted to see how many concurrent active users I'd have, and this would do the trick. 

The day before I released this project on my instagram story, I decided to run a little test in a class. In my image processing class I gave the link out to the students (about 7 in the class) and had them all use the application at once. The messages were all routed correctly despite the concurrent messages.

After the successful test, I decided that it was time to release it to a wider audience. I posted it on my instagram story and got quite a few responses / traction. Still have to figure out a good rate limiting system though!

![Site analytics overview](/stats.png)

![Analytics stats 1](/stats-1.png)

![Analytics stats 2](/stats-2.png)