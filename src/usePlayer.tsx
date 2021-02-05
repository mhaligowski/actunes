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

  useEffect(() => {
    Tone.Transport.bpm.value = 100;
  }, []);

  return {
    isPlaying: () => {
      return !(synth == null);
    },
    play: (melody: Melody) => {
      const _synth = new Tone.AMSynth({
        envelope: {
          attack: 0.09,
          decay: 0.0795,
          release: 0.2,
          releaseCurve: "step",
        },
      }).toDestination();

      _synth.onsilence = (i) => {
        i.disconnect();
        i.dispose();
        Tone.Transport.cancel();
        Tone.Transport.stop();
        setSynth(undefined);
      };

      const durationMultiplier = 0.8;
      transform(melody).forEach((note) => {
        _synth.triggerAttackRelease(
          note.pitch,
          `0:0:${note.value * durationMultiplier}`,
          `+0:0:${note.start}`
        );
      });

      setSynth(_synth);
    },
    stop: () => {
      synth!.disconnect();
      synth!.dispose();

      Tone.Transport.cancel();
      Tone.Transport.stop();
      setSynth(undefined);
    },
  };
}
