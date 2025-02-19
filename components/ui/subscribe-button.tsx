import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, CircleDashed } from "lucide-react";

import { cn } from "@/lib/utils";

const wait = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SubscribeButton() {
  const [status, setStatus] = useState<"loading" | "Subscribe" | "Subscribed">();
  const isEnabled = !status || status === "Subscribe";

  const changeStatus = async () => {
    if (!isEnabled) {
      return;
    }

    setStatus("loading");
    await wait(1500);
    setStatus("Subscribed");
    await wait(1500);
    setStatus("Subscribe");
  };

  return (
    <button
      onClick={changeStatus}
      disabled={!isEnabled}
      className="group relative h-10 min-w-40 overflow-hidden rounded-full bg-cyan-600 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-opacity-80"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          // Remount the component so that the animation can be restarted
          key={status}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.075 }}
          className={cn("flex items-center justify-center gap-1")}
        >
          {status === "Subscribed" && (
            <motion.span
              className="h-fit w-fit"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.075, type: "spring" }}
            >
              <CheckCircle2 className="h-4 w-4 fill-white stroke-teal-500 group-hover:stroke-cyan-600" />
            </motion.span>
          )}

          {status == "loading" ? (
            <CircleDashed className="h-4 w-4 animate-spin" />
          ) : (
            status ?? "Subscribe"
          )}
          
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
