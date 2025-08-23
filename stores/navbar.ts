import { defineStore } from "pinia";
import { usePluginsStore } from './plugins'

export const useMiddleNavbarItems = defineStore("middleNavbarItems", {
  state: () => {
    const plugins = usePluginsStore()
    const pluginsChildren = plugins.getTopPlugins().map((plugin) => {
      return {
        label: plugin.name,
        icon: 'i-lucide-' + plugin.icon,
        description: plugin.shortDescription,
        to: `/plugin/${plugin.name.replace(' ', '~')}`,
        active: false
      }
    });
    return ({
      //maybe do something with a content slot here
      items: [
        [
          {
            label: 'About Me',
            icon: 'i-lucide-user',
            to: '/about',
            active: false,
            defaultOpen: true,
            children: [
              {
                label: 'Introduction',
                icon: 'i-lucide-user',
                description: 'A little on me',
                to: '/about',
                active: false
              },
              {
                label: '2010',
                icon: 'i-lucide-user',
                description: '6 years old | Modding',
                to: '/about',
                active: false
              },
              {
                label: '2016',
                icon: 'i-lucide-user',
                description: '12 years old | Programming',
                to: '/about',
                active: false
              },
              {
                label: '2018',
                icon: 'i-lucide-user',
                description: '14 years old | The Web',
                to: '/about',
                active: false
              },
              {
                label: '2020',
                icon: 'i-lucide-user',
                description: '16 years old | GCSEs',
                to: '/about',
                active: false
              },
              {
                label: '2022',
                icon: 'i-lucide-user',
                description: 'A-18 years old | levels',
                to: '/about',
                active: false
              },
              {
                label: '2025',
                icon: 'i-lucide-user',
                description: '21 years old | Degree',
                to: '/about',
                active: false
              },
            ]
          },
          {
            label: 'Experience',
            icon: 'i-lucide-briefcase-business',
            to: '/experience',
            active: false,
            defaultOpen: true,
            children: [...pluginsChildren, {
              label: 'more...',
              icon: 'i-lucide-box',
              description: 'lots more available',
              to: '/plugin',
              active: false
            }]
          },
          {
            label: 'Portfolio',
            icon: 'i-lucide-presentation',
            to: '/portfolio',
            active: false,
            children: [
              {
                label: 'Installation',
                description: 'Requirements, steps & suggestions',
                icon: 'i-lucide-loader',
                to: '/documentation?section=installation'
              },
              {
                label: 'How to Use',
                description: 'The tray task, plugins & command types',
                icon: 'i-lucide-pointer',
                to: '/documentation?section=general-usage'
              },
              {
                label: 'Settings',
                icon: 'i-lucide-sliders-vertical',
                description: 'Defaults & extra information',
                to: '/documentation?section=settings'
              },
              {
                label: 'Building the app',
                icon: 'i-lucide-drill',
                description: 'Steps to produce the published release',
                to: '/documentation?section=build-app'
              },
              {
                label: 'API Documentation',
                icon: 'i-lucide-code',
                description:
                  'Documentation generated from source files',
                to: '/documentation?section=api-documentation'
              },
              {
                label: 'Creating a plugin',
                icon: 'i-lucide-toy-brick',
                description:
                  'Creating new item types & producing their plugin ',
                to: '/documentation?section=creating-plugin'
              },
              {
                label: 'FAQ by Developers',
                icon: 'i-lucide-circle-help',
                description:
                  'Answers to frequently asked questions',
                to: '/documentation?section=faq'
              }
            ]
          },
          {
            label: 'CV',
            icon: 'i-lucide-file-text',
            to: { path: '/', hash: '#faq' },
            active: false
          }
        ],
      ]
    })
  },
  actions: {
  },
});
