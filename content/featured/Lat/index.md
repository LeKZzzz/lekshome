---
date: '2'
title: 'Lat'
cover: './demo.png'
github: 'https://github.com/LeKZzzz/Lat'
external: 'https://github.com/LeKZzzz/Lat'
tech:
  - C++
  - winSocket
---

A distributed multi-device data synchronization and operation management program that can collaborate with Git.

Developed with C/C++, using a multi-center architecture. Designed 11 message types and 6 operation types to achieve interconnection and synchronization between hosts using Sockets, implemented message sending/receiving and file monitoring with multithreading, used semaphores and locking mechanisms to synchronize threads, utilized MQ message queues to handle high concurrency, and used SQLite3 for message and operation database storage. Implemented text comparison, message serialization/deserialization, unique identifier hashing, and transmission encryption using third-party libraries such as diff_match_patch, nlohmann/json, and picosha2. Built a simple HTTP server with Java and MyBatis for data upload and download.
