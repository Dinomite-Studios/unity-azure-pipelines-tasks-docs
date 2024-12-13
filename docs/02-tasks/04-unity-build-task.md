---
id: unity-build-task
title: Unity Build Task
sidebar_label: Unity Build Task
---

# About the Unity Build Task

This task is responsible for actually building your Unity project and as such the core task of your pipeline. Unity Build will build your project and provide the output files for further processing as needed.

## Syntax

```yaml
# Unity Build Task V3
# Build a Windows/macOS standalone build
- task: UnityBuildTask@3
  name: unitybuild
  inputs:
    buildTarget: standalone
    outputPath: $(Build.BinariesDirectory)
    outputFileName: drop
```

## Inputs

### unityEditorsPathMode

For the task to run successfully it needs to know where Unity installations are located at on the agent. This input lets you configure,
where the task should look for installations.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityEditorsPathMode` | Unity editors location | Yes       | default |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| default            | Uses the Unity Hub default installation path                                                                                               |
| environmentVariable | Expects an environment variable `UNITYHUB_EDITORS_FOLDER_LOCATION` to exist on the agent and specifying where to find editor installations. |
| specify             | Let's you specify a custom path where to lookup editor installations using the input `customUnityEditorsPath`                              |

### customUnityEditorsPath

Should you have configured `unityEditorsPathMode` to `specify`, this input is used to read your custom path.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `customUnityEditorsPath` | Editors folder location | Yes, if `unityEditorsPathMode` is `specify`       | - |

### versionSelectionMode

This input defines how to determine the Unity version required to build the project on in the context of this task, which Unity editor version to install and / or actigvate a license with.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `versionSelectionMode` | Unity version | Yes       | project |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| project            | Uses exactly the Unity version that the project was last opened with                                                                                               |
| specify             | Let's you specify a Unity version to work with. See also input `version`                              |

### version

The version of the Unity editor to work with, e.g. `6000.0.30f1`. You can determine the version for your project using the `ProjectVersion.txt` file within your project's `ProjectSettings` folder.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `version` | Version | Yes, if `versionSelectionMode` is `specify`       | - |

### unityProjectPath

Enter the directory path to the Unity project. If no value is entered, the project is assumed to be in the repository root. Use this input, if your Unity project is nested within subfolders within your repository.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityProjectPath` | Unity project path | No       | - |

### buildFlow

Select the build target flow used to build your project. Starting with Unity 6 the new build profiles offer a sophisticated way of building for different platforms.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `buildFlow` | Build Flow | Yes       | platform |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| platform            | The classic way. Select the `buildTarget` and build for that target platform                                                                                               |
| profile | Build the project using a build profile. Build profiles were introduced in Unity 6 and give you way more control over PlayerSettings and platform configuration, depending on the target platform you are building for. We recommend reading up on build profiles before using this flow. You'll still need to select the `buildTarget` that matches your profile, so the task can show you platform specific configuration options in the visual pipeline editor |

### buildTarget

Sets the build target platform the Unity build is being made for.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `buildTarget` | Build target | Yes       | standalone |

#### Options:

| Value            | Description                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------- |
| standalone       | Standalone (Windows/macOS/Linux) build. The actual platform is determined by the building agent's OS. |
| Win              | Windows x86 build.                                                                                    |
| Win64            | Windows x64 build.                                                                                    |
| OSXUniversal     | macOS Universal build.                                                                                |
| Linux            | Linux x86 build. Deprecated for Unity 2019.1 and above.                                               |
| Linux64          | Linux x64 build.                                                                                      |
| LinuxUniversal   | Linux Universal build. Deprecated for Unity 2019.1 and above.                                         |
| iOS              | iOS build.                                                                                            |
| Android          | Android build.                                                                                        |
| Web              | Web build.                                                                                            |
| WebStreamed      | Web Streamed build.                                                                                   |
| WebGL            | WebGL build.                                                                                          |
| XboxOne          | Xbox One build.                                                                                       |
| PS4              | Playstation 4 build.                                                                                  |
| WindowsStoreApps | Universal Windows Platform build.                                                                     |
| Switch           | Nintendo Switch build.                                                                                |
| N3DS             | Nintendo 3DS build.                                                                                   |
| tvOS             | tvOS build.                                                                                           |
| visionOS             | visionOS build.                                                                                           |

### buildProfile

Set the build profile saved at the given path as an active build profile for the build. Enter the path to the profile asset within your project here, e.g. `/Assets/Settings/Build Profiles/My Profile.asset`

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `buildProfile` | Profile | Yes, if `buildFlow` is `profile`       | - |

### buildScriptType

Specifies which build script should be executed when the build process is run. A build script is a `C#` script that's placed inside
your Unity project and performs a build. If you don't have your own build script, you can use the default provided with the task.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `buildScriptType` | Build script type | Yes       | default |

#### Options:

| Value    | Description                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------- |
| default  | Uses a default build script. The task will add the package `games.dinomite.azurepipelines` to your project upon building. This package contains all the default build scripts and options required for the task to work |
| existing | Use this option to specify your own build script that should be run to execute the build.           |
| inline   | Use this option to specify an inline build script that should be run to execute the build.          |

### inlineBuildScript

If you configured `buildScriptType` to `inline` you can enter your build script in the pipeline itself using this input.
The task will then crate a C# file in your project and write the inline code into it.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `inlineBuildScript` | Inline build script | Yes, if `buildScriptType` is `inline`       | - |

### scriptExecuteMethod

Specifies the static method to run via command line to build the project. Only relevant when using `buildScriptType` `existing` or `inline`.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `scriptExecuteMethod` | Build script execute method | Yes, if `buildScriptType` is `inline` or `existing`       | - |

### outputPath

Specify the build output path relative to the repository root or fully qualified.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `outputPath` | Output path | Yes, if `buildScriptType` is `default`       | $(Build.BinariesDirectory) |

### outputFileName

Enter the output filename to be used when constructing the platform-appropriate output. For instance, if you want the output to be 'thegame.exe' on Windows Standalone, enter 'thegame'.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `outputFileName` | Output filename | Yes, if `buildScriptType` is `default`       | drop |

### additionalCmdArgs

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `additionalCmdArgs` | Command line arguments | No       | - |

### androidBuildAppBundle

If set, the build will produce an .aab file instead of an .apk file. This is relevant when you want to create a build that can be published to the Google Play Store.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidBuildAppBundle` | Build Android App Bundle (Google Play) | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Build app bundle instead of APK                                                                                               |
| false             | Build APK                              |

### androidSignAppBundle

If set, you can specify a keystore and credentials to sign the build artifact, you will usually want to do this when producing a release build for deployment to stores.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidSignAppBundle` | Sign APK / app bundle | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Sign APK / app bundle                                                                                               |
| false             | Do not sign. Use development keystore                              |

### androidKeystoreName

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidKeystoreName` | Keystore file path | Yes, if `androidSignAppBundle` is `true`       | - |

### androidKeystorePass

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidKeystorePass` | Keystore password | Yes, if `androidSignAppBundle` is `true`       | - |

### androidKeystoreAliasName

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidKeystoreAliasName` | Keystore alias name | Yes, if `androidSignAppBundle` is `true`       | - |

### androidKeystoreAliasPass

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `androidKeystoreAliasPass` | Keystore alias password | No, if not specified and `androidSignAppBundle` is `true`, then the task will assume the alias password is the same one as `androidKeystorePass`. If the alias password is a different one, do make sure to set this value here       | - |

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### editorLogFilePath

Path to the Unity editor log file generated while executing the task.