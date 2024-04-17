export default defineAppConfig({
    /**
     * Navbar menu items
     */
    navbar: [
        {
            icon: 'material-symbols:developer-guide-outline-rounded',
            label: 'Guides',
            url: '/guides'
        },
        {
            icon: 'material-symbols:code-rounded',
            label: 'API Reference',
            url: '/reference'
        },
        {
            icon: 'ic:outline-question-answer',
            label: 'Support',
            items: [
                {
                    icon: 'material-symbols:support-agent-rounded',
                    label: 'Contact Us',
                    description: 'Talk to us, we would love to hear from you',
                    url: '/support/contact-us'
                },
                {
                    icon: 'icon-park-outline:personal-privacy',
                    label: 'Privacy policy',
                    description: 'Learn more about our privacy policy',
                    url: '/support/privacy-policy'
                },
                {
                    icon: 'icon-park-outline:agreement',
                    label: 'Terms of Service',
                    description: 'Learn more about our terms of service',
                    url: '/support/terms-of-service'
                }
            ]
        }
    ],
    /**
     * Sidebar menu items
     */
    sidebar: {
        // Fasstap
        '/guides/fasstap/': [
            { url: '/guides/fasstap/introduction/${version.fasstap}/overview' }
        ],
        '/reference': [
            { icon: 'material-symbols:phone-android-outline', label: 'Fasstap™', url: '/reference/fasstap/${version.fasstap}/sdk-api' }
        ],
        '/reference/fasstap': [
            { url: '/reference/fasstap/${version.fasstap}/sdk-api' },
            { url: '/reference/fasstap/${version.fasstap}/web-api' }
        ]
    },
    /**
     * Page groups
     */
    pageGroup: {
        '/guides/fasstap/': {
            home: '/guides',
            title: 'Fasstap™'
        },
        '/reference/fasstap/': {
            home: '/reference',
            title: 'Fasstap™'
        }
    },
    /**
     * Product versions
     */
    productVersions: {
        'fasstap': {
            platforms: [
                {
                    name: 'Android',
                    versions: [
                        {
                            version: 'v3.5.0.4',
                            path: '/android/latest/'
                        }
                    ]
                },
                {
                    name: 'iOS',
                    versions: [
                        {
                            version: 'v1.0.0',
                            path: '/ios/latest/'
                        }
                    ]
                }
            ]
        }
    },
    /**
     * Footer information
     */
    footer: {
        companyName: 'Soft Space Sdn Bhd',
        registrationNo: '201201002345 (975870-D)',
        website: 'http://www.softspace.com.my',
        phone: '+603 7494 1222',
        email: 'hello@softspace.com.my',

    },
    nuxtIcon: {
        size: '1.25rem',
        class: 'ss-icon',
    }
})