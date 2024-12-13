---
id: unity-test-task
title: Unity Test Task
sidebar_label: Unity Test Task
---

# About the Unity Test Task

This task is used for running unit tests in your project. Test results will output into a test results file and the file path is provided for uploading and processing.

## Syntax

```yaml
# Unity Get Project Version Task V1
# Get the project's Unity version
- task: UnityTestTask@1
  inputs:
    testMode: editMode
```

## Inputs

### testMode

The mode you want to run tests in.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `testMode` | Test mode | Yes       | editMode |

#### Options:

| Value    | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| editMode | Runs tests in edit mode, edit mode tests include the Unity Editor assembly and APIs |
| playMode | Runs tests in play mode                                                             |

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

### testCategory

A semicolon-separated list of test categories to include in the run. If using both testFilter and testCategory, then tests only run that matches both.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `testCategory` | Test category | No       | - |

### testFilter

A semicolon-separated list of test names to run, or a regular expression pattern to match tests by their full name.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `testFilter` | Test filter | No       | - |

### batchMode

If set, Unity runs in batch mode and disables any UI and popups to fully eliminate the need for human intervention. Note that you cannot use batch mode when testing UI.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `batchMode` | Batch mode | No       | true |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Runs Unity in batch mode                                                                                               |
| false             | Runs Unity with GUI                              |

### acceptApiUpdate

If set, the Unity API updater will run before running tests and update any obsolete API usage.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `acceptApiUpdate` | Batch mode | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Runs API Updater                                                                                               |
| false             | Does not run API Updater                              |

### noPackageManager

If set, the Unity Package Manager is disabled for the time of task execution.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `noPackageManager` | Disable Unity package manager | No       | false |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Disabled the package manager                                                                                               |
| false             | Does not disable the package manager                              |

### noGraphics

When set, Unity does not initialize the graphics device. You can then run automated workflows on machines that don't have a GPU.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `noGraphics` | No graphics | No       | true |

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| true            | Do not initialize GPU                                                                                               |
| false             | Initialize GPU                              |

### testResultsPath

Tells the task where to output test results. Path can be relative to repository root or absolute.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `testResultsPath` | Test results output path | No       | Test Results |

### additionalCmdArgs

Specify any additional command line arguments to pass to the Unity process when running the task, should you need them.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `additionalCmdArgs` | Command line arguments | No       | - |

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### testResultsOutputPathAndFileName

Path and File name of the test results in XML format.

### testsFailed

`true`, if at least one test has failed. `false` otherwise.

### editorLogFilePath

Path to the Unity editor log file generated while executing the task.