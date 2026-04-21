"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem 2rem",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(-20px) scale(0.97)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1280 793"
          role="img"
          aria-label="Krishna Tiles | Sanitaryware | Taps | Kitchens"
          style={{ width: "clamp(260px, 45vw, 600px)", height: "auto" }}
        >
          <path d="M0 0 C6.83181813 5.30540323 10.50628202 11.44886703 11.66015625 19.984375 C11.95193531 26.5303748 9.74331974 31.5679942 5.50390625 36.35546875 C-13.04338182 55.35160635 -47.80029297 91.02978516 -89 133.75 C-128.6889765 173.43897659 -169.00146484 213.63366699 -198.38085938 246.07910156 C-199.85881004 247.7811529 -199.85881004 247.7811529 -199.36355591 249.80615234 C-195.26650671 255.57459141 -188.88678974 261.82758217 -179.24453735 271.28912354 C-167.22558766 282.61477566 -147.86260034 301.17725945 -131.38623047 320.12963867 C-111.89916183 340.91842898 -97 355.5 -97 355.5 C-86.05102561 366.06966559 -75.77278809 377.09644501 -64.65625 388.90625 C-52.78943987 396.73084406 -42.79876099 411.41713135 -31.36227417 424.91955566 C-15.11914062 439.2734375 -8.554958 445.74417673 -4.25 450 C2.91752625 454.98999023 11.41331834 467.93774028 11.75 476.9375 C11.68020566 484.46531756 8.75511389 489.89985763 4.125 495.6875 C-4.85510758 502.83076739 -12.32155753 504.40746364 -23.625 503.875 C-29.21335033 503.03147542 -31.40365626 500.15003441 -34.83203125 495.96484375 C-37.01235363 493.42350939 -39.42355172 491.3715847 -41.99609375 489.2421875 C-50.5 480.4375 -56.9375 475.0625 -65.0078125 465.6796875 C-71.26200334 460.16539733 -72.72362088 458.64942633 -74.45922852 456.57373047 C-89.921278 440.53412247 -106.29335686 424.25828414 -111.65649414 418.93945312 C-122.77449609 405.39810562 -130.50366211 400.20751953 -132.08546448 398.65226746 C-141.9375 388.875 -141.9375 388.875 -154.67016602 374.75466919 C-159.13867188 370.31030273 -162.29794765 367.16234751 -168.625 360.875 C-181.08597908 349.92288208 -186.94401799 345.58959961 -200 332 C-220 312 -242 290 -260 270 C-264.92123624 264.02923616 -268.19422346 258.99812988 -269.15625 252.0234375 C-269.14078125 250.15558594 -269.15625 244.4609375 -267.94955326 236.31573451 C-261.02253501 230.98306986 -244.77789736 214.72247088 -217.90311956 187.78567386 C-195.74339591 165.58938752 -174.45861626 144.28529263 -174.45861626 144.28529263 C-152.98479229 122.80516615 -130.78293668 100.53890168 -119.38131734 89.09918616 C-77.3402977 47.00051689 -52.63694191 22.26399803 -32.1171875 0.10 C-13.75258197 -8.21993405 0 0 0 0 Z " fill="#181820" transform="translate(719.625,3.125)"/>
          <path d="M295.74 286.76 C278.00 304.49 263.27 318.99 262.99 318.98 C262.01 318.94 198.00 254.41 198.00 253.46 C198.00 252.93 212.62 237.87 230.50 220.00 L 263.00 187.51 L 295.50 220.00 C313.38 237.87 328.00 252.94 328.00 253.50 C328.00 254.06 313.48 269.02 295.74 286.76 Z" fill="#884A7F"/>
          <path d="M368.01 360.91 C350.42 378.56 335.68 393.00 335.26 393.00 C334.83 393.00 319.87 378.38 302.00 360.50 L 269.51 328.00 L 302.00 295.50 C319.87 277.62 334.82 263.00 335.23 263.00 C336.27 263.00 400.00 326.94 400.00 327.97 C400.00 328.44 385.61 343.26 368.01 360.91 Z" fill="#A5F919"/>
          <path d="M367.74 212.76 C350.00 230.49 335.26 245.00 334.99 245.00 C334.71 245.00 319.87 230.38 302.00 212.50 L 269.51 180.00 L 302.00 147.50 C319.87 129.62 334.94 115.00 335.50 115.00 C336.81 115.00 400.00 178.20 400.00 179.51 C400.00 180.06 385.48 195.02 367.74 212.76 Z" fill="#FB743D"/>
          <path d="M819.73 9.92 C817.30 6.32 810.74 1.37 807.50 0.69 C806.40 0.46 824.62 0.25 848.00 0.23 C889.84 0.18 890.41 0.21 885.00 1.93 C881.97 2.89 877.70 4.62 875.50 5.77 C873.03 7.06 826.79 52.64 754.86 124.68 C659.21 220.47 637.99 242.20 636.98 245.39 C635.48 250.15 636.24 257.62 638.73 262.47 C639.75 264.45 655.41 281.02 673.54 299.31 C691.67 317.59 721.35 347.62 739.50 366.06 C872.48 501.10 875.34 503.96 878.79 505.10 C883.57 506.67 895.58 505.74 900.60 503.41 C910.63 498.74 915.56 490.96 915.42 480.02 C915.28 468.95 919.92 474.46 853.44 406.50 C834.07 386.70 814.91 367.10 810.86 362.93 C806.81 358.77 787.30 338.84 767.50 318.64 C716.63 266.73 704.07 253.64 704.04 252.50 C704.03 251.95 709.52 245.79 716.26 238.81 C748.26 205.64 776.98 176.01 791.97 160.71 C801.03 151.47 808.68 143.52 808.97 143.07 C809.26 142.61 822.32 129.02 837.98 112.87 C881.34 68.17 890.74 58.47 902.59 46.21 C914.51 33.87 916.36 30.35 915.29 22.05 C914.01 12.14 908.28 4.70 899.54 1.59 C896.01 0.34 894.78 0.22 868.50 0.10 L 841.00 -0.02 Z" fill="#B6BCBF"/>
          <line x1="0" y1="712" x2="1280" y2="712" stroke="#0492C5" strokeWidth="6"/>
          <g fontFamily="Arial, Helvetica, sans-serif" fontSize="62" fontWeight="700" fill="#222223" textAnchor="middle" letterSpacing="3">
            <text x="170" y="775">TILES</text>
            <text x="495" y="775">SANITARYWARE</text>
            <text x="850" y="775">TAPS</text>
            <text x="1110" y="775">KITCHENS</text>
          </g>
          <g stroke="#888" strokeWidth="3">
            <line x1="305" y1="735" x2="305" y2="780"/>
            <line x1="700" y1="735" x2="700" y2="780"/>
            <line x1="970" y1="735" x2="970" y2="780"/>
          </g>
        </svg>
      </div>

      {/* Tagline */}
      <p
        style={{
          marginTop: "2.5rem",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-xs)",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
          fontWeight: 400,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
        }}
      >
        Crafted Surfaces. Timeless Spaces.
      </p>

      {/* Divider line */}
      <div
        style={{
          width: visible ? "60px" : "0px",
          height: "1px",
          background: "var(--color-border)",
          marginTop: "2rem",
          transition: "width 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
        }}
      />

      {/* Subtitle */}
      <p
        style={{
          marginTop: "2rem",
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
          fontWeight: 400,
          color: "var(--color-text-light)",
          letterSpacing: "-0.01em",
          lineHeight: 1.4,
          maxWidth: "480px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(12px)",
          transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s",
        }}
      >
        Ranchi&apos;s premium destination for tiles, sanitaryware &amp; modern kitchens
      </p>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: visible ? 0.4 : 0,
          transition: "opacity 1s ease 1.5s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span
          style={{
            fontSize: "var(--fs-xs)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          Scroll
        </span>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ animation: "scrollBounce 2s ease-in-out infinite" }}
        >
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
          <circle cx="8" cy="8" r="2" fill="currentColor" opacity="0.5" />
        </svg>
      </div>
    </section>
  );
}
