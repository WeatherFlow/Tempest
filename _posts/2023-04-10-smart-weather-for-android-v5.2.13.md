---
layout: post
title: "Smart Weather for Android - v5.2.13"
date: 2023-04-10 12:00:01 -0500
categories: Android
---

#### UI & UX
- Removed ScrollView layout and increased height of top buttons for better visibility.
- Updated strings for the status page.
- Adjusted default preference for theme to not solely rely on system theme.
- Set text_light color for icon tint in bottom navigation.

#### Code & Dependencies
- Incremented app version.
- Increased target SDK version for compatibility with newer devices.
- Allowed using accum final value for max accum comparison if analysis type == 0.
- Introduced constant for default theme.
- Always set SDK listener, even if fine location is not granted.
- Updated remaining API endpoints that were hard-coded.
- Switched module level SDK build.gradle to Kotlin DSL.
- Switched project level build.gradle to Kotlin Gradle DSL.
- Moved Firebase code to wrapped suspending functions.
- Changed dev URL to use HTTPS.
- Removed cleartext rule from manifest.
- Injected user repository into account actions.
- Moved login and create account to interface.
- Added is_tempest_one_hub field to device locked network call.
- Removed unused hello call.
- Updated API endpoint to use dynamic URL based on build type.
- Added utility to open an app by its package name.
- Implemented local API key usage for better security.
- Introduced user repository, service, and hello API call.
- Added Dagger code for injecting the user repository.
- Implemented new cell_status endpoint and added cell service with Dagger support.
- Fixed an issue with the gitignore file to properly ignore the local API key.
