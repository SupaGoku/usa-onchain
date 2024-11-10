export const Roadmap = () => {
  return (
    <section className="bg-clearBlack relative flex w-full flex-col items-center gap-y-4 px-8 py-12">
      <div className="font-patriot text-3xl font-bold uppercase md:text-5xl">
        <span style={{ color: '#195ba6' }}>Our</span> road
        <span style={{ color: '#c40c2e' }}>map</span>
      </div>
      <img alt="AMERICA" className="w-full md:h-[400px] md:w-auto" height={600} src="/usaroadmap.png" width={600} />
    </section>
  )
}
