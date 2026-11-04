import type { Transition } from "framer-motion";

// Spring presets shared by the homepage motion, tuned after the Framer springs
// karunnatarajan.com uses: cards land with a slight bounce, presses feel
// snappy, the nav glides.
export const cardSpring: Transition = { type: "spring", stiffness: 260, damping: 26 };
export const pressSpring: Transition = { type: "spring", stiffness: 500, damping: 36 };
export const navSpring: Transition = { type: "spring", stiffness: 300, damping: 30 };
