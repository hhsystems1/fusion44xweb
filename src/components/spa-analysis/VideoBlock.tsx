export function VideoBlock() {
  return (
    <section className="py-20 sm:py-28 bg-surface/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            See the <span className="text-accent">Difference</span> for Yourself
          </h2>
          <p className="mt-4 text-foreground-secondary">
            Watch how Fusion 44X transforms spa water quality.
          </p>
        </div>
        <div className="aspect-video rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20 cursor-pointer transition-all duration-300 hover:bg-accent/20 hover:scale-110">
                <svg className="h-8 w-8 text-accent ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-sm text-foreground-secondary">
                Video overview — place your video here
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent font-semibold">
              MT
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                "I couldn't believe the difference. My spa water has never felt
                this clean and soft. I wish I had switched years ago."
              </p>
              <p className="text-xs text-foreground-secondary mt-1">
                — Mark T., Scottsdale, AZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
