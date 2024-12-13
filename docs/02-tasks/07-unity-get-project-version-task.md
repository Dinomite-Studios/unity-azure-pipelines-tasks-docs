---
id: unity-get-project-version-task
title: Unity Get Project Version Task
sidebar_label: Unity Get Project Version Task
---

# About the Unity Get Project Version Task

This task will find the Unity Editor version the project was last opened with. This is especially useful
when you need to perform steps in your pipeline that depend on which Unity version is required for the project to build
and run.

## Syntax

```yaml
# Unity Get Project Version Task V1
# Get the project's Unity version
- task: UnityGetProjectVersionTask@1
```

## Inputs

### unityProjectPath

Enter the directory path to the Unity project. If no value is entered, the project is assumed to be in the repository root. Use this input, if your Unity project is nested within subfolders within your repository.

| YAML                       | Classic Editor                | Required | Default |
|----------------------------|-------------------------------|----------|---------|
| `unityProjectPath` | Unity project path | No       | - |

## Output variables

This task defines the following output variables, which you can consume in downstream steps, jobs, and stages.

### projectVersion

The project version found by the task for the specified Unity project.

### projectVersionRevision

The Unity editor version revision found by the task for the specified Unity project.