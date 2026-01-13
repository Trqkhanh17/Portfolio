'use client'

import BlurText from '@/components/BlurText';
import ScrollFloat from '@/components/ScrollFloat';
import SectionParallax from '@/components/SectionParallax';
import SplitText from '@/components/SplitText';
import dynamic from 'next/dynamic'
import { useCallback, useState } from 'react';
import { ArrowDownCircleIcon } from 'lucide-react';
import ShinyText from '@/components/ShinyText';
import ElectricBorder from '@/components/ElectricBorder';
import myImage from '@/public/z7182587145634_97b8e1e6cc6b1105181ff82ffd0435d6.jpg'
import TiltedCard from '@/components/TiltedCard';
import { SlRocket } from 'react-icons/sl';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import TextType from '@/components/TextType';
const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false })

export default function Home() {
  const items = [
    { id: 0, label: "intro", href: "#" },
    { id: 1, label: "About", href: "#" },
    { id: 2, label: "Skills", href: "#" },
    { id: 3, label: "Projects", href: "#" },
    { id: 4, label: "Contact", href: "#" },
  ];
  const SUBTITLE_HEIGHT = '2.5rem';
  const [isIntroSplitTextAnimating, setIntroSplitTextAnimating] = useState(false)
  const handleIntroSplitTextAnimationComplete = useCallback(() => {
    setIntroSplitTextAnimating(true)
  }, [])
  return (
    <main className="bg-black text-white relative">
      <section id="intro" className="flex flex-col items-center justify-center border-b border-white/10">
        <div className="relative w-full flex flex-col items-center justify-center h-screen overflow-hidden text-white">
          <div className="absolute inset-0">
            <LightRays />
          </div>
          <div className="flex flex-col space-y-6">
            <SplitText
              text="Hello, I'm Tran Quoc Khanh"
              className="text-7xl font-semibold text-center text-gray-300 "
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleIntroSplitTextAnimationComplete}
            />
            <div style={{ minHeight: SUBTITLE_HEIGHT }} className="mt-2">
              {isIntroSplitTextAnimating && (
                <BlurText className="text-3xl" text="Welcome to My Portfolio!" delay={150} animateBy="words" direction="top" />
              )}
            </div>
          </div>
          <div className="w-full absolute bottom-0 pointer-events-none">

            <div className="flex flex-col items-center justify-center">
              <ArrowDownCircleIcon className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce" size={48} />
              <ShinyText
                text="Scroll Down For More"
                speed={4}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="h-screen bg-black text-white w-full flex flex-col items-center justify-center border-b border-white/10">
        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          textClassName="!text-6xl w-full text-center"
          scrollEnd={"bottom bottom-=60%"}
        >
          About me
        </ScrollFloat>
        <SectionParallax distance={120} className="container mx-auto px-6 py-12 md:py-20 flex flex-col gap-20">
          <ElectricBorder
            color="#ffffff"
            speed={0.2}
            chaos={1}
            thickness={0.8}
            style={{ borderRadius: 16, padding: '30px', margin: '0 auto', overflow: 'hidden', height: '600px' }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-50">
              <div className="flex flex-col">
                <SplitText
                  text="Hello, I'm Quoc Khanh"
                  className="text-6xl font-semibold w-full"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign='start'
                  threshold={0.1}
                />
                <TextType
                  text={[
                    "I'm a passionate Full-Stack Developer who loves turning ideas into reliable and scalable web applications.",
                    "Focused on writing clean, maintainable code and building complete systems from frontend to backend.",
                    "Currently working at TTMI Corporation with the goal of growing into a well-rounded full-stack engineer."
                  ]}
                  typingSpeed={40}
                  deletingSpeed={30}        // thêm để xóa nhanh hơn
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="|"
                  loop={true}
                  className="text-gray-300 text-3xl mt-4 h-[100px]"
                />


                {/* Tech badges */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'NestJS', 'MongoDB', 'TypeScript', 'Tailwind', 'Python Django Rest Framework'].map((t) => (
                    <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a href="#contact" className="rounded-full bg-white text-black px-5 py-2.5 hover:bg-gray-200 transition">
                    Contact
                  </a>
                  <a href="/cv.pdf" className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 hover:bg-white/15 transition">
                    Download CV
                  </a>
                </div>
              </div>
              <TiltedCard
                imageSrc={myImage.src}
                altText="My Image"
                captionText="It's me hehe"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
              />
            </div>
          </ElectricBorder>
        </SectionParallax>
      </section>
    </main>

  )
}
