/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    tutorialSidebar: 
  [
    {
      type: 'doc',
      id: 'welcome',
      className: 'welcome'
    },

     {
      type: 'category',
      label: 'Payments',
      collapsed: false,
      items: [
        'Payments/accepting-payment',
        'Payments/recurring-payment',
        'Payments/currency-exchange',
        'Payments/settlement',
        'Payments/testing-payment',
        'Payments/sub-accounts',
        'Payments/virtual-accounts',
        'Payments/transfer-apis'
       
      ]
    },

    {
      type: 'category',
      label: 'Developer Tools',
      collapsed: false,
      items: [
        "Developer-Tools/overview",
        "Developer-Tools/ios-sdk",
        "Developer-Tools/android-sdk",
        "Developer-Tools/flutter-sdk",
        "Developer-Tools/inline-js"
      ]
    },
    {
      type: 'category',
      label: 'Libraries',
      collapsed: false,
      items: [
        "Libraries/overview",
        {
          type: 'link',
          label: 'React Library',
          href: 'https://www.npmjs.com/package/@spot-flow/react-spotflow-checkout'
        },
        {
          type: 'link',
          label: 'Angular Library',
          href: 'https://www.npmjs.com/package/@spot-flow/ng-spotflow-checkout'
        },
        {
          type: 'link',
          label: 'Vue Library',
          href: 'https://www.npmjs.com/package/@spot-flow/vue-spotflow-checkout'
        }
      ]
    }
  ]
}

export default sidebars;