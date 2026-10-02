// The page's PinReal. banner: the full-width hero artwork (logo, tagline and
// phone mockups) runs edge to edge at the top of the page.
import Image from "next/image";

export function Cover() {
  return (
    // backgroundColor is the banner's own top colour — it's also what the site
    // nav samples to pick dark text.
    <section style={{ backgroundColor: "#F1CDD2" }}>
      <Image
        src="/images/pinreal/assets/hero-banner.webp"
        alt="PinReal. — where authenticity meets creativity, with phone mockups of the app"
        width={3600}
        height={1761}
        className="block w-full h-auto"
        priority
        sizes="100vw"
      />
    </section>
  );
}
