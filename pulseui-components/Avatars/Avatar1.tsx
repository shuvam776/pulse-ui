"use client";

import Image from "next/image";
import { useState } from "react";

function Avatar1({
  src,
  fallBackText,
  className = "",
  size,
}: {
  src: string;
  fallBackText: string;
  className?: string;
  size: number;
}) {
  const [isImageExisting, setIsImageExisting] = useState(true);

  return (
    <div className={``}>
      {isImageExisting && (
        <Image
          className="rounded-full"
          src={src}
          height={size}
          width={size}
          alt={""}
          onError={() => {
            setIsImageExisting(false);
          }}
        />
      )}
      {!isImageExisting && (
        <div
          style={{
            height: `${size}px`,
            width: `${size}px`,
            fontSize: `${size / 2.2}px`,
            cursor:"default",
            userSelect:"none"
          }}
          className={`rounded-full flex items-center justify-center bg-black font-semibold text-[#fff] ${className}`}
        >
          <p>{fallBackText}</p>
        </div>
      )}
    </div>
  );
}

export default Avatar1;
