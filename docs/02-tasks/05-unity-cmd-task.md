---
id: unity-cmd-task
title: Unity CMD Task
sidebar_label: Unity CMD Task
---

# About the Unity CMD Task

This task allows for full control over the arguments passed to the Unity command line. It's aimed at advanced users with specific requirements. For most use cases and users the use of the other provided tasks is recommended as it provides a guided and targeted experience. You can find the task when editing your pipeline by searching for the name `Unity CMD`. In short: use this task only if you know what you are doing.

---

## Inputs

This task supports input variables for configuration.

### unityEditorsPathMode

For the task to run successfully it needs to know where Unity installations are located at on the agent. This input lets you configure,
where the task should look for installations.

**Required**: Yes

**Default Value**: unityHub

#### Options:

| Value               | Description                                                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| unityHub            | Uses the Unity Hub default installation path.                                                                                               |
| environmentVariable | Expects an environment variable `UNITYHUB_EDITORS_FOLDER_LOCATION` to exist on the agent and specifying where to find editor installations. |
| specify             | Let's you specify a custom path where to lookup editor installations using the input `customUnityEditorsPath`.                              |

### customUnityEditorsPath

If you are using a custom buld agent you may want to specify a custom path to specify where to look for Unity installations. This input lets you do that.
Make sure to set `unityEditorsPathMode` to `specify` for this input to take effect.

**Required**: Yes, if `unityEditorsPathMode` set to `specify`

**Default Value**: -

### unityProjectPath

Enter the directory path to the Unity project. If no value is entered, the project is assumed to be in the repository root.

**Required**: No

**Default Value**: -

### cmdArgs

Specify command line arguments to pass to the Unity process when running the task.

:::warning

The task will set `-batchmode`, `-projectPath` and `-logfile` for you and you shouldn't specify them in your custom command line arguments. These three arguments are currently required to be always set for the task to work as designed.

:::

**Required**: Yes

**Default Value**: -

#### Options:

Check the official [Unity command line documentation](https://docs.unity3d.com/Manual/CommandLineArguments.html) for options.

---

## Outputs

This task provides output variables.

### logsOutputPath

Path to the Unity editor log files generated while executing the task. Use this e.g. to upload logs in case of a failure.

---

## How to use

Here's a simple example of how to use and define the task in your pipeline. For more examples, check the [Examples Collection](./examples.md).

### YAML

In the simple YAML example below we are definiing the task a step in the pipeilne using `- task: UnityCMDTask@1`. We are also giving the task a reference name using `name: unitycmd`, so we can use it to refernce the output variables of the task in other tasks of the pipeline. E.g. we can output the value of the `logsOutputPath` output variable to the console using `echo $(unitycmd.logsOutputPath)`. For `cmdArgs` we specify that Unity should target the `standalone` platform and execute our custom build script `MyBuildTools.BuildProject` to perform the build.

```yaml
trigger:
- main

pool:
  name: Unity Windows

steps:
- task: UnityCMDTask@1
  name: unitycmd
  inputs:
    unityEditorsPathMode: unityHub
    cmdArgs: -buildTarget standalone -executeMethod MyBuildTools.BuildProject

- script: |
    echo $(unitycmd.logsOutputPath)
```