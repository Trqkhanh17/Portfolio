"use client";

import ShinyText from "@/components/ShinyText";

const items = [
    { id: 0, label: "Home", href: "#home" },
    { id: 1, label: "About", href: "#about" },
    { id: 2, label: "Skills", href: "#skills" },
    { id: 3, label: "Projects", href: "#projects" },
    { id: 4, label: "Contact", href: "#contact" },
];

export default function Nav() {
    return (
        <div className="absolute top-10 right-10 z-10">
            <nav className="px-6 py-3 flex space-x-8 text-white backdrop-blur-md bg-white/5 border border-white/10 rounded-full shadow-lg">
                {items.map((item) => (
                    <a key={item.id} href={item.href}>
                        <ShinyText
                            text={item.label}
                            disabled={false}
                            speed={3}
                            className="cursor-pointer text-lg font-medium"
                        />
                    </a>
                ))}
            </nav>
        </div>
    );
}
