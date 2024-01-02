Key design considerations for Android-first, iOS-adapt React Native projects:

1. Avoidance of using Android-specific properties
Examples: textAlignVertical

2. Exploitation of <View /> property
Example: Apply borderRadius on <View /> and not directly on the <Text /> child

3. Assigning of platform-specific properties
Example: Elevation of Android, shadowOpacity for iOS

4. Accommodation of Dynamic Island
- iPhone models with Dynamic Island generally require rounded components on the corners or a deeper padding.
