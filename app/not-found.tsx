'use client';
import FuzzyText from "@/components/FuzzyText";

// app/not-found.tsx
export default function NotFound() {
    const hoverIntensity = 0.4;
    const enableHover = true;
    const goHome = () => {
        window.location.href = '/';
    }
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white gap-6 text-center px-4">
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
                fontSize={100}
            >
                404
            </FuzzyText>
            <FuzzyText
                baseIntensity={0.2}
                hoverIntensity={hoverIntensity}
                enableHover={enableHover}
                fontSize={30}
            >
                Oops! Page not found.
            </FuzzyText>
            <div className="cursor-pointer" onClick={goHome}>
                <FuzzyText
                    baseIntensity={0.2}
                    hoverIntensity={hoverIntensity}
                    enableHover={enableHover}
                    fontSize={30}

                >
                    Go Home
                </FuzzyText>
            </div>
        </div>
    );
}
