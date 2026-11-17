import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { shehnaiPlayer } from '../utils/audioSynth';

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);

  // We can try loading high quality Shehnai instrumental, with fallback to shehnaiPlayer Web Audio API synthesizer
  const externalAudioUrl = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-traditional-music-112191.mp3";

  const toggleMusic = () => {
    if (!isPlaying) {
      // User initiated play
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If external stream fails or is blocked, use our built-in Web Audio synth!
          shehnaiPlayer.start();
          setIsPlaying(true);
        });
      } else {
        shehnaiPlayer.start();
        setIsPlaying(true);
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      shehnaiPlayer.stop();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    // Hide tooltip after 8 seconds
    const timer = setTimeout(() => setShowTooltip(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Hidden HTML5 Audio Element as primary stream with synth fallback */}
      <audio
        ref={audioRef}
        src={externalAudioUrl}
        loop
        preload="auto"
        onError={() => {
          console.log("External audio fallback to Web Audio Synthesizer");
        }}
      />

      {/* Floating Tooltip Prompt */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            onClick={toggleMusic}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-royal-maroon/90 text-gold border border-gold/60 shadow-royal-gold cursor-pointer backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold animate-spin-slow" />
            <span className="font-yatra text-xs">
              {isPlaying ? "शहनाई बज रही है" : "मांगलिक शहनाई संगीत बजाएं"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Golden Music Disc Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        onClick={toggleMusic}
        className={`relative w-14 h-14 rounded-full flex items-center justify-center border-2 border-gold shadow-royal-gold-lg transition-all duration-300 ${
          isPlaying
            ? 'bg-gradient-to-tr from-royal-maroon via-royal-burgundy to-royal-maroon ring-4 ring-gold/40'
            : 'bg-royal-burgundy/90 hover:bg-royal-maroon'
        }`}
        aria-label="शहनाई संगीत चालू / बंद करें"
        title={isPlaying ? "संगीत बंद करें" : "शहनाई संगीत बजाएं"}
      >
        {/* Rotating Golden Disc Ring */}
        <div className={`absolute inset-1 rounded-full border border-gold/40 ${isPlaying ? 'animate-spin-slow' : ''}`} />

        {/* Animated Soundwave Equalizer Bars when playing */}
        {isPlaying ? (
          <div className="flex items-end gap-1 h-5 z-10">
            <span className="w-1 bg-gold rounded-full animate-[bounce_0.6s_ease-in-out_infinite]" style={{ height: '70%' }} />
            <span className="w-1 bg-gold-champagne rounded-full animate-[bounce_0.8s_ease-in-out_infinite_0.15s]" style={{ height: '100%' }} />
            <span className="w-1 bg-gold rounded-full animate-[bounce_0.5s_ease-in-out_infinite_0.3s]" style={{ height: '50%' }} />
            <span className="w-1 bg-gold-light rounded-full animate-[bounce_0.7s_ease-in-out_infinite_0.2s]" style={{ height: '85%' }} />
          </div>
        ) : (
          <div className="relative z-10 flex flex-col items-center justify-center text-gold">
            <Music className="w-6 h-6 text-gold" />
            <span className="text-[8px] font-poppins font-bold uppercase tracking-wider text-gold-champagne">
              PLAY
            </span>
          </div>
        )}

        {/* Small Volume Badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold text-royal-burgundy flex items-center justify-center text-[10px] font-bold shadow">
          {isPlaying ? <Volume2 className="w-3 h-3" /> : <VolumeX className="w-3 h-3" />}
        </div>
      </motion.button>
    </div>
  );
};
