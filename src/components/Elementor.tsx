'use client';

import React, { HTMLProps } from 'react';
import { cn } from '../libs/utils';
import { COMPONENTS } from '../config';
import DisplayComponent from './DisplayComponent';

type Props = {
  className?: HTMLProps<HTMLElement>['className'];
};

function Elementor({ className }: Props) {
  return (
    <div className={cn(className, 'border-r shadow-lg p-5')}>
      <p className="border-b pb-4 font-bold mb-5">Elementor</p>

      <div className="flex flex-col gap-4">
        {/* Show all the components */}
        {Object.entries(COMPONENTS).map(([name, nodeInfo]) => (
          <DisplayComponent
            name={name}
            nodeInfo={nodeInfo}
            key={name}
            Placeholder={nodeInfo?.placeholder}
          />
        ))}
      </div>
    </div>
  );
}

export default Elementor;
