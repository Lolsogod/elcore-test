import { ReactNode } from "react";

interface IProps {
    selected?: boolean;
    children: ReactNode
}

export const Tag = ({ selected = false, children }: IProps) => (
    <button className={`rounded-full py-1.5 sm:py-[6px] px-2 sm:px-[14px] text-sm sm:text-base inline-block
                        ${selected ? 'bg-green text-white' : 'text-green'} 
                        border border-green hover:bg-green hover:text-white 
                        transition-colors whitespace-nowrap`}>
        {children}
    </button>
)