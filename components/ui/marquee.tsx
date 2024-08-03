interface MarqueeProps {
  children: React.ReactNode
}

export const Marquee: React.FC<MarqueeProps> = ({ children }) => (
  <div className="z-10 h-auto w-full cursor-default overflow-hidden">
    <div className="relative flex max-w-full overflow-hidden py-5">
      <div className="absolute z-10 h-[calc(100%-2.5rem)] w-10 bg-gradient-to-r from-background to-transparent md:w-20" />
      <ul className="flex w-max animate-marquee gap-8 [--duration:30s]">
        {children}
        {children}
      </ul>
      <div className="absolute right-0 z-10 h-[calc(100%-2.5rem)] w-10 bg-gradient-to-l from-background to-transparent md:w-20" />
    </div>
  </div>
)
