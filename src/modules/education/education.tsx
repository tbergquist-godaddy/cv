import ItemList, { ListItem } from '../item-list';
import educationContent from './education-content';
import Title from '../title';

export default function Education() {
  return (
    <div className="Education u-space-y-large">
      <div className="container">
        <Title>Education</Title>
        <ItemList>
          {educationContent.map(({ id, date, detail }) => (
            <ListItem key={id}>
              <ListItem.Leading>{date}</ListItem.Leading>
              <ListItem.Detail>
                <strong>{detail.title}</strong>
                <div>{detail.subtitle}</div>
              </ListItem.Detail>
            </ListItem>
          ))}
        </ItemList>
      </div>
    </div>
  );
}
