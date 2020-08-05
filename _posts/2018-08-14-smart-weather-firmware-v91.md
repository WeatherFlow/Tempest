---
layout: post
title:  "Smart Weather Firmware - v91"
date:   2018-08-14 00:00:00 -0500
categories: Firmware
---
- improved backfill performance and reliability
- fixed RH overflow issue (affecting about 10% of the AIR units)
- corrected several wind speed filter issues (affecting a handful of SKY units)
- improved watchdogs to reduce unnecessary reboots (affecting a small number of hubs)
- fixed firmware upgrade issue (affecting a very small number of hubs)
- major improvements to the networking stack, including:

  - added framework for future IPv6 support
  - more aggressive WiFi scanning when searching for networks
  - better handling of Internet and WIFI connection/disconnection issues
