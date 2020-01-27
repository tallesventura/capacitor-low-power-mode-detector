
  Pod::Spec.new do |s|
    s.name = 'CapacitorLowPowerModeDetector'
    s.version = '0.0.1'
    s.summary = 'Detection of Low Power Mode state changes for iOS capacitor apps'
    s.license = 'MIT'
    s.homepage = 'https://github.com/tallesventura/capacitor-low-power-mode-detector'
    s.author = 'Talles Alves'
    s.source = { :git => 'https://github.com/tallesventura/capacitor-low-power-mode-detector', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end