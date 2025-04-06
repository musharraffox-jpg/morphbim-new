'use client'

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Initialize as null and create it only on the client side
const LottieComponent = dynamic(() => import("lottie-react"), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg" />
});

interface LottieAnimationProps {
  animationPath: any;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationPath,
  className = "",
  loop = true,
  autoplay = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={`w-full h-full bg-gray-200 animate-pulse rounded-lg ${className}`} />;
  }

  return (
    <LottieComponent
      animationData={animationPath}
      loop={loop}
      autoplay={autoplay}
      className={className}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
};

export default LottieAnimation;
