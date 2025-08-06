import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({ children, size, rotation, spinDuration, shouldOrbit,orbitDuration, shouldSpin = false}) => {
    return(
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className={twMerge(shouldOrbit ? "orbit animate-spin" : "orbit")} style={{animationDuration: `${orbitDuration}s`}}>
            <div
            className="flex items-start justify-start "
            style={{
                transform: `rotate(${rotation}deg)`,
                height: `${size}px`,
                width: `${size}px`,
                animationDuration: `${spinDuration}s`,
             
            }}>
                <div className={twMerge(shouldSpin ? "spin animate-spin" : "spin")} style={{animationDuration: `${spinDuration}s`}}>
                <div className="inline-flex" style={{
                    transform: `rotate(${rotation * -1}deg)`,
                }}>
                    {children}
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}