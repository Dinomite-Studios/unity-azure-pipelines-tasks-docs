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

## Usage

Here's a simple example of how to use and define the task in your pipeline. For more examples, check the [Examples Collection](./examples.md).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="yaml"
  values={[
    {label: 'YAML', value: 'yaml'},
    {label: 'Classic Editor', value: 'classic'}
  ]}>
  <TabItem value="yaml">
  This is an apple 🍎
  </TabItem>
  <TabItem value="classic">
  <img src="../static/img/unity-get-project-version-task/get-project-version-classic.png" alt="Classic Pipeline Designer Task Configuration"/>
  </TabItem>
</Tabs>

## Log

When run the task will provide log output similar to this:

![Task Log](../static/img/unity-get-project-version-task/get-project-version-log.png)