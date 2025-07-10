import type { MetaFunction } from "react-router";
import { motion } from "motion/react";
import { Button } from "../../../common/components/ui/button";
import { Link } from "react-router";

// TODO: 추후 지구 효과 추가 예정
// import Earth from "../../../spline/earth";

export const meta: MetaFunction = () => {
  return [
    { title: "jobs | wemake" },
    { name: "description", content: "Find your dream job!" },
  ];
};

export default function Jobs() {
  const transition = {
    duration: 0.8,
    delay: 0.5,
    ease: [0, 0.71, 0.2, 1.01],
  };
  return (
    <div className="px-20 py-20">
      <div className="space-y-8">
        {/* <Earth className="w-full h-50% absolute hover:cursor-pointer" /> */}
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight">
            Jobs
          </h1>
          <p className="text-xl font-light text-muted-foreground">
            Find your dream job!
          </p>
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            className="w-fit flex justify-start items-center mt-8"
          >
            <Link to="/jobs/submit">
              <Button className="hover:cursor-pointer">Move to Submit</Button>
            </Link>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
