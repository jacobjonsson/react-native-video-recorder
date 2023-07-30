import { NativeSyntheticEvent, ViewProps } from "react-native";
import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

export type OnSavingVideoEvent = NativeSyntheticEvent<{ fileURL: string }>;
export type OnSavedVideoEvent = NativeSyntheticEvent<{ fileURL: string }>;

export type ExpoCameraViewProps = {
  isRecording: boolean;
  onSavingVideo: () => void;
  onSavedVideo: (args: OnSavedVideoEvent) => void;
} & ViewProps;

const NativeView = requireNativeViewManager("ExpoCameraView");

export function ExpoCameraView(props: ExpoCameraViewProps) {
  return <NativeView {...props} />;
}
