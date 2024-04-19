export default defineAppConfig({
    /**
     * Navbar menu items
     */
    navbar: [
        { url: '/guides' },
        { url: '/reference' },
        {
            url: '/support',
            items: [
                { url: '/support/contact-us' },
                { url: '/support/privacy-policy' },
                { url: '/support/terms-of-service' }
            ]
        }
    ],
    /**
     * Sidebar menu items
     */
    sidebar: {
        // Fasstap
        '/guides': [
            { 
                icon: 'material-symbols:phone-android-outline', 
                label: 'Fasstap™', 
                url: '/guides/fasstap/introduction/${version.fasstap}/overview'
            }
        ],
        '/guides/fasstap/': [
            { url: '/guides/fasstap/introduction/${version.fasstap}/overview' },
            { url: '/guides/fasstap/introduction/${version.fasstap}/other' }
        ],
        '/reference': [
            { 
                icon: 'material-symbols:phone-android-outline', 
                label: 'Fasstap™', 
                url: '/reference/fasstap/${version.fasstap}/sdk-api' 
            }
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
                        },
                        {
                            version: 'v0.0.1',
                            path: '/android/v0.0.1/'
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