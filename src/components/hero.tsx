import { csx } from '../utils'
import FireworksOverlay from './fireworks'

export const Hero = () => {
  return (
    <section
      className={csx(
        'relative flex h-[300px] w-full items-center justify-center overflow-hidden md:h-[400px] lg:h-[600px]',
        'bg-flag bg-[length:1000px_auto] md:bg-none',
      )}
    >
      <img alt="AMERICA" className="relative drop-shadow-2xl md:hidden" height={400} src="/apaches.png" width={600} />
      <video
        className="hidden h-[100%] w-[100%] object-cover md:block"
        src="/patriots.webm"
        autoPlay
        loop
        muted
      ></video>
      <FireworksOverlay />
      <img
        alt="AMERICA"
        height={600}
        src="/model1-min.png"
        width={600}
        className={csx(
          'absolute z-40 w-auto',
          'bottom-0 right-[-30px] h-[200px]',
          'md:h-[270px]',
          'lg:right-0 lg:h-[450px]',
        )}
      />
    </section>
  )
}
