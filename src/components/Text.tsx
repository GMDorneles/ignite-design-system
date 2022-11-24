import { Slot } from '@radix-ui/react-slot'; //condicionar tags
import clsx from 'clsx'; //condicionar estilos
import { ReactNode } from 'react';
export interface TextProps {
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    asChild?: boolean;
    className?: string;
}
//quando não for informado o size o padrão é md
export function Text({ size = 'md', children, asChild, className }: TextProps) {
    const Comp = asChild ? Slot : 'span'
    return (
        <Comp className={clsx('text-gray-100 font-sans', {
            'text-xs': size == 'sm',
            'text-sm': size == 'md',
            'text-md': size == 'lg',
        }, className)}>
            {children}
        </Comp>
    )
}