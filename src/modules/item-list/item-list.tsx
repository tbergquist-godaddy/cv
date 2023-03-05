import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ItemList({ children }: Props) {
  return <ul className="ItemList">{children}</ul>;
}
