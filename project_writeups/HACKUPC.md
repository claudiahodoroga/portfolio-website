**Hero**  
Split the Bill. HackUPC 2025, Revolut sponsor track, 4th place.

**Header metadata**  
Role: Designer & Frontend (visual implementation) · Timeline: 36 hours, HackUPC 2025 · Team: 4 people (2 frontend, 2 backend) · Tools: Figma, React, Gemini API, OCR

**Problem statement**  
Revolut has a bill splitting feature. It lets you input amounts and assign percentages and… That's about it. For anything more complex — an itemised restaurant receipt, a group trip, a tab where everyone ordered differently — you still have to do the maths yourself, usually in your notes app or on a calculator, before you come back to Revolut to actually move the money.

Standalone apps like Tricount solve the calculation problem, but they exist outside the payment flow entirely. You split the bill in one app, then go to another to pay. The opportunity was obvious: bring the splitting into Revolut itself, with OCR to scan receipts, automatic item assignment, and a voice AI assistant that lets you just say who owes what.

This year, Apple launched an equivalent feature in Apple Pay. Apple 1 \- Split The Bill team 0\.

**Context**  
This was our first hackathon. 36 hours, 700 participants, and a list of sponsor tracks to choose from. We spent more time than we should have trying to find the right problem. I kept coming back to Revolut. Strong visual identity, clear product, and a brief that was deliberately open: build something related to money that uses AI.

The bill splitting gap came from a Behance design that made me look at Revolut's existing feature differently. I pitched it to the team. The initial reaction was that it was too simple, too obvious, other apps already do this. I argued that for a first hackathon, a well-scoped idea we could actually finish was worth more than an ambitious one we couldn't. We went with it. The OCR, the voice assistant, the AI assignment logic, none of that was in the original pitch. It came from the team building on a foundation that was solid enough to extend.

**Key decisions**

*Defending a simple idea under pressure*  
The risk of a hackathon is swinging for something impressive and shipping nothing. I made a product call: a completable, demonstrable idea that we could extend was more valuable than a complex one we'd have to half-finish and explain away during the pitch. The team pushed back, but no better alternatives emerged, and we committed. The features that made the project distinctive — OCR scanning, voice-based splitting, Gemini-powered assignment — grew from that stable base, not in spite of the simplicity but because of it.

*Working within Revolut's design language rather than creating a new one*  
I designed the screens in Figma working directly on top of Revolut's existing visual system. This was a deliberate constraint: replicating their design language meant faster execution, higher visual fidelity, and a more credible pitch to the sponsor track we were targeting. The only net-new design decision was the AI assistant entry point, a feature that doesn't exist in Revolut's product yet, which had to feel native without a reference to follow.

*Building a fallback before we needed one*  
The backend was running locally on one teammate's laptop because getting it serverless was proving difficult. That's a fragile dependency. I built a local testing file early, partly for my own development workflow, partly because I didn't fully trust the setup under presentation conditions. The night before the demo, our teammate fell asleep with the backend running on his machine. We tried to wake him. He got up, looked at us, and lay back down. He remembered none of it. We ran the presentation from the testing file. It went smoothly.

**Features showcase**  
Receipt OCR scan and auto-fill · Item assignment to group members · Voice AI assistant for natural language splitting · Revolut-native UI design · Friends database integration

**Outcomes**  
4th place out of 17 teams in the Revolut sponsor track. Core OCR scanning, item assignment, and friend management fully implemented and demoed live. Voice feature structurally complete. AI assistant screen descoped due to time; the interaction was designed, the backend logic wasn't finished. We were honest about that in the pitch, and it didn't hurt us.

**Learnings**  
Backing a product decision under pressure and having it validated is a different experience from being right in theory. The team that thought the idea was too plain ended up building something they were proud of. That's worth remembering the next time an idea feels too simple.

The testing fallback wasn't luck, it was a decision made earlier in the process when the infrastructure risk was still manageable. Foresight in a chaotic environment looks like paranoia until it saves you.

The hardest moment wasn't technical. Midway through, a teammate needed help with React concepts I didn't know well enough to teach. I had to be honest that my brain wasn't working and ask her to manage while I focused on what I could actually deliver. Knowing when to protect your own output instead of trying to unblock someone else is an uncomfortable call, but it was the right one.

What I'd change: agree on backend hosting before writing a single line of code.