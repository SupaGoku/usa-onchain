export const HowToBuy = () => {
  return (
    <section className="bg-clearBlack flex w-full flex-col items-center gap-y-4 px-8 py-12">
      <div className="font-patriot text-3xl font-bold uppercase md:text-5xl">
        <span style={{ color: '#195ba6' }}>How</span> to <span style={{ color: '#c40c2e' }}>buy</span>?
      </div>
      <ol className="text-center text-lg md:w-[50%] md:text-2xl">
        <li>
          1. Download{' '}
          <a className="text-[#c40c2e] underline hover:no-underline" href="https://phantom.app">
            Phantom wallet
          </a>
        </li>
        <li>2. Purchase some $SOL</li>
        <li>
          3. Head to{' '}
          <a
            className="text-[#c40c2e] underline hover:no-underline"
            href="https://jup.ag/swap/SOL-USA_69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs"
          >
            Jupiter Exchange
          </a>{' '}
          (use this link)
        </li>
        <li>4. Connect wallet and swap for $USA</li>
      </ol>
    </section>
  )
}
