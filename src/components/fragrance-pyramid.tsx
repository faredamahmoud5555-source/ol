"use client";

import type { Note } from "@/lib/data";
import { Reveal } from "@/components/reveal";

function NoteRow({ label, notes, delay }: { label: string; notes: Note[]; delay: number }) {
  return (
    <Reveal delay={delay} y={16}>
      <div className="border-b border-line py-6">
        <p className="text-eyebrow text-brass">{label}</p>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
          {notes.map((n) => (
            <div key={n.name}>
              <span className="font-display text-lg">{n.name}</span>
              {n.latin && <span className="ml-2 text-xs italic text-ink/40">{n.latin}</span>}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function FragrancePyramid({
  notes,
}: {
  notes: { top: Note[]; heart: Note[]; base: Note[] };
}) {
  return (
    <div>
      <NoteRow label="Top Notes" notes={notes.top} delay={0} />
      <NoteRow label="Heart Notes" notes={notes.heart} delay={0.08} />
      <NoteRow label="Base Notes" notes={notes.base} delay={0.16} />
    </div>
  );
}
