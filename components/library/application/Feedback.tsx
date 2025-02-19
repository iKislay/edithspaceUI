"use client";

import { FaRegSmileBeam } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";
import { FaRegSadTear } from "react-icons/fa";
import { FaRegSadCry } from "react-icons/fa";

import { useRef, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

export const Feedback = () => {
  const [rating, setRating] = useState<number | null>(0);
  const [feedbackActive, setFeedbackActive] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedbackActive === true) {
      const handleClickOutside = (e: MouseEvent) => {
        if (node.current && !node.current.contains(e.target as Node)) {
          setFeedbackActive(false);
          setRating(null);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [feedbackActive]);

  return (
    <>
      <div
        ref={node}
        className={`flex gap-4 px-6 py-3 bg-secondary/50 border-opacity-10 shadow-sm border border-primary/10 items-start transition-all ease-in-out overflow-hidden flex-col max-[315px]:scale-95 ${
          feedbackActive ? "rounded-md" : "rounded-full"
        } ${
          feedbackActive ? "max-[374px]:h-[16rem] h-[13rem]" : "h-[3.5rem]"
        } ${
          feedbackActive ? "w-[19rem] max-[374px]:w-[15rem]" : "w-[12.3rem]"
        } ${feedbackActive ? "max-[374px]:justify-center" : "justify-end"}`}
        style={{
          transition: feedbackActive
            ? "border-radius 0.2s ease-in-out, width 0.2s ease-in-out 0.2s, height 0.2s ease-in-out 0.2s"
            : "border-radius 0.2s ease-in-out, width 0.2s ease-in-out, height 0.2s ease-in-out",
        }}
      >
        <div className="w-full">
          <textarea
            className="w-full h-[8rem] p-2 rounded-md border border-primary/10 border-opacity-10 resize-none -mb-1 text-primary outline-none text-sm transition-all duration-500"
            style={{
              filter: feedbackActive ? "blur(0px)" : "blur(100px)",
            }}
            placeholder="Your feedback..."
          />
        </div>
        <div
          className={`flex justify-between w-full ${
            feedbackActive && "max-[374px]:flex-col"
          } ${feedbackActive ? "gap-4" : "gap-8"}`}
        >
          <div
            className={`flex items-center mt-1.5 ${
              feedbackActive && "justify-center"
            } gap-4`}
          >
            {" "}
            <button
              onClick={() => {
                setRating(1);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <FaRegSadCry
                size={25}
                className={`${rating === 1 ? "opacity-100" : "opacity-50"}`}
                fill={`${rating === 1 ? "red" : "currentColor"}`}
              />
            </button>{" "}
            <button
              onClick={() => {
                setRating(2);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <FaRegSadTear
                size={25}
                className={`${rating === 2 ? "opacity-100" : "opacity-50"}`}
                fill={`${rating === 2 ? "orange" : "currentColor"}`}
              />
            </button>{" "}
            <button
              onClick={() => {
                setRating(3);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <FaRegSmile
                size={25}
                className={`${rating === 3 ? "opacity-100" : "opacity-50"}`}
                fill={`${rating === 3 ? "white" : "currentColor"}`}
              />
            </button>
            <button
              onClick={() => {
                setRating(4);
                setFeedbackActive(true);
              }}
              className="active:scale-[.95] hover:scale-105 transition-all duration-400 text-primary"
            >
              <FaRegSmileBeam
                size={25}
                className={`${rating === 4 ? "opacity-100" : "opacity-50"}`}
                fill={`${rating === 4 ? "lightgreen" : "currentColor"}`}
              />
            </button>
          </div>
          <div>
            <Button className="text-sm px-2 py-1 max-[374px]:w-full max-[374px]:py-2 flex items-center justify-center">
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
