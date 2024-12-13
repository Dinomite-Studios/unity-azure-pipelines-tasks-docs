---
id: agent-support
title: Supported Agents
sidebar_label: Supported Agents
---

# Supported agents

The extension generally supports Microsoft hosted agents as well as custom agents. Some features may not be available when using hosted agents for older Unity versions and platforms that require setting up e.g. specific SDKs on the machine for builds to work. In such cases, we recommend using a custom agent with full control over tools and software installed.

| Unity Version | Supported | Notes |
|---------------|:---------:|-------|
| Hosted Agents |     ✅     | Minimum agent version: 2.144.0      |
| Custom Agents |     ✅     | Minimum agent version: 2.144.0      |

## Software requirements for custom agents

Microsoft hosted agents come with everything you need already set up. If you are setting up your own agent, do make sure it meets the following Software requirements.

| Software / SDK |
|----------------|
| Unity Hub  |
| git  |

:::info
Additional software or SDKs may be needed depending on the platform you are targeting with your build. The rule of thumb is, whatever you need to build your project on your own development machine, you'll need to make sure it is installed on the agent as well.
:::