import AVFoundation
import Foundation

extension CameraView {
  final func configureCaptureSession() {
    captureSession = AVCaptureSession()
    captureSession!.sessionPreset = .high

    guard let device = AVCaptureDevice.default(.builtInWideAngleCamera, for: .video, position: .back) else {
      print("Unable to access back camera!")
      return
    }

    do {
      let input = try AVCaptureDeviceInput(device: device)

      // Step 9
      if captureSession!.canAddInput(input), captureSession!.canAddOutput(movieOutput) {
        captureSession!.addInput(input)
        captureSession!.addOutput(movieOutput)

        setupLivePreview()
      }

    } catch {
      print("Error Unable to initialize back camera:  \(error.localizedDescription)")
    }
  }

  final func setupLivePreview() {
    videoPreviewLayer = AVCaptureVideoPreviewLayer(session: captureSession!)

    videoPreviewLayer!.videoGravity = .resizeAspect
    videoPreviewLayer!.connection?.videoOrientation = .portrait

    DispatchQueue.main.async {
      self.layer.addSublayer(self.videoPreviewLayer!)
    }

    // Step10
    DispatchQueue.global(qos: .userInitiated).async { // [weak self] in
      self.captureSession!.startRunning()

      // Step 11
      DispatchQueue.main.async {
        self.videoPreviewLayer!.frame = self.bounds
      }
    }
  }
}
