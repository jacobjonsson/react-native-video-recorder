import AVFoundation
import ExpoModulesCore

class CameraView: ExpoView, AVCaptureFileOutputRecordingDelegate {
  let onSavingVideo = EventDispatcher()
  let onSavedVideo = EventDispatcher()

  var captureSession: AVCaptureSession?
  var videoPreviewLayer: AVCaptureVideoPreviewLayer?
  var movieOutput = AVCaptureMovieFileOutput()

  var isRecording = false

  required init(appContext: AppContext? = nil) {
    super.init(appContext: appContext)
    configureCaptureSession()
  }

  override func layoutSubviews() {
    if let videoPreviewLayer = videoPreviewLayer {
      videoPreviewLayer.frame = bounds
    }
  }

  func startRecording() {
    isRecording = true
    let paths = FileManager.default.urls(for: .documentDirectory, in: .userDomainMask)
    let fileUrl = paths[0].appendingPathComponent("output.mov")
    do {
      try FileManager.default.removeItem(at: fileUrl)
    } catch {}
    movieOutput.startRecording(to: fileUrl, recordingDelegate: self)
  }

  func stopRecording() {
    if isRecording {
      onSavingVideo([:])
      isRecording = false
      movieOutput.stopRecording()
    }
  }

  func fileOutput(
    _ output: AVCaptureFileOutput,
    didFinishRecordingTo outputFileURL: URL,
    from connections: [AVCaptureConnection],
    error: Error?
  ) {
    onSavedVideo(["fileURL": outputFileURL.absoluteString])
  }
}
