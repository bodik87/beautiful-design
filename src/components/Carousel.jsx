import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Carousel = ({ imagesArray }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div
      ref={carousel}
      className="cursor-grab overflow-hidden rounded-xl mt-2"
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        className="flex rounded-xl gap-3"
      >
        {imagesArray.map((image) => (
          <motion.div key={image} className="item min-w-[250px]">
            <img
              src={image}
              className="w-full h-full pointer-events-none rounded-xl object-cover"
              alt={image}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
