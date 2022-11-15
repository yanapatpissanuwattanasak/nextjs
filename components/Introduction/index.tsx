import Navigation from "../Navigation";
import { motion } from 'framer-motion';
export default function Introduction({ children }: any) {
    const variants = {
        hidden: { opacity: 0, x: -300, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 }
    }

    const variants2 = {
        hidden: { opacity: 0, x: 300, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 }
    }
    return (
        <div id='intro' className="flex  flex-col h-[97vh] bg-[#f8e6b6] justify-center items-center space-y-10 ">
            {/* <div className="flex flex-col justify-center items-center space-y-10"> */}
            <div className="mt-[-100px] space-y-10">
                <motion.div
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="flex flex-col justify-center items-center "
                >
                    <h1 className="font-mono text-black subpixel-antialiased text-6xl font-bold transition duration-[1000ms] hover:scale-110 ease-out xl:text-shadow-xl ">
                        Wellcome To My Portfolio</h1>
                </motion.div>
                <motion.div
                    variants={variants2} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ ease: "easeOut", duration: 1 }}
                    className="flex flex-col justify-center items-center space-y-10 "
                >
                    <h1 className="font-mono text-black hover:text-white subpixel-antialiased text-4xl font-bold transition duration-[1000ms] hover:scale-125 ease-out xl:text-shadow-xl">
                        Yanapat Pissanuwattanasak</h1>
                </motion.div>
            </div>



            {/* </div> */}
        </div>
    )
}