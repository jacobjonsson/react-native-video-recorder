import ExpoModulesCore

public class ExpoCameraViewModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoCameraView")

    View(CameraView.self) {
      Events("onSavingVideo", "onSavedVideo")

      Prop("isRecording") { (view: CameraView, isRecording: Bool) in
        if isRecording == view.isRecording {
          return
        }

        if isRecording {
          view.startRecording()
        } else {
          view.stopRecording()
        }
      }
    }
  }
}
