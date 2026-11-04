"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import styles from "./WaterHero.module.css";

const GAUGE_MARKS = [500, 400, 300, 200, 100, 0];

export default function WaterHero({ hero, water }) {
  const [prompts, setPrompts] = useState(0);
  const sendRef = useRef(null);

  const used = prompts * water.mlPerPrompt;
  const isFull = used >= water.bottleMl;
  const level = Math.min(used / water.bottleMl, 1) * 100;

  function send() {
    if (!isFull) setPrompts(prompts + 1);
  }

  function drain() {
    setPrompts(0);
    // The Drain button becomes disabled, so keep keyboard focus somewhere useful.
    sendRef.current?.focus();
  }

  let status = water.idle;
  if (prompts > 0) {
    status = `Prompts sent: ${prompts}. Water used: ${used} mL.`;
  }
  if (isFull) {
    status = `${status} ${water.full}`;
  }

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <div
        className={styles.water}
        style={{ "--level": `${level}%` }}
        aria-hidden="true"
      >
        <svg
          className={styles.wave}
          viewBox="0 0 1200 16"
          preserveAspectRatio="none"
        >
          <path d="M0 8 Q 75 0 150 8 T 300 8 T 450 8 T 600 8 T 750 8 T 900 8 T 1050 8 T 1200 8 V 16 H 0 Z" />
        </svg>
      </div>

      <ul className={styles.gauge} aria-hidden="true">
        {GAUGE_MARKS.map((mark) => (
          <li key={mark}>{mark}</li>
        ))}
      </ul>

      <div className={`wrap ${styles.content}`}>
        <div className={styles.lead}>
          <p className="label">{hero.kicker}</p>
          <h1 id="hero-heading">{hero.headline}</h1>
          <p className={styles.intro}>{hero.intro}</p>

          <div className={styles.actions}>
            <a className="button" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <Link className="button" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        <div className={styles.meter}>
          <p className={styles.readout} aria-hidden="true">
            {used}
            <span> mL</span>
          </p>
          <div className={styles.controls}>
            <button
              ref={sendRef}
              type="button"
              className="button button-solid"
              onClick={send}
              aria-disabled={isFull}
            >
              {water.button}
            </button>
            <button
              type="button"
              className="button"
              onClick={drain}
              disabled={prompts === 0}
            >
              {water.resetButton}
            </button>
          </div>
          <p className={styles.status} role="status">
            {status}
          </p>
          <p className={styles.note}>
            {water.note}{" "}
            <a href={water.sourceUrl}>{water.sourceLabel}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
