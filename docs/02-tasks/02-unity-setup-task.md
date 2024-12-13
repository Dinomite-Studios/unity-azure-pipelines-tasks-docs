---
id: unity-setup-task
title: Unity Setup Task
sidebar_label: Unity Setup Task
---

# About the Unity Setup Task

Use this task to setup the Unity editor / installation on the build agent and configure platform modules. This task is especially useful when building using a hosted agent, where the Unity version required for your project to build might not be installed at all or not configured properly for your project.

Another purpose of this task is to activate a license / seat on the agent, should your project require it to build. Make sure to use a license with at least one seat activation available. By default, the task will release the seat again after the pipeline has completed.

## Syntax

```yaml
# Unity Setup Task V2
# Install Unity editor with Android module
- task: UnitySetupTask@2
  inputs:
    installAndroidModule: true
```

## Inputs

### unityHubExecutableLocation

For the task to run successfully it needs to know where the Unity Hub executable can be found on the agent. This input defines where to look for it.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityHubExecutableLocation` | Unity Hub executable location | Yes       | default |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| default            | Uses the Unity Hub default installation path to look up the Unity Hub executable                                                                                               |
| specify             | Let's you specify a custom path where to look for the Unity Hub executable. See also input `customUnityHubExecutableLocation`                              |

### customUnityHubExecutableLocation

Should you have configured `unityEditorsPathMode` to `specify`, this input is used to read your custom path.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `customUnityHubExecutableLocation` | Custom Unity Hub executable path | Yes, if `unityHubExecutableLocation` is `specify`       | - |

### versionSelectionMode

This input defines how to determine the Unity version required to build the project on in the context of this task, which Unity editor version to install and / or actigvate a license with.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `versionSelectionMode` | Unity version | Yes       | project |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| project            | Uses exactly the Unity version that the project was last opened with                                                                                               |
| specify             | Let's you specify a Unity version to work with. See also input `version` and `revision`                              |

### version

The version of the Unity editor to work with, e.g. `6000.0.30f1`. You can determine the version for your project using the `ProjectVersion.txt` file within your project's `ProjectSettings` folder.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `version` | Version | Yes, if `versionSelectionMode` is `specify`       | - |

### revision

The revision of the Unity editor to work with, e.g. `62b05ba0686a`. You can determine the revision for your project using the `ProjectVersion.txt` file within your project's `ProjectSettings` folder.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `revision` | Revision | Yes, if `versionSelectionMode` is `specify`       | - |

### unityProjectPath

Enter the directory path to the Unity project. If no value is entered, the project is assumed to be in the repository root. Use this input, if your Unity project is nested within subfolders within your repository.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityProjectPath` | Unity project path | No       | - |

### installEditor

If set, the task will check whether the required Unity editor is installed on the agent and install if needed. Disable this if you know the editor
is preinstalled and you want to skip this setup step.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installEditor` | Install / verify editor and configuration | No       | true |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install editor and modules, if not already installed                                                                                               |
| false             | Skip installation                              |

### macOSArchitecture

This input is only relevant when building using a macOS agent. Select the editor architecture to install, in case `installEditor` is enabled.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `macOSArchitecture` | Editor Architecture (macOS only!) | No       | x86_64 |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| x86_64            | Intel                                                                                               |
| arm64             | Apple Silicon                              |

### installAndroidModule

Install the Android build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installAndroidModule` | Android Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installAndroidChildModules

Installs Android SDK & NDK Tools as well as the OpenJDK module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installAndroidChildModules` | Install Android SDK & NDK Tools & OpenJDK | No       | true |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installIOSModule

Install the iOS build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installIOSModule` | iOS Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installTVOSModule

Install the tvOS build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installTVOSModule` | tvOS Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installVisionOSModule

Install the visionOS build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installVisionOSModule` | visionOS Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installLinuxMonoModule

Install the Linux build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installLinuxMonoModule` | Linux Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installLinuxIL2CPPModule

Install the Linux IL2CPP build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installLinuxIL2CPPModule` | Linux IL2CPP Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installMacMonoModule

Install the macOS build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installMacMonoModule` | macOS Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installMacIL2CPPModule

Install the macOS IL2CPP build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installMacIL2CPPModule` | macOS IL2CPP Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installWindowsIL2CPPModule

Install the Windows IL2CPP build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installWindowsIL2CPPModule` | Windows IL2CPP Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installUWPModule

Install the UWP build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installUWPModule` | UWP Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### installWebGLModule

Install the WebGL build module.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `installWebGLModule` | WebGL Build Support | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Install the module                                                                                               |
| false             | Do not install the module                              |

### activateLicense

Activates a seat / license on the agent.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `activateLicense` | Activate license | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Activate seat / license                                                                                               |
| false             | Do not activate seat / license                              |

### username

The username to use for seat activation. This is your Unity ID email.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `username` | Username | Yes, if `activateLicense` is `true`       | - |

### password

The password to use for seat activation. This is your Unity ID password.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `password` | Password | Yes, if `activateLicense` is `true`       | - |

### serial

The serial to use for seat activation. This is the serial for your seat. Obtain it from the Unity dashboard.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `serial` | Serial | Yes, if `activateLicense` is `true`       | - |

### deactivateSeatOnComplete

Dectivates a seat / license on the agent once the pipeline has completed.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `deactivateSeatOnComplete` | Deactivate license when pipeline has finished | No       | true |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Deactivate seat / license                                                                                               |
| false             | Do not deactivate seat / license                              |