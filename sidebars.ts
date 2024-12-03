import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    docsSidebar: [
        {
            type: 'category',
            label: 'Get Started',
            collapsed: false,
            items: ['about'],
        },
        {
            type: 'category',
            label: 'Features',
            collapsed: false,
            items: ['features',
                'unity-build-task',
                'unity-get-project-version-task',
                'unity-activate-license-task',
                'unity-test-task',
                'unity-cmd-task'],
        },
        {
            type: 'category',
            label: 'Examples',
            collapsed: false,
            items: [
                'examples',
                'example-standalone-0'],
        }
    ]
};

export default sidebars;