---
layout: post
title:  "Smart Weather Firmware - v35"
date:   2018-02-22 00:00:00 -0500
categories: Firmware
---

- Added additional support for SKY
- Added fixes and work-arounds for NTP issues
- Improved firmware upgrade stability
- Many minor bug fixes and stability improvements
- Additions and fixes to UDP messages
- Changed Hub LED to use simpler pattern:
  - GREEN = online, connected via WiFi
  - BLUE = online, connected via BLE
  - RED = offline, not connected via WiFi or BLE
- Improved WiFi stability
- Added observation backfill capability to Hubs that support it
- Added fix for RH overflow issue
- Fixed bug where UDP broadcasts stop
