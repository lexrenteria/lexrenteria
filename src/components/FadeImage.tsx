import { useState, useCallback } from "react";

interface FadeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Duration of the fade-in transition in ms (default 600) */
  fadeDuration?: number;
}

/**
 * An <img> wrapper that starts invisible and fades in only after the image
 * has fully loaded, preventing the "drawing top-to-bottom" effect.
 */
const FadeImage = ({ fadeDuration = 600, className = "", style, onLoad, ...rest }: FadeImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(e);
    },
    [onLoad],
  );

  return (
    <img
      {...rest}
      onLoad={handleLoad}
      className={className}
      style={{
        ...style,
        opacity: loaded ? 1 : 0,
        transition: `opacity ${fadeDuration}ms ease-in-out`,
      }}
    />
  );
};

export default FadeImage;
