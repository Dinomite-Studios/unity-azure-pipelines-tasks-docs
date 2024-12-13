---
id: unity-activate-license-task
title: Unity Activate License Task
sidebar_label: Unity Activate License Task
---

# About the Unity Activate License Task

:::warning
This task has been deprecated and will be removed in an upcoming major release. Please use `Unity Setup Task` instead.
:::

This task is used to activate a Untiy Plus/Pro license on the executing agent machine.

## Syntax

```yaml
# Unity Activate License V1
# Activate editor using a Unity seat
- task: UnityActivateLicenseTask@1
  inputs:
    username: $(unity.username)
    password: $(unity.password)
    serial: $(unity.serial)
```

## Inputs

### username

The username to use for seat activation. This is your Unity ID email.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `username` | Username | Yes       | - |

### password

The password to use for seat activation. This is your Unity ID password.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `password` | Password | Yes       | - |

### serial

The serial to use for seat activation. This is the serial for your seat. Obtain it from the Unity dashboard.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `serial` | Serial | Yes      | - |

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

### unityEditorsLocation

For the task to run successfully it needs to know where the Unity Hub executable can be found on the agent. This input defines where to look for it.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityEditorsLocation` | Unity editors location | Yes       | default |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| default            | Uses the Unity Hub default installation path for editor installations                                                                                               |
| specify             | Let's you specify a custom path where to look for the Unity Hub executable. See also input `unityEditorsLocation`                              |

### customUnityEditorsLocation

Should you have configured `unityEditorsLocation` to `specify`, this input is used to read your custom path.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `customUnityEditorsLocation` | Editors folder location | Yes, if `unityEditorsLocation` is `specify`       | - |

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### editorLogFilePath

Path to the Unity editor log file generated while executing the task.