'use client';

import React, { HTMLProps, useState } from 'react';
import { cn } from '../libs/utils';
import { COMPONENTS } from '../config';
import { DragData } from './DraggableComponent';

type Props = {
  className?: HTMLProps<HTMLElement>['className'];
};

function Container({ className }: Props) {
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
    <div onDrop={onDrop} onDragOver={onDragOver} className={cn(className)}>
      {components?.map((Component, i) => (
        <Component key={i} />
      ))}
    </div>
  );
}

export default Container;
