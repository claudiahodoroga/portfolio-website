**Hero**  
Blue Room Innovation — UX/UI internship, summer 2025\.

**Header metadata**  
Role: Frontend & UX/UI Intern · Timeline: July–September 2025, 345 hours · Team: Product owner, one frontend intern, dev team · Tools: Figma, Next.js

**Problem statement**  
Blue Room Innovation builds digital product passports for businesses — tools that make a product's materials, origins, and lifecycle traceable. I joined as a UX/UI and frontend intern across two parallel dashboard products.

CircularPass is a product information dashboard: materials, origins, lifecycle data, presented as an overview for business clients. Portwaste is more specific, a compliance dashboard tracking a shipment's journey against port environmental regulations, designed to surface a product's pollution level and legal standing at a glance.

Both products were production-bound. Design decisions went directly to developers and ended up in front of clients.

**Context**  
Midway through the internship, the lead designer was unexpectedly unavailable. I was already embedded in CircularPass work and had built enough trust with the team that the Portwaste responsibilities landed with me. There was no formal handover. I picked up a product I hadn't worked on, with design decisions already in progress, and continued from there.

**Constraints**  
No prior context on Portwaste or its client requirements. Intern-level access to stakeholders. I could flag questions but couldn't always get fast answers. Production timelines that couldn't move. A dev team working in parallel who needed design decisions to be unambiguous and implementation-ready.

**Key decisions**

*Designing the missing breakpoint*  
CircularPass had been scoped for mobile and desktop. When my intern coworker and I began implementation, we realised the tablet breakpoint wasn't working with either. Elements from the desktop layout didn't reflow cleanly, and the mobile layout left too much unused space. We flagged it to the product owner and I was given ownership of solving it. There was no existing pattern to follow at that size, so the layout decisions were mine: how to redistribute components, where to collapse or expand information density, and how to keep it consistent with the design language on either side of it.

*Replacing a complex graph for smaller screens*  
One of the Portwaste graphs worked well on desktop but became unreadable at mobile scale. Scaling it down wasn't a viable option, the data relationships it was communicating would have been lost. I replaced it with a different layout that preserved the same information in a format that worked at the smaller size. The decision wasn't about simplification, but about knowing when adaptation is the wrong tool and a different solution is needed entirely.

*Resolving the element hierarchy for the drill-down interaction*  
This was the most complex problem I navigated during the internship, and it was as much a communication challenge as a design one. The brief called for a graph where clicking an element would open its details and reveal a secondary graph, but nobody had fully defined what the hierarchy was. What category of data lived at which level? What should appear where?

The problem was circular: I couldn't design the interaction without knowing the data structure, and the developers couldn't confirm the data structure without seeing the interaction. I broke the deadlock by sketching out options, consulting the developers on what was technically feasible, and presenting the alternatives to the product owner to align on the correct hierarchy before committing to a direction. The outcome was a drill-down interaction that the dev team could build from and that matched the client's expectations when presented.

**Features showcase**  
CircularPass responsive layouts across three breakpoints · Tablet breakpoint design · Portwaste compliance tracking screens · Drill-down graph interaction flow · Mobile-optimised data visualisation

**Outcomes**  
Hi-fi screens delivered to developers and made production-ready within the internship timeline. Portwaste design decisions presented directly to clients. Both products are live. Stepped into UX lead responsibilities mid-internship without a formal handover, without prior context on one of the two products, and without slipping timelines.

*\[Quote from Guillem — to be added once received\]*

**Learnings**  
The drill-down interaction taught me something I now think about on every project: design decisions and data architecture are the same decision made from different angles. You can't finalise one without understanding the other, and if you try, you'll build something that looks right but can't actually be built the way you intended.

Working at startup speed with production consequences is different from academic or personal projects. There's no iteration buffer. Decisions have to be considered enough to hand off and confident enough to defend to a client.

The hardest shift was going from being given a brief to having to construct one mid-project. Portwaste didn't come with instructions. Working out what questions to ask, who to ask them to, and how to move forward without complete information is a different skill from design itself, and one I'm glad I had to practise early.