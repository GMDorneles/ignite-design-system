import { Slot } from '@radix-ui/react-slot'; //condicionar tags
import clsx from 'clsx'; //condicionar estilos
import { ReactNode } from 'react';
export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}
//quando não for informado o size o padrão é md
export function Button({ children, asChild }: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp className={clsx('py-3 px-4 bg-gray-500 font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white rounded',)}>
            {children}
        </Comp>
    )
}