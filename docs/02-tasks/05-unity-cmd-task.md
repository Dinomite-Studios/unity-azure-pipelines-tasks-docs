---
id: unity-cmd-task
title: Unity CMD Task
sidebar_label: Unity CMD Task
---

# About the Unity CMD Task

This task is a general use command line task. It does not do anything in particular, unless you tell it to. It will invoke the Unity command line using arguments you provided. Use this task whenever any of the other tasks does not fulfill your needs.

## Syntax

```yaml
# Unity CMD Task V1
# Invokes the Unity command line providing a custom command line argument
- task: UnityCMDTask@1
  inputs:
    cmdArgs: -myCustomArgument
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

### cmdArgs

Specify command line arguments to pass to the Unity process when running the task.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `cmdArgs` | Command line arguments | Yes       | - |

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### editorLogFilePath

Path to the Unity editor log file generated while executing the task.