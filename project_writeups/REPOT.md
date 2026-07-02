**Hero**  
 RePot: find your plants a temporary home.

**Header metadata**  
Role: Designer & Developer (solo) · Timeline: 4 weeks · Team: Solo \+ illustration collaborator · Tools: Figma, Android/Kotlin

**Problem statement**  
My mother has so many plants. When she goes on vacation, her only solution is to send a WhatsApp message around and hope someone can come over to water them. There are no structured alternatives, just favours, crossed fingers, and the occasional plant left behind after a move.

Existing apps like Planta solve care scheduling. They don't solve the human problem: finding someone you can trust to temporarily take over. The closest analogy is Rover, the pet-sitting platform. But with RePot, nobody is entering your home. You arrange a meetup, hand over the plant, and trust that it comes back better than if you’d left it alone.

**Who this is for**  
RePot is designed for people who are genuinely attached to their plants. Not casual owners, but the kind of person who sings to them while watering. The primary user is older women, a demographic that stays largely forgotten in product thinking despite being some of the most dedicated plant carers around. I started designing for my mother. Then I realised I was designing for a lot of mothers.

**Hypothesis**  
Plant lovers would trust a stranger to care for their plants temporarily if the social context felt close enough — friend of a friend — and if accountability was built into the handover process from the start.

**User research**  
18 respondents, primarily 18–49, with representation across 35–64.

Plant ownership is near-universal: flowers and plants make up over 75% of what people have at home. Most people who have had to leave a plant behind either gave it away or left it in the house. Passive resignation is the default solution.

When asked whether they'd trust someone outside their immediate circle to care for their plants, 80% said yes — under the right conditions. The trust signals that mattered most, in order: demonstrating genuine love for plants, a personal recommendation from someone they know, and regular updates during the handover.

This directly shaped the design. The trust architecture in RePot mirrors exactly what users said they needed.

**Key decisions**

*Layered trust over a single verification*  
A profile photo and a bio aren't enough. The doubt users feel isn't about identity — it's about competence and care. RePot stacks multiple trust signals: invite-only access so the network stays friend-of-a-friend, a plant gallery on every profile showing what someone already cares for, owner-set update frequency so accountability is agreed upfront, and post-handover reviews so the community builds its own record over time. Each layer addresses a different doubt.

*Invite-only as a deliberate growth constraint*  
This is a product decision, not a design one — and it shapes everything downstream. A closed network grows slower. That's intentional. The friend-of-a-friend model is what makes the trust architecture believable in the first place. RePot isn't for people who like plants. It's for plant lovers, and that distinction has to be enforced structurally.

*Illustrated avatars for a demographic that values privacy over presence*  
 The target user is less likely to use a real photo, more likely to engage with something personalised, and more protective of their privacy than younger users who grew up putting themselves online. Illustrated avatars solve all three things at once: they maintain visual cohesion, they feel personal without being exposed, and they're genuinely more appealing to this demographic. I don't know a single woman in her 50s who uses a selfie as a profile picture. I know plenty who would spend ten minutes designing an avatar.

**Features showcase**  
Invite and onboarding flow · Plant gallery on user profiles · Matching and meetup coordination · Owner-set update frequency · Daily photo updates via in-app chat · Post-handover review and rating · Community ranking system

**Outcomes**  
Designed and developed end-to-end as a solo project. Launching first in Spain through existing family and community networks — a deliberate closed pilot that mirrors the invite-only philosophy of the product itself. User testing in progress.

**Learnings**  
The illustrated plant system turned out to be more complex than anticipated at scale. A wide variety of plant species means a wide variety of illustrations, and consistency is hard to maintain without a proper system behind it. One direction I'm exploring: training a generative model on the illustrator's style so new plants can be produced on demand without breaking visual cohesion.

The harder lesson was learning to stop fighting the developer/designer divide. Early on I kept switching modes — designing something I couldn't build, then simplifying it to something I could. What resolved it was letting the product thinker lead. Once I had a clear product decision, the design and the engineering both had something to follow.

