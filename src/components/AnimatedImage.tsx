import { motion } from "framer-motion";
import { ImgHTMLAttributes } from "react";

interface AnimatedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  delay?: number;
}

const AnimatedImage = ({ delay = 0, className = "", ...props }: AnimatedImageProps) => (
  <motion.img
    className={className}
    initial={{ opacity: 0, scale: 1.05 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    {...props}
  />
);

export default AnimatedImage;
