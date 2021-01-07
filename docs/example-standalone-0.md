---
id: example-standalone-0
title: Standalone Build And Upload
---

This pipeline example will build a Unity application targeting the Standalone platform and then proceed to upload the exported files from the agent to the Azure DevOps storage, so they can be deployed or distributed as needed in subsequent operations, such as a CD pipeline.

## Overview

**Target Platform:**

- Standalone (Windows)

**Used Tasks:**

- Unity Activate License
- Unity Build

**Agent:**

- Custom Agent with Unity preinstalled

## YAML

```yaml
# Trigger the pipeline to run whenever a commit to the main branch is made.
trigger:
- main

# Use a custom agent pool called "Unity Windows" that manages custom agents
# that have the required Unity versions installed and any required SDKs for target platforms
# configured.
pool:
  name: 'Unity Windows'

# Adds a pipeline variables library to the pipeline that contains
# authentication variables for activating a Unity editor with a Unity Plus / Pro seat.
variables:
  - group: 'unity-activation-variables'

steps:
# Before we build we activate a Unity Plus/Pro seat on the agent, only for the duration
# of the pipeline execution. That way we can e.g. get rid of the Unity splash screen in our build.
- task: UnityActivateLicenseTask@1
  name: 'unityactivation'
  inputs:
    username: '$(unity.username)'
    password: '$(unity.password)'
    serial: '$(unity.serial)'

# Build the Unity project to standalone. Since we are running on a Windows agent, this will produce
# an .exe executable and any dependency files needed.
- task: UnityBuildTask@3
  inputs:
    buildTarget: 'standalone'
    outputPath: '$(Build.BinariesDirectory)'
    outputFileName: 'mygame'

# Copy build output files to artifact staging directory.
- task: CopyFiles@2
  inputs:
    SourceFolder: '$(Build.BinariesDirectory)'
    Contents: '**'
    TargetFolder: '$(Build.ArtifactStagingDirectory)'
    CleanTargetFolder: true
    OverWrite: true

# Finally publish all items in artifact staging to the Azure Pipelines
# artifact storage. They will be available for sharing and/or further processing there.
- task: PublishBuildArtifacts@1
  inputs:
    PathtoPublish: '$(Build.ArtifactStagingDirectory)'
    ArtifactName: 'drop'
    publishLocation: 'Container'
```