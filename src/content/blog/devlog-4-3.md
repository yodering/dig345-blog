---
title: 'DevLog 4-3'
description: 'Create a database-driven application using Node/Express/MongoDB'
pubDate: '2026-02-19'
---

Use Node.js and MongoDB Atlas to create the back end for Big Feelings. Then publish your full-stack application on Vercel. Follow Modules 10.3 in Critical Web Design and Module 10.4 on the CWD Wiki to complete your DevLog. Copy and paste then complete the following objectives in devlog-4-3.mdx in your DevLog (Instructions).

Fork the criticalwebdesign/big-feelings-starter and update it per Module 10.3.
Modify the project structure, install dependencies, and run the project.
Create a MongoDB Database (CWD 10.4)
Create an .ENV file, add your connection credentials, and test your database connection (CWD 10.4)
Add routes to get data from MongoDB (CWD 10.4)
Allow Visitors to Submit Feelings (CWD 10.4)
Add an environment variable and deploy your project on Vercel. (CWD 10.4) https://big-feelings-starter-indol.vercel.app/
Read 📚 ICE Is Going on a Surveillance Shopping Spree, EFF 2026. Post a reading response in your DevLog per information in the Assignments. ✏️

Write a reflection explaining what you did learned in your DevLog. Link to sources. ✏️
Publish it on Vercel and turn it in by posting the direct link to this DevLog on Moodle

Summary
This EFF article by Cooper Quintin documents ICE's dramatic expansion of its surveillance infrastructure under the current administration. With a 2025 budget of $28.7 billion — nearly triple the prior year — ICE has been signing contracts with a wide range of private tech companies to build what the author describes as one of the largest domestic surveillance systems in history. The spending covers phone-cracking tools (Cellebrite, Magnet Forensics), spyware (Paragon's Graphite), social media monitoring platforms (Pen Link's Webloc/Tangles, Fivecast's ONYX, ShadowDragon), automated license plate readers, facial recognition (Clearview AI), iris scanning, cell-site simulators, and Palantir's ImmigrationOS to tie it all together. The article argues that ICE's surveillance net has extended well beyond undocumented immigrants to ensnare asylum seekers, green card holders, naturalized citizens, and even U.S. citizens by birth, and that the agency has openly stated intentions to monitor political dissent.

Quote
"On a long enough timeline, any surveillance tool you build will eventually be used by people you don't like for reasons that you disagree with."

Comment
What's striking about this piece isn't just the scale of the surveillance apparatus — it's how deeply privatized it is. ICE isn't building these tools in-house; it's essentially outsourcing a domestic intelligence operation to a constellation of data brokers, spyware vendors, and AI companies. This creates a kind of accountability vacuum: the agency can gather location data, social media histories, and biometrics without warrants by simply purchasing that data from private companies who collected it "voluntarily" through apps and services. The legal frameworks that were supposed to protect civil liberties were designed around government actors, not this hybrid public-private model. The Palantir piece especially illustrates this — linking IRS data, immigration records, and social media into a unified profile wasn't illegal under any individual data collection law, but the synthesis itself is what makes it so alarming.

Discussion Question
When private companies collect and sell data that governments could never legally gather themselves, does the legal distinction between private and public surveillance still hold any meaningful weight? And as software developers and engineers, what responsibility do we have when the tools we build — or the APIs we expose — become inputs to systems like this?

Related Work
Seeing Like a State (2019 interactive) / The Anatomy of an AI System by Kate Crawford and Vladan Joler — this large-scale data visualization maps the full supply chain of an Amazon Echo, tracing it back through labor, raw materials, and data infrastructure. It's relevant here because Quintin's article is essentially performing a similar exercise for ICE's surveillance stack: exposing the vendors, contracts, and data pipelines that are invisible to the people being watched. Both works argue that these systems aren't neutral infrastructure — they're the materialization of specific political and economic power relationships. Crawford's broader work on the "anatomy" of AI systems asks us to look at the full lifecycle of a technology rather than just its interface, which feels directly applicable to tools like Palantir's ImmigrationOS, where the "product" only makes sense in the context of everything feeding into it.
