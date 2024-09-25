import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { techStack } from "../constants";

// Importing styles and data from external files
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    I can say I’m quite good at
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Tech Skills.
                </h2>
            </motion.div>

            {/* <div className="flex flex-row flex-wrap justify-center gap-10 mt-2">
                {technologies.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                        <BallCanvas icon={technology.icon} />
                    </div>
                ))}
            </div> */}
            <motion.div className="flex flex-wrap mt-8 justify-between ">
                {techStack.map((el, index) => (
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={{
                            visible: {
                                y: 0,
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                },
                            },
                            hidden: { opacity: 1, y: 80 },
                        }}
                        className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                    >
                        <img alt="" src={el.link} className="w-12" />
                        <h4 className="text-md ml-4 text-black">{el.name}</h4>
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default SectionWrapper(Tech, "");
