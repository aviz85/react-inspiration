export default {
  expo: {
    name: 'השראה יומית',
    slug: 'daily-inspiration',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    scheme: 'dailyinspiration',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.yourcompany.dailyinspiration'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF'
      },
      package: 'com.yourcompany.dailyinspiration'
    },
    plugins: [
      'expo-router'
    ],
    experiments: {
      newArchEnabled: true
    }
  }
}; 