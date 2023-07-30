import Foundation

@objc
public class CameraQueues: NSObject {
  /// The serial execution queue for the camera preview layer (input stream) as well as output processing of photos.
  @objc public static let cameraQueue = DispatchQueue(
    label: "runway/Camera.main",
    qos: .userInteractive,
    attributes: [],
    autoreleaseFrequency: .inherit,
    target: nil
  )

  /// The serial execution queue for output processing of videos for recording or synchronous frame processing.
  @objc public static let videoQueue = DispatchQueue(
    label: "runway/Camera.video",
    qos: .userInteractive,
    attributes: [],
    autoreleaseFrequency: .inherit,
    target: nil
  )

  /// The serial execution queue for output processing of audio buffers.
  @objc public static let audioQueue = DispatchQueue(
    label: "runway/Camera.audio",
    qos: .userInteractive,
    attributes: [],
    autoreleaseFrequency: .inherit,
    target: nil
  )
}
