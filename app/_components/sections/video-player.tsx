"use client";

import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import { Container } from "../ui/container";
import { useVideo } from "@/app/_hooks/useVideo";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "../ui/button";

export function VideoPlayer() {
  const {
    playing,
    muted,
    progress,
    handlePlay,
    handlePause,
    handleMute,
    handleProgress,
  } = useVideo();

  return (
    <section className="py-8 md:py-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-video rounded-lg overflow-hidden shadow-xl bg-card"
        >
          <ReactPlayer
            url="https://youtu.be/8-x999EoI4s?si=uchaaRb9MoMewHd-"
            width="100%"
            height="100%"
            playing={playing}
            muted={muted}
            onPlay={handlePlay}
            onPause={handlePause}
            onProgress={handleProgress}
            controls={true}
            className="absolute top-0 left-0"
          />
          <Button
            variant="ghost"
            size="icon"
            onClick={handleMute}
            className="absolute bottom-4 right-4 z-10 bg-black/50 hover:bg-black/70"
          >
            {muted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </Button>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
