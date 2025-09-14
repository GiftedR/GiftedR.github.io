# Framework Research

[Back to Home](#)

This is some research into possible frameworks for apps, these reflect my personal opinions and some benefits and discrepancies within each framework.

## Godot (GDScript / C# | Others supported via extensions.)
- &#43; Multiple Platform Support
- &#43; Good Documentation and Tutorial Support
- &#43; Light Weight
- &#43; Community Supported
- &#45; Native UI Controls
- &#45; Web Export feels unusual (Embedded Web-Assembly)

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Godot is a game engine, so there are some settings needing to be changed so they can be battery effecient. Otherwise the device treats it as a game and dedicates as much power as it can. There are many documents and tutorials for learning and using the engine.

## QT (C++ / Python / QML / Javascript)
- &#43; Standardized support
- &#43; Multi-Language
- &#45; Requires application
- &#45; Paid options

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QT is a supported cross platform framework, most of the official documentation is written with c++ and cmake it mind (That I can find). There are documents for writing in python and other frameworks for differing use cases. Depending on the language, it can be difficult to port to other platforms that might not be natively supported.

## Silk.NET (C#)
- &#43; Customization
- &#43; Cross Platform (No Web)
- &#45; Requires Graphics Lib Knowledge
- &#45; Web Export

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Silk.NET supports multiple graphic libraries and is officially supported by dotnet. [Website.](https://dotnet.github.io/Silk.NET/) The main downside is needing to know some basic graphic programming to build apps with it. However it supports a range of graphics APIs.

## AvaloniaUI (C#)
- &#43; Cross Platform
- &#43; Video tutorial
- &#43; Documentation
- &#43; Testing Support
- &#45; Leans towards MVVM

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AvaloniaUI is a c# solution for making apps. The framework leans towards MVVM style of design. Which has its upsides and downsides. It also use XML for designing pieces and parts.

## Eto (C# / F# / Python)
- &#43; Simple
- &#43; Native Exports to Desktop
- &#45; Desktop Only (Mobile in development)
- &#45; Documentation
- &#45; Web Export

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Eto is a framework that seems to aim to make a Winforms like experience cross platform. The documentation is mostly aimed at python, so there is some mental gymnastics to translate and filter what might be useful from whats not.

## Electron (Javascript / Typescript)
- &#43; Web native
- &#43; Popular (Many Resources)
- &#43; Cross Platform
- &#45; Requires Separate Library for releasing.

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Electron is a widely used framework for turing JS apps into native desktop apps. It has downsides like requiring a seperate module for exporting (Electron Forge). It also has a wide variety of documentation.

## Tauri (Javascript / Rust)
- &#43;/&#45; Web native front / Rust back
- &#43; Cross Platform

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tauri aims to be a lighter weight version of Electron, while it works with Javascript, it also can sometimes require Rust for some interactions with systems.

## React Native (Javascript / Typescript)
- &#43; Web native
- &#45; Uncommon syntax 

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Flutter (Dart)
- &#43; Cross Platform
- &#43; Maintained
- &#43; VSCode Extension
- &#45; Overwhelming for new users

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Neutralinojs (Javascript)
- &#43; Web Native
- &#43; Native Release Library
- &#45; Desktop Only Native Apps

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Haxe (Multiple Supported Languages)
- &#43; Cross Platform
- &#43; Simple Build System [C# Example](https://haxe.org/manual/target-cs-getting-started.html)

> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

## Custom (Any) -- Not Recommended
> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A custom framework is not reccomended as of the overhead needed for all aspects. When writing apps for multiple platforms, there is a substantial amount of additional effort that would be best when learning. Otherwise, not so much.

## Non Viable
- Xojo (Deployment Costs Money)

[Good Source](https://github.com/sudhakar3697/awesome-electron-alternatives)