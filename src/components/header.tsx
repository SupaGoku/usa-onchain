import { csx } from '../utils'

export const Header = () => {
  return (
    <header className={csx('bg-black relative flex flex-col items-center justify-center pt-12 md:pb-0 md:pt-6')}>
      <h1
        className="relative z-40 my-0 flex w-[50%] flex-wrap items-center justify-center gap-x-4 font-patriot text-[68px] md:w-full md:text-[80px] lg:text-[120px]"
        style={{ zIndex: 30 }}
      >
        <div>
          <span style={{ color: '#195ba6' }}>AMER</span>ICAN{' '}
        </div>
        <span className="relative top-[-32px] md:top-0" style={{ color: '#c40c2e' }}>
          COIN
        </span>
      </h1>
      <img
        alt="AMERICA"
        height={350}
        src="/eagle.png"
        width={350}
        className={csx(
          'absolute z-10 w-auto',
          'left-[-20px] top-[200px] h-[150px]',
          'md:left-[-140px] md:top-[0px] md:h-[160px]',
          'lg:left-[-220px] lg:top-[0px] lg:h-[280px]',
        )}
      />
      <img
        alt="AMERICA"
        height={300}
        src="/cheeseburger.png"
        width={300}
        className={csx(
          'absolute z-10 w-auto rotate-12',
          'right-[-40px] top-[170px] h-[150px]',
          'md:right-[-180px] md:top-[-20px] md:h-[180px]',
          'lg:right-[-240px] lg:top-[-40px] lg:h-[300px]',
        )}
      />
    </header>
  )
}
