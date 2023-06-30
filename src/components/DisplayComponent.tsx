'use client';

import React from 'react';
import DraggableComponent from './DraggableComponent';

type Props = {
  name: string;
  nodeInfo: any;
  Placeholder?: React.FC | null;
};

function DisplayComponent({ name, nodeInfo, Placeholder }: Props) {
  return (
    <div className="border-b pb-4 flex flex-col gap-4">
      <label>{name}</label>
      <DraggableComponent
        componentName={name}
        defaultProps={nodeInfo.defaultProps}
      >
        {Placeholder ? (
          <Placeholder />
        ) : (
          <nodeInfo.Node {...nodeInfo.defaultProps} />
        )}
      </DraggableComponent>
    </div>
  );
}

export default DisplayComponent;
