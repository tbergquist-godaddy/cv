import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ItemList({ children, className }: Props) {
  return <ul className={['ItemList', className?.split(' ')].join(' ')}>{children}</ul>;
}
