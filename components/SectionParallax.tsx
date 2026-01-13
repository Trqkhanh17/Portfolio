'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, PropsWithChildren } from 'react'

type Props = {
    distance?: number              // px dịch chuyển (âm để đi ngược)
    offset?: [string, string]      // mốc kích hoạt
    disabled?: boolean
    className?: string
}

export default function SectionParallax({
    children,
    distance = 200,
    offset = ['start 80%', 'end 20%'],   // vào sớm, ra muộn => hiệu ứng rõ
    disabled,
    className,
}: PropsWithChildren<Props>) {
    const wrapperRef = useRef<HTMLDivElement | null>(null)

    const reduce =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const isDisabled = disabled ?? reduce

    const { scrollYProgress } = useScroll({
        target: wrapperRef,          // ĐO trên wrapper tĩnh
        offset: ['start 80%', 'end 20%'],                      // ví dụ: top chạm 80% viewport -> bottom chạm 20%
    })

    const y = useTransform(scrollYProgress, [0, 1], [distance, -distance])

    if (isDisabled) {
        return <div ref={wrapperRef} className={className}>{children}</div>
    }

    return (
        <div ref={wrapperRef} className={className}>
            <motion.div style={{ y, willChange: 'transform' }}>
                {children}
            </motion.div>
        </div>
    )
}
