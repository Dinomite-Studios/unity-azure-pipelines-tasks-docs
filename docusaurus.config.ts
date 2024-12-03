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
    tagline: 'Set up CI/CD for Unity projects powered by Azure Pipelines',
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
        image: 'https://github.com/realitycollective/realitycollective.logo/blob/main/RealityToolkit/RepoBanners/com.realitytoolkit.core.png?raw=true',
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
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: false
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        }
    } satisfies Preset.ThemeConfig,
};

export default config;