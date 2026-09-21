import { useRef, useState } from "react";

interface AudioPlayerProps {
  src: string;
  /** How many times this clip may be played for this question. */
  maxPlays: number;
}

/**
 * Deliberately minimal: a single Play control (no pause/scrub), matching
 * exam-style listening conditions rather than a general media player. Once
 * a play starts it runs to completion; the number of allowed plays is
 * configurable per question via `maxPlays`.
 */
export function AudioPlayer({ src, maxPlays }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playsUsed, setPlaysUsed] = useState(0);
  const [progress, setProgress] = useState(0);

  const playsRemaining = maxPlays - playsUsed;
  const canPlay = playsRemaining > 0 && !isPlaying;

  function handlePlay() {
    if (!canPlay || !audioRef.current) return;
    audioRef.current.currentTime = 0;
    void audioRef.current.play();
  }

  function handleTimeUpdate() {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  }

  function handleEnded() {
    setIsPlaying(false);
    setPlaysUsed((n) => n + 1);
    setProgress(0);
  }

  return (
    <div className="rounded-card border-2 border-blue-100 bg-blue-100/40 p-5 sm:p-6">
      <audio
        ref={audioRef}
        src={src}
        onPlay={() => setIsPlaying(true)}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
      />
      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={handlePlay}
          disabled={!canPlay}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500 text-2xl text-white disabled:bg-blue-300"
          aria-label="Play audio"
        >
          &#9658;
        </button>
        <div className="h-3 flex-1 overflow-hidden rounded-full bg-blue-100">
          <div
            className="h-full rounded-full bg-blue-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      <p className="mt-3 text-base font-medium text-ink-soft">
        {playsRemaining > 0
          ? `Plays remaining: ${playsRemaining} of ${maxPlays}`
          : "No plays remaining for this question."}
      </p>
    </div>
  );
}
