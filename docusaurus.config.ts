import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    plugins: [
        async function myPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],
    title: 'Unity Tools for Azure DevOps',
    tagline: 'Free and open source. Save time and money by automating your Unity builds and deployments!',
    favicon: 'img/favicon.ico',
    url: 'https://www.unitydevops.com',
    baseUrl: '/',
    organizationName: 'Dinomite',
    projectName: 'unity-azure-pipelines-tasks-docs',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl:
                        'https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks-docs/edit/main/'
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],
    themeConfig: {
        image: 'img/page-preview.png',
        metadata: [
            {
                name: 'og:title',
                content: 'Unity Tools for Azure DevOps'
            },
            {
                name: 'og:description',
                content: 'Free and open source. Save time and money by automating your Unity builds and deployments!'
            },
            {
                name: 'og:url',
                content: 'https://www.unitydevops.com/'
            },
            {
                name: 'og:site_name',
                content: 'Unity Tools for Azure DevOps'
            },
            {
                name: 'og:image',
                content: 'img/page-preview.png'
            },
            {
                name: 'og:type',
                content: 'website'
            }
        ],
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
                    href: 'https://discord.gg/RpHSpxkEP6',
                    label: 'Join Our Discord',
                    position: 'left'
                },
                {
                    href: 'https://github.com/Dinomite-Studios/unity-azure-pipelines-tasks',
                    label: 'Source Code',
                    position: 'right',
                }
            ]
        },
        footer: {
            style: 'light',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Introduction',
                            to: 'docs/',
                        },
                        {
                            label: 'Tasks',
                            to: 'docs/category/tasks',
                        },
                        {
                            label: 'Examples',
                            to: 'docs/category/examples',
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
                            label: 'Dinomite Website',
                            to: 'https://www.dinomite.games',
                        },
                        {
                            label: 'Dinomite on GitHub',
                            href: 'https://github.com/Dinomite-Studios',
                        }
                    ],
                }
            ],
            copyright: `Copyright © 2022-${new Date().getFullYear()} Dinomite. All rights reserved.`,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        }
    } satisfies Preset.ThemeConfig,
};

export default config;