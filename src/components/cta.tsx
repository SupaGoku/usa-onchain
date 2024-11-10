import { csx } from '../utils'
import { Button } from './button'

const BIRDEYE_LINK = 'https://birdeye.so/token/69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs?chain=solana'

export const Cta = () => {
  return (
    <section className="bg-clearBlack relative z-10 flex w-full flex-col items-center gap-y-8 py-8">
      <div className="flex flex-col items-center justify-center gap-x-4 gap-y-4 md:flex-row">
        <Button url={BIRDEYE_LINK}>BUY &#36;USA</Button>
        <div className="rounded-xl border border-[#195ba6] bg-[#195ba6] p-2 text-xs md:p-4 md:text-base">
          69kdRLyP5DTRkpHraaSZAQbWmAwzF9guKjZfzMXzcbAs
        </div>
      </div>
      <img
        alt="AMERICA"
        height={500}
        src="/pickup.png"
        width={500}
        className={csx(
          'absolute z-40 w-auto rotate-[-12deg]',
          'left-[-60px] top-[-100px] h-[150px]',
          'md:right-[-190px] md:top-[-140px] md:h-[180px]',
          'lg:top-[-220px] lg:h-[300px]',
        )}
      />
    </section>
  )
}
