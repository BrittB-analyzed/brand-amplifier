const items = ["ChatGPT", "Gemini", "Perplexity", "AI Overviews"];

export function AnimatedRotator() {
  return (
    <span className="inline-flex h-[1.1em] overflow-hidden align-bottom">
      <span className="flex flex-col animate-rotate-words text-molten italic">
        {items.map((w) => (
          <span key={w} className="h-[1.1em] leading-[1.1]">{w}</span>
        ))}
        <span className="h-[1.1em] leading-[1.1]">{items[0]}</span>
      </span>
    </span>
  );
}