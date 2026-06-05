export function VideoBlock() {
  return (
    <section className="bg-surface/50 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            See the <span className="text-accent">Probe</span> Up Close
          </h2>
          <p className="mt-4 text-foreground-secondary">
            The Fusion 44X probe powers the contained process that treats water
            before it circulates through your spa or pool.
          </p>
        </div>
        <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
          <video
            className="aspect-video w-full bg-black object-cover"
            controls
            preload="metadata"
            playsInline
            poster="/fusion-spa-install.jpg"
          >
            <source src="/0604-1.mov" type="video/quicktime" />
            <source src="/0604-1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent font-semibold">
              MT
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                &quot;I couldn&apos;t believe the difference. My spa water has
                never felt this clean and soft. I wish I had switched years
                ago.&quot;
              </p>
              <p className="mt-1 text-xs text-foreground-secondary">
                Mark T., Scottsdale, AZ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
