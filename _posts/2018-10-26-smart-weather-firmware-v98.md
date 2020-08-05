---
layout: post
title:  "Smart Weather Firmware - v98"
date:   2018-10-26 00:00:00 -0500
categories: Firmware
---
- added additional methods to upgrade firmware and set time for increased robustness
- added watchdog to correct “blue LED lockup” issue.
- added ability to use sensor devices to set the hub’s time when other methods (Internet, BLE) fail
- corrected direction calculation for low wind speeds
