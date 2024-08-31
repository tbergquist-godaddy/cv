import reactStringReplace from 'react-string-replace';

import Title from '../title';
import ItemList, { ListItem } from '../item-list';
import workExperienceContent from './work-experience-content';

export default function WorkExperiences() {
  return (
    <div className="WorkExperiences">
      <div className="container">
        <Title>Work experiences</Title>
        <ItemList>
          {workExperienceContent.map(({ id, date, detail }) => (
            <ListItem key={id}>
              <ListItem.Leading>{date}</ListItem.Leading>
              <ListItem.Detail>
                <strong>{detail.title}</strong>
                <div>
                  {reactStringReplace(detail.subtitle, '{br}', () => (
                    <>
                      <br />
                      <br />
                    </>
                  ))}
                </div>
                {detail.details?.map((item, i) => (
                  <div key={i} style={{ display: 'flex', paddingLeft: '4px' }}>
                    <span style={{ fontSize: '25px', lineHeight: 1, marginRight: '8px' }}>
                      &#x2022;
                    </span>
                    <div key={item}>{item}</div>
                  </div>
                ))}
              </ListItem.Detail>
            </ListItem>
          ))}
        </ItemList>
      </div>
    </div>
  );
}
