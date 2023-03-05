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
              <strong>Norwegian, </strong>
              <span>Native language</span>
              <div>
                <strong>English, </strong>
                <span>professional level, written and spoken</span>
              </div>
              <div>
                <strong>Spanish, </strong>
                <span>professional level, written and spoken</span>
              </div>
            </ListItem.Detail>
          </ListItem>
          <ListItem>
            <ListItem.Leading> Core skills </ListItem.Leading>
            <ListItem.Detail>
              JavaScript, Typescript, Flow, React, NextJS, React Query, Redux, Graphql, Nodejs,
              Relay, html, css
            </ListItem.Detail>
          </ListItem>
        </ItemList>
      </div>
    </div>
  );
}
