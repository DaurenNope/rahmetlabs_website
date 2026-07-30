# Hero Storyboard

## Synopsis
Rahmet Labs builds production AI systems. Not demos. Not prototypes. Systems that run your business. The hero should make visitors FEEL what it's like to go from manual chaos to AI-powered clarity.

## Visual Motif: "The System"
A geometric, wireframe structure that represents an AI system coming online. 
- Starts as scattered, disconnected nodes (chaos)
- As you scroll, nodes connect and form structure (intelligence)
- Final state: a pulsing, alive system with data flowing through it

## Three-Act Arc

### ACT 1: THE CHAOS (0-25% scroll)
**Scene:** Scattered particles, random connections, visual noise
**Text:** "Your operations are stuck in manual mode."
**Mood:** Tension, friction, something wrong
**Visual:** Red/orange particles flying randomly, no structure

### ACT 2: THE SPARK (25-50% scroll)  
**Scene:** Particles start slowing, finding each other
**Text:** "What if AI could handle the heavy lifting?"
**Mood:** Curiosity, possibility
**Visual:** Purple glow appears, particles begin to align

### ACT 3: THE FORMATION (50-75% scroll)
**Scene:** Wireframe structure emerges from chaos
**Text:** "Not another chatbot wrapper. Real systems."
**Mood:** Clarity, confidence
**Visual:** Blue energy, structure becomes visible, nodes connecting

### ACT 4: THE REVEAL (75-100% scroll)
**Scene:** Complete system, alive, pulsing with amber energy
**Text:** "That's what we build."
**Mood:** Trust, action
**Visual:** Amber glow, system fully formed, rings of data flowing
**CTA:** "Book a 15-minute call"

## Pacing Notes
- Each act has 3 lines of text, revealed one by one
- The orb/structure TRANSFORMS, not just changes color
- Flash/energy burst at the moment of formation (75%)
- Final state holds for 3+ seconds before CTA appears

## Technical Approach
- Canvas 2D for particles (simpler, faster than WebGL for this)
- GSAP ScrollTrigger for scrub timing
- Each particle has: position, velocity, connections, color
- Physics simulation for natural movement
