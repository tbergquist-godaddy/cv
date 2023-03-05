import type { ReactNode } from 'react';

type WithChildren = {
  children: ReactNode;
};

const Leading = ({ children }: WithChildren) => {
  return <span className="ItemList_Leading">{children}</span>;
};

const Detail = ({ children }: WithChildren) => {
  return <span className="ItemList_Detail">{children}</span>;
};

export default function ListItem({ children }: WithChildren): JSX.Element {
  return <li>{children}</li>;
}

ListItem.Leading = Leading;
ListItem.Detail = Detail;
