import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { ExpoCameraViewProps } from './ExpoCameraView.types';

const NativeView: React.ComponentType<ExpoCameraViewProps> =
  requireNativeViewManager('ExpoCameraView');

export default function ExpoCameraView(props: ExpoCameraViewProps) {
  return <NativeView {...props} />;
}
