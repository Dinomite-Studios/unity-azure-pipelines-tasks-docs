---
id: unity-get-project-version-task
title: Unity Get Project Version
---

## About

This task will find the Unity Editor version the project was last opened with. This is especially useful
when you need to perform steps in your pipeline that depend on which Unity version is required for the project to build
and run. You can find the task when editing your pipeline by searching for the name `Unity Get Project Version`.

## Inputs

This task supports following inputs:

| Name             | optional/required? | Description                                                                                                                 |
| ---------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| unityProjectPath | optional           | Enter the directory path to the Unity project. If no value is entered, the project is assumed to be in the repository root. |

## Outputs

This task will provide following outputs:

| Name                   | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| projectVersion         | The project version found by the task for the specified Unity project.               |
| projectVersionRevision | The Unity editor version revision found by the task for the specified Unity project. |

## How to use

Here's a simple example of how to use and define the task in your pipeline. For more examples, check the [Examples Collection](./examples.md).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  lazy
  groupId="pipeline-editing-tool"
  defaultValue="yaml"
  values={[
    {label: 'YAML', value: 'yaml'},
    {label: 'Classic Editor', value: 'classic'}
  ]}>
  <TabItem value="yaml">
  <p>
  In the simple YAML example below we are definiing the task a step in the pipeilne using <code>- task: UnityGetProjectVersionTask@1</code>. We are also
  giving the task a reference name using <code>name: unitygetprojectversion</code>, so we can use it to refernce the output variables of the task in other tasks of the pipeline. E.g. we can output the value of the <code>projectVersion</code> output variable to the console using <code>echo $(unitygetprojectversion.projectVersion)</code>.
  </p>
  <img src="../static/img/unity-get-project-version-task/get-project-version-yaml.png" alt="Classic Pipeline YAML Task Configuration"/>
  </TabItem>
  <TabItem value="classic">
  <p>
  The classic (visual) editor for Azure Pipelines provides input fields for configuring the task. In the simple example below, we are leaving the <code>Unity project path</code> field empty, since we know our Unity project is in the repository root. We are also assigning a <code>Reference name</code> to the task, so we can use it to refernce the output variables in the variables list in other tasks of the pipeline. E.g. to get the value of the <code>projectVersion</code> output variable and insert it into any other input field of a task we can then use <code>$(unitygetprojectversion.projectVersion)</code>.
  </p>

  <img src="../static/img/unity-get-project-version-task/get-project-version-classic.png" alt="Classic Pipeline Designer Task Configuration"/>
  </TabItem>
</Tabs>

## Log

When run and successful the task will provide log output similar to this:

![Task Log](../static/img/unity-get-project-version-task/get-project-version-log.png)