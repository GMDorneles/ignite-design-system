import { Slot } from '@radix-ui/react-slot'; //condicionar tags
import clsx from 'clsx'; //condicionar estilos
import { ReactNode } from 'react';
export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
//quando não for informado o size o padrão é md
export function Heading({ size = 'md', children, asChild, className }: HeadingProps) {
    const Comp = asChild ? Slot : 'h2'
    return (
        <Comp className={clsx('text-gray-100 font-bold font-sans', {
            'text-lg': size == 'sm',
            'text-xl': size == 'md',
            'text-2xl': size == 'lg',
        }, className)}>
            {children}
        </Comp>
    )
}