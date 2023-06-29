'use client';

import React from 'react';
import DraggableComponent from './DraggableComponent';

type Props = {
  name: string;
  nodeInfo: any;
};

function DisplayComponent({ name, nodeInfo }: Props) {
  return (
    <div className="border-b pb-4 flex flex-col gap-4">
      <label>{name}</label>
      <DraggableComponent
        componentName={name}
        defaultProps={nodeInfo.defaultProps}
      >
        <nodeInfo.Node {...nodeInfo.defaultProps} />
      </DraggableComponent>
    </div>
  );
}

export default DisplayComponent;
