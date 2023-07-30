import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to ExpoCameraView.web.ts
// and on native platforms to ExpoCameraView.ts
import ExpoCameraViewModule from './ExpoCameraViewModule';
import ExpoCameraView from './ExpoCameraView';
import { ChangeEventPayload, ExpoCameraViewProps } from './ExpoCameraView.types';

// Get the native constant value.
export const PI = ExpoCameraViewModule.PI;

export function hello(): string {
  return ExpoCameraViewModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoCameraViewModule.setValueAsync(value);
}

const emitter = new EventEmitter(ExpoCameraViewModule ?? NativeModulesProxy.ExpoCameraView);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { ExpoCameraView, ExpoCameraViewProps, ChangeEventPayload };
