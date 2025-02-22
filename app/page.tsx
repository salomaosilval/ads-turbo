import Headline from "./_components/sections/headline";
import VideoPlayer from "./_components/sections/video-player";
import Products from "./_components/sections/products";
import Testimonials from "./_components/sections/testimonials";
import Footer from "./_components/layout/footer";
import Countdown from "./_components/layout/countdown";
import { UTMProvider } from "./_context/utm-context";

export default function Home() {
  return (
    <UTMProvider>
      <main className="min-h-screen bg-background">
        <Countdown />
        <Headline />
        <VideoPlayer />
        <Products />
        <Testimonials />
        <Footer />
      </main>
    </UTMProvider>
  );
}
