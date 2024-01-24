import React from 'react';
import Chip from '../components/Chip';

const PreviewText = (props) => {
  const { data } = props;

  return (
    <div>
      <h1>{data?.title}</h1>
      <div>{data?.content}</div>
      <br/>
      {
        data?.tags && (
          <>
            {
              data?.tags?.map((tagValue, tagIndex) => (
                <Chip label={tagValue}/>
              ))
            }
          </>
        )
      }
    </div>
  );
}

export default PreviewText;
