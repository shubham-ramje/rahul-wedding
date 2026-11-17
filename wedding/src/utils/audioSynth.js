/**
 * Royal Indian Classical Shehnai & Tanpura Web Audio Synthesizer
 * Plays an authentic, serene Indian wedding raga melody with Tanpura drone
 * No external file dependencies needed - works offline, instantly, zero lag!
 */

class RoyalShehnaiPlayer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.timer = null;
    this.droneGain = null;
    this.masterGain = null;
    this.currentNoteIndex = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.startTanpuraDrone();
    this.playShehnaiMelody();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.setTargetAtTime(0.001, this.ctx.currentTime, 0.5);
    }
  }

  startTanpuraDrone() {
    if (!this.ctx || !this.isPlaying) return;

    // Sa (C#3 ~ 138.59 Hz) and Pa (G#3 ~ 207.65 Hz) drone harmonics
    const baseFreqs = [138.59, 207.65, 277.18];

    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = idx === 1 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Warm shimmer / detune for authentic tanpura feel
      osc.detune.setValueAtTime((idx - 1) * 4, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      
      // Stop oscillator when playing stops
      const checkInterval = setInterval(() => {
        if (!this.isPlaying) {
          try {
            osc.stop();
            osc.disconnect();
          } catch(e) {}
          clearInterval(checkInterval);
        }
      }, 500);
    });
  }

  playShehnaiMelody() {
    if (!this.isPlaying || !this.ctx) return;

    // Raag Yaman / Wedding Auspicious Scale Frequencies (Sa, Re, Ga, Ma(tivra), Pa, Dha, Ni, Sa')
    // Base: C#4 = 277.18 Hz
    const notes = {
      Sa: 277.18,
      Re: 311.13,
      Ga: 349.23,
      Ma: 392.00,
      Pa: 415.30,
      Dha: 466.16,
      Ni: 523.25,
      SaHigh: 554.37,
      Rest: 0,
    };

    // Traditional auspicious wedding meend phrase
    const melody = [
      { note: notes.Sa, dur: 1.2 },
      { note: notes.Re, dur: 0.8 },
      { note: notes.Ga, dur: 1.4 },
      { note: notes.Ma, dur: 0.6 },
      { note: notes.Pa, dur: 1.8 },
      { note: notes.Dha, dur: 0.9 },
      { note: notes.Ni, dur: 1.1 },
      { note: notes.SaHigh, dur: 2.2 },
      { note: notes.Ni, dur: 0.9 },
      { note: notes.Dha, dur: 0.9 },
      { note: notes.Pa, dur: 1.6 },
      { note: notes.Ga, dur: 1.2 },
      { note: notes.Re, dur: 1.4 },
      { note: notes.Sa, dur: 2.5 },
      { note: notes.Rest, dur: 0.8 },
    ];

    const currentItem = melody[this.currentNoteIndex % melody.length];
    this.currentNoteIndex++;

    if (currentItem.note > 0) {
      this.playShehnaiTone(currentItem.note, currentItem.dur);
    }

    this.timer = setTimeout(() => {
      this.playShehnaiMelody();
    }, currentItem.dur * 1000);
  }

  playShehnaiTone(freq, duration) {
    if (!this.ctx || !this.isPlaying) return;

    const osc = this.ctx.createOscillator();
    const oscHarmonic = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();

    // Shehnai has rich nasal / reed harmonics (sawtooth mixed with soft sine)
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    // Subtle natural vibrato (ornamentation / gamak)
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, this.ctx.currentTime); // 5.5 Hz vibrato
    vibratoGain.gain.setValueAtTime(freq * 0.015, this.ctx.currentTime);
    vibrato.connect(osc.frequency);
    vibrato.start();

    // Harmonic overtone
    oscHarmonic.type = 'sine';
    oscHarmonic.frequency.setValueAtTime(freq * 2, this.ctx.currentTime);

    // Low pass filter to soften the brightness into royal wooden reed sound
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

    // Envelope
    const now = this.ctx.currentTime;
    gainNode.gain.setValueAtTime(0.001, now);
    gainNode.gain.exponentialRampToValueAtTime(0.12, now + 0.15); // Smooth attack
    gainNode.gain.exponentialRampToValueAtTime(0.08, now + duration * 0.7);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(filter);
    oscHarmonic.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(now);
    oscHarmonic.start(now);

    osc.stop(now + duration + 0.1);
    oscHarmonic.stop(now + duration + 0.1);
    vibrato.stop(now + duration + 0.1);
  }
}

export const shehnaiPlayer = new RoyalShehnaiPlayer();
