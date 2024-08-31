import Title from '../title';
import ItemList, { ListItem } from '../item-list';

export default function Other() {
  return (
    <div className="Other">
      <div className="container">
        <Title>Other</Title>
        <ItemList>
          <ListItem>
            <ListItem.Leading>Language</ListItem.Leading>
            <ListItem.Detail>
              <div>
                <strong>Spanish, </strong>
                <span>Native language</span>
              </div>
              <div>
                <strong>English, </strong>
                <span>intermediate level, written and spoken</span>
              </div>
              <div>
                <strong>Norwegian, </strong>
                <span>Basic knowledge</span>
              </div>
            </ListItem.Detail>
          </ListItem>
          <ListItem>
            <ListItem.Leading> Computer skills </ListItem.Leading>
            <ListItem.Detail>
              Computer proficiency (Word, Excel, Adobe Reader), Office and word programs, advanced
              Microsoft Excel.
            </ListItem.Detail>
          </ListItem>
        </ItemList>
      </div>
    </div>
  );
}
