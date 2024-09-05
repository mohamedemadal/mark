export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'dashboard',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
      disabled: true,
      children: [

      ],
    },

    {
      name: 'statistics',
      displayName: 'users_management',
      meta: {
        icon: 'vuestic-iconset-user',
      },
      disabled: true,
      children: [
        {
          name: 'users',
          displayName: 'users',
        },
        {
          name: 'customers',
          displayName: 'customers',
        },
        {
          name: 'roles',
          displayName: 'roles',
        },
        {
          name: 'Permissions',
          displayName: 'permissions',
        },
      ],
    },






  ] as INavigationRoute[],
}
