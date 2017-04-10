import React from 'react';
import ShareVia from './ShareVia';

function EnteredStringItem (props) {
      return (
      <div
        className={`Entered-item`}
      >
        {props.item.inputString}
        <ShareVia item={props.item} />
      </div>
    );
}

export default EnteredStringItem;