"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { whenSplashDone } from "@/lib/splash";

// Each role carries its article ("an industrial designer").
const ROLES = [
  { a: "a", w: "UX designer" },
  { a: "a", w: "product designer" },
  { a: "an", w: "industrial designer" },
  { a: "a", w: "builder" },
];
const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 1600;

// A line under the hero headline that types each of my roles, holds it, then
// deletes it and moves to the next, forever. Starts once the headline has
// risen in (startDelay, after the splash). Reduced motion: a static line.
export default function TypedRoles({ startDelay = 1800 }: { startDelay?: number }) {
  const reduce = useReducedMotion();
  const [text, setText] = useState("");
  const [article, setArticle] = useState("a");

  useEffect(() => {
    if (reduce) return;
    let timer = 0;
    let role = 0;
    let len = 0;
    let deleting = false;
    const step = () => {
      const word = ROLES[role].w;
      if (!deleting) {
        len++;
        setText(word.slice(0, len));
        if (len === word.length) {
          deleting = true;
          timer = window.setTimeout(step, HOLD_MS);
          return;
        }
        timer = window.setTimeout(step, TYPE_MS);
      } else {
        len--;
        setText(word.slice(0, len));
        if (len === 0) {
          deleting = false;
          role = (role + 1) % ROLES.length;
          setArticle(ROLES[role].a);
          timer = window.setTimeout(step, 350);
          return;
        }
        timer = window.setTimeout(step, DELETE_MS);
      }
    };
    const cancel = whenSplashDone(() => {
      timer = window.setTimeout(step, startDelay);
    });
    return () => {
      cancel();
      window.clearTimeout(timer);
    };
  }, [reduce, startDelay]);

  return (
    <p className="mt-6 text-sv-dark/55" style={{ fontFamily: "var(--font-fira-code)", fontSize: "clamp(13px, 1.3vw, 16px)" }}>
      <span className="sr-only">UX, product and industrial designer, and builder.</span>
      <span aria-hidden>
        <span className="text-sv-dark/35">&gt; </span>
        {reduce ? (
          <span className="text-sv-indigo">{ROLES.map((r) => r.w).join(" · ")}</span>
        ) : (
          <>
            designing as {article}{" "}
            <span className="text-sv-indigo">{text}</span>
          </>
        )}
        {!reduce && <span className="typed-caret">|</span>}
      </span>
    </p>
  );
}
