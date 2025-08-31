"use client";

import React from "react";

type GlassCardProps = {
    title: string;
    icon: React.ReactNode;
    className?: string;
    as?: "div" | "button" | "a";
    href?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
};

export const GlassCard: React.FC<GlassCardProps> = ({
    title,
    icon,
    className = "",
    as = "div",
    href,
    onClick,
}) => {
    const Tag = as as any;

    const baseClasses =
        "card liquidGlass-wrapper w-full shadow-sm relative overflow-hidden rounded-2xl";

    return (
        <Tag
            className={`${baseClasses} ${className}`}
            {...(as === "a" && href ? { href } : {})}
            {...(as === "button" ? { type: "button" } : {})}
            onClick={onClick as any}
        >
            {/* effect layers */}
            <div className="liquidGlass-effect" aria-hidden="true" />
            <div className="liquidGlass-tint" aria-hidden="true" />
            <div className="liquidGlass-shine" aria-hidden="true" />

            {/* content */}
            <div className="relative z-[5]">
                <figure className="px-2 pt-2">{icon}</figure>
                <div className="card-body p-2 items-center text-center">
                    <h2 className="heading-3xl font-medium">{title}</h2>
                </div>
            </div>
        </Tag>
    );
};

export default GlassCard;
