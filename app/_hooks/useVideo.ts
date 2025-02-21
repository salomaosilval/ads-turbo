"use client";

import { useState, useCallback } from "react";

export function useVideo() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);

  const handlePlay = useCallback(() => {
    setPlaying(true);
  }, []);

  const handlePause = useCallback(() => {
    setPlaying(false);
  }, []);

  const handleMute = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  const handleProgress = useCallback(({ played }: { played: number }) => {
    setProgress(played * 100);
  }, []);

  return {
    playing,
    muted,
    progress,
    handlePlay,
    handlePause,
    handleMute,
    handleProgress,
  };
}
