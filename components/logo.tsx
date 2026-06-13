import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-9 h-9"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1DB45A" />
            <stop offset="100%" stopColor="#FFD93D" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>

        {/* Left vertical stripe - Blue */}
        <path
          d="M 20 40 Q 20 20 40 20 L 60 20 L 40 100 L 20 160 Q 20 180 40 180 L 60 180 Q 80 180 80 160 L 100 80 L 80 40 Q 80 20 60 20 Z"
          fill="url(#grad3)"
        />

        {/* Top horizontal stripe - Green to Yellow */}
        <path
          d="M 60 20 L 180 20 Q 200 20 200 40 Q 200 60 180 60 L 80 60 L 60 20 Z"
          fill="url(#grad2)"
        />

        {/* Middle horizontal stripe - Blue to Cyan */}
        <path
          d="M 40 80 L 160 80 Q 180 80 180 100 Q 180 120 160 120 L 60 120 L 40 80 Z"
          fill="url(#grad3)"
        />

        {/* Bottom horizontal stripe - Blue to Yellow */}
        <path
          d="M 20 140 L 140 140 Q 160 140 160 160 Q 160 180 140 180 L 40 180 Q 20 180 20 160 L 20 140 Z"
          fill="url(#grad1)"
        />

        {/* Yellow accent bar on top right */}
        <rect x="170" y="15" width="15" height="50" rx="7" fill="#FFD93D" />

        {/* Yellow accent bar in middle */}
        <rect x="150" y="70" width="15" height="50" rx="7" fill="#FFD93D" />
      </svg>
      <span className="text-xl font-bold text-foreground hidden sm:inline">
        SaPS
      </span>
    </Link>
  );
}

export function LogoSmall() {
  return (
    <Link href="/" className="hover:opacity-80 transition-opacity">
      <svg
        width="40"
        height="40"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#FF6B6B" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1DB45A" />
            <stop offset="100%" stopColor="#FFD93D" />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0052CC" />
            <stop offset="100%" stopColor="#00D4FF" />
          </linearGradient>
        </defs>

        {/* Left vertical stripe - Blue */}
        <path
          d="M 20 40 Q 20 20 40 20 L 60 20 L 40 100 L 20 160 Q 20 180 40 180 L 60 180 Q 80 180 80 160 L 100 80 L 80 40 Q 80 20 60 20 Z"
          fill="url(#grad3)"
        />

        {/* Top horizontal stripe - Green to Yellow */}
        <path
          d="M 60 20 L 180 20 Q 200 20 200 40 Q 200 60 180 60 L 80 60 L 60 20 Z"
          fill="url(#grad2)"
        />

        {/* Middle horizontal stripe - Blue to Cyan */}
        <path
          d="M 40 80 L 160 80 Q 180 80 180 100 Q 180 120 160 120 L 60 120 L 40 80 Z"
          fill="url(#grad3)"
        />

        {/* Bottom horizontal stripe - Blue to Yellow */}
        <path
          d="M 20 140 L 140 140 Q 160 140 160 160 Q 160 180 140 180 L 40 180 Q 20 180 20 160 L 20 140 Z"
          fill="url(#grad1)"
        />

        {/* Yellow accent bar on top right */}
        <rect x="170" y="15" width="15" height="50" rx="7" fill="#FFD93D" />

        {/* Yellow accent bar in middle */}
        <rect x="150" y="70" width="15" height="50" rx="7" fill="#FFD93D" />
      </svg>
    </Link>
  );
}
