'use client';

import React, { HTMLProps, useState } from 'react';
import { cn } from '../../libs/utils';
import { COMPONENTS } from '../../config';
import { DragData } from '../DraggableComponent';

type Props = {
  className?: HTMLProps<HTMLElement>['className'];
  editable?: boolean;
};

function FlexLayout({ className, editable }: Props) {
  const [components, setComponents] = useState<React.FC[]>();

  const getComponent = (key: keyof typeof COMPONENTS) => {
    return Object.entries(COMPONENTS).find(([name, _]) => name === key);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const data_str = e.dataTransfer.getData('widgetData');
    if (!data_str) return;
    const parsed_data: DragData = JSON.parse(data_str);
    const _componentData = getComponent(
      parsed_data.name as keyof typeof COMPONENTS
    );
    if (!_componentData) return;

    const _component = _componentData![1].Node;
    (_component as any).defaultProps = _componentData![1].defaultProps;

    setComponents((prev) => {
      const components = [];
      if (prev) {
        components.push(...prev);
      }
      components.push(_component);
      return components;
    });
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={cn(className, 'flex-1 h-full')}
    >
      {components && components?.length >= 1 ? (
        components?.map((Component, i) => <Component key={i} />)
      ) : (
        <NothingComponent />
      )}
    </div>
  );
}

const NothingComponent = () => {
  return (
    <div className="w-full flex-1 h-full border">
      <p>Drop some component to show up</p>
    </div>
  );
};

export const FlexLayoutPlaceholder = () => {
  return (
    <div className="h-10 border rounded-md">
      <p className="text-center pt-2 text-sm">---Flex Layout---</p>
    </div>
  );
};

export default FlexLayout;
