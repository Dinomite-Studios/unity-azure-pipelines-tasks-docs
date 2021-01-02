module.exports = {
  title: 'Unity Tools for Azure DevOps',
  tagline: 'Set up CI/CD for Unity projects powered by Azure Pipelines',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Dinomite-Studios',
  projectName: 'unity-azure-pipelines-tasks',
  themeConfig: {
    navbar: {
      title: 'Unity Tools for Azure DevOps',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About',
              to: 'docs/',
            },
            {
              label: 'Features',
              to: 'docs/features/',
            },
            {
              label: 'Examples',
              to: 'docs/examples/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/RpHSpxkEP6',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Dinomite Studios Website',
              to: 'https://www.dinomitestudios.com/',
            },
            {
              label: 'Dinomite Studios on GitHub',
              href: 'https://github.com/Dinomite-Studios',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dinomite Studios. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks-docs/edit/development/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks-docs/edit/development/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
