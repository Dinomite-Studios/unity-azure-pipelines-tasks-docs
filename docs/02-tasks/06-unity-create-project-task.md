---
id: unity-create-project-task
title: Unity Create Project Task
sidebar_label: Unity Create Project Task
---

# About the Unity Create Project Task

This task is used to create a new and empty project. This is e.g. useful for package development, where you want
to have the pipeline validate a Unity package in multiple Unity versions in an empty project to make sure it builds as expected.

## Syntax

```yaml
# Unity Create Project V1
# Create a new project using Unity 6000.0.30f1 at the path /New Project/My Project/
- task: UnityCreateProjectTask@1
  inputs:
    version: '6000.0.30f1'
    path: 'New Project'
    projectName: 'My Project'
```

## Inputs

### version

The version of the Unity editor to work with and create the project with, e.g. `6000.0.30f1`.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `version` | Version | Yes       | - |

### path

Enter the path to create the Unity project at. If no value is entered, the root pipeline workspace is used.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `path` | Path | No       | - |

### projectName

The name of the Unity project created. The project name is also the name of the folder created for the project.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `projectName` | Project Name | Yes       | New Project |

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

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### editorLogFilePath

Path to the Unity editor log file generated while executing the task.