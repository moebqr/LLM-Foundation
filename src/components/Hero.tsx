import Ripple from "../components/magicui/ripple";

export function Hero() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <p className="whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black py-2 mx-5">
        Introduction to LLMs
      </p>
      <p className="text-center text-xl text-muted-foreground">
        A Foundational Introduction to Large Language Models!
      </p>
      <Ripple />
    </div>
  );
}
