---
id: tasks-introduction
title: Tasks Introduction
sidebar_label: Tasks Introduction
---

# Understanding Tasks in Your Pipeline

In a CI/CD pipeline, tasks are the fundamental building blocks that execute specific actions. Each task performs a defined operation, such as building a Unity project, running tests, or packaging the results for distribution. By chaining tasks together in a pipeline, you create a streamlined process that automates the entire lifecycle of your Unity project.

This Azure DevOps extension includes a variety of tasks specifically designed for Unity-based projects. These tasks simplify common workflows, ensuring consistency and efficiency at every stage of your development pipeline.

## How Tasks Work

1. **Sequence of Actions:** Tasks are executed in the order they are defined in the pipeline. Each task completes its operation before the next one begins.

2. **Configuration Options:** Each task comes with customizable options that allow you to tailor its behavior to your project's specific needs. For example, you can specify build targets, testing configurations, or output directories.

3. **Build Artifacts:** Once all tasks in a pipeline are completed, the final output—known as the "build artifact"—is ready for distribution or further testing. This could be a packaged application, a deployable build, or other output specific to your Unity project.

## Using Tasks in Your Pipeline

To include a task in your pipeline, you simply define it in the pipeline configuration file, specify its parameters, and arrange it in the correct sequence. This extension provides detailed documentation for each task, including its purpose, configuration options, and examples of usage.

In the next sections, you’ll find comprehensive guides for each task included in this extension. These guides will help you:

- Understand the role of each task in the pipeline.

- Configure tasks to suit your specific project requirements.

- Optimize your CI/CD pipeline for Unity development.

With these tools and resources, you’ll be able to build, test, and deploy your Unity projects with greater efficiency and confidence.