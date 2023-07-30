import * as React from 'react';

import { ExpoCameraViewProps } from './ExpoCameraView.types';

export default function ExpoCameraView(props: ExpoCameraViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
