"use client";

export function AnimatedUnderline() {
  return (
    <div className="relative after:absolute after:bg-neutral-400 after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
      <span className="text-neutral-400">Hover me</span>
    </div> 
  );
}
