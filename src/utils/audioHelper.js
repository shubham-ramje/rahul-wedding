// Web Audio API Synthesizer for Authentic Royal Indian Wedding Shehnai & Tanpura Melodies
// Zero external dependencies, works 100% offline without network drops or CORS issues

class RoyalWeddingAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.masterGain = null;
    this.tanpuraGain = null;
    this.melodyGain = null;
    this.reverbNode = null;
    this.noteIndex = 0;

    // Raag Yaman / Bhairavi wedding auspicious notes (frequencies in Hz)
    // Sa, Re, Ga, Ma(tivra), Pa, Dha, Ni, Sa'
    this.raagScale = [
      { name: 'Sa', freq: 261.63, dur: 1.6 },
      { name: 'Ga', freq: 329.63, dur: 1.2 },
      { name: 'Ma#', freq: 369.99, dur: 1.0 },
      { name: 'Pa', freq: 392.00, dur: 2.0 },
      { name: 'Dha', freq: 440.00, dur: 1.2 },
      { name: 'Ni', freq: 493.88, dur: 1.4 },
      { name: 'Sa2', freq: 523.25, dur: 2.4 },
      { name: 'Ni', freq: 493.88, dur: 1.0 },
      { name: 'Dha', freq: 440.00, dur: 1.2 },
      { name: 'Pa', freq: 392.00, dur: 1.8 },
      { name: 'Ma#', freq: 369.99, dur: 1.2 },
      { name: 'Ga', freq: 329.63, dur: 1.5 },
      { name: 'Re', freq: 293.66, dur: 1.4 },
      { name: 'Sa', freq: 261.63, dur: 2.8 }
    ];
  }

  init() {
    if (this.ctx) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.4, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Simple warm reverb impulse
    this.reverbNode = this.createReverb(2.0, 1.8);
    this.reverbNode.connect(this.masterGain);

    this.tanpuraGain = this.ctx.createGain();
    this.tanpuraGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
    this.tanpuraGain.connect(this.reverbNode);

    this.melodyGain = this.ctx.createGain();
    this.melodyGain.gain.setValueAtTime(0.28, this.ctx.currentTime);
    this.melodyGain.connect(this.reverbNode);
  }

  createReverb(duration, decay) {
    const sampleRate = this.ctx.sampleRate;
    const length = sampleRate * duration;
    const impulse = this.ctx.createBuffer(2, length, sampleRate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < length; i++) {
      const n = length - i;
      left[i] = ((Math.random() * 2 - 1) * Math.pow(n / length, decay));
      right[i] = ((Math.random() * 2 - 1) * Math.pow(n / length, decay));
    }

    const convolver = this.ctx.createConvolver();
    convolver.buffer = impulse;
    return convolver;
  }

  // Authentic Tanpura drone (Sa - Pa - Sa' - Sa low)
  startTanpuraDrone() {
    if (!this.ctx || !this.isPlaying) return;

    const droneNotes = [130.81, 196.00, 261.63, 130.81]; // Sa, Pa, Sa', Sa
    droneNotes.forEach((freq, idx) => {
      setTimeout(() => {
        if (!this.isPlaying) return;
        this.playDronePluck(freq);
      }, idx * 1200);
    });

    this.droneInterval = setInterval(() => {
      if (!this.isPlaying) {
        clearInterval(this.droneInterval);
        return;
      }
      droneNotes.forEach((freq, idx) => {
        setTimeout(() => {
          if (!this.isPlaying) return;
          this.playDronePluck(freq);
        }, idx * 1200);
      });
    }, 5000);
  }

  playDronePluck(freq) {
    if (!this.ctx || !this.isPlaying) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    // Rich harmonic string spectrum
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, this.ctx.currentTime);

    const now = this.ctx.currentTime;
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.exponentialRampToValueAtTime(0.2, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 3.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.tanpuraGain);

    osc.start(now);
    osc.stop(now + 3.6);
  }

  // Shehnai Note Synthesis (nasal reed timbre + expressive meend/vibrato)
  playShehnaiNote(freq, duration) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Double reed timbre: sawtooth + slight triangle
    osc1.type = 'sawtooth';
    osc2.type = 'square';

    // Microtonal detune for rich natural shehnai shimmer
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 1.003, now);

    // Expressive subtle vibrato
    const vibrato = this.ctx.createOscillator();
    const vibratoGain = this.ctx.createGain();
    vibrato.frequency.setValueAtTime(5.5, now); // 5.5 Hz vibrato
    vibratoGain.gain.setValueAtTime(freq * 0.02, now); // depth
    vibrato.connect(osc1.frequency);
    vibrato.connect(osc2.frequency);
    vibrato.start(now + 0.3); // delay vibrato onset like real shehnai
    vibrato.stop(now + duration);

    // Resonant bandpass for Shehnai's distinct wooden horn flare
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(freq * 2.2, now);
    filter.Q.setValueAtTime(2.5, now);

    // Envelope with smooth breath attack
    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.25, now + 0.25);
    gain.gain.setValueAtTime(0.22, now + duration - 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(this.melodyGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  }

  playNextMelodyPhrase() {
    if (!this.isPlaying) return;

    const note = this.raagScale[this.noteIndex];
    this.playShehnaiNote(note.freq, note.dur);

    this.noteIndex = (this.noteIndex + 1) % this.raagScale.length;
    this.timer = setTimeout(() => {
      this.playNextMelodyPhrase();
    }, note.dur * 1000 + 100);
  }

  start() {
    this.init();
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    this.isPlaying = true;
    this.startTanpuraDrone();
    this.playNextMelodyPhrase();
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.droneInterval) {
      clearInterval(this.droneInterval);
      this.droneInterval = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }
}

export const royalAudio = new RoyalWeddingAudioEngine();
