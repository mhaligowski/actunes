import { useEffect, useState } from "react";
import * as Tone from "tone";
import { Melody, transform } from "./transform";

interface Player {
  isPlaying(): boolean;
  play(melody: Melody): void;
  stop(): void;
}

export default function usePlayer(): Player {
  const [synth, setSynth] = useState<Tone.AMSynth>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    Tone.start();
    Tone.Transport.bpm.value = 60;
    Tone.Transport.stop();
    const _synth = new Tone.AMSynth({
      envelope: {
        attack: 0.09,
        decay: 0.0795,
        release: 0.1,
        releaseCurve: "step",
      },
    }).toDestination();
    setSynth(_synth);
  }, []);

  return {
    isPlaying: () => isPlaying,
    play: (melody: Melody) => {
      Tone.start();
      Tone.Transport.stop();

      Tone.Transport.scheduleOnce((t) => {
        Tone.Transport.cancel(0);
        Tone.Transport.stop();
        setIsPlaying(false);
      }, "+0:0:32");

      transform(melody)
        .map((s) => {
          return {
            note: s.note,
            duration: `0:0:${s.duration * 0.75}`,
            time: `+0:0:${s.time}`,
          };
        })
        .forEach((n) =>
          Tone.Transport.scheduleOnce((t) => {
            synth!.triggerAttackRelease(n.note, n.duration);
          }, n.time)
        );

      setIsPlaying(true);
      Tone.Transport.start();
    },
    stop: () => {
      Tone.Transport.stop();
      setIsPlaying(false);
    },
  };
}
