import Layout from '/@/layout/index.vue'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noredirect',
  name: 'Charts',
  meta: {
    title: 'charts',
    icon: 'chart'
  },
  children: [
    {
      path: 'bar-chart',
      component: () => import('/@/views/charts/bar-chart.vue'),
      name: 'BarChartDemo',
      meta: {
        title: 'barChart',
        noCache: true
      }
    },
    {
      path: 'line-chart',
      component: () => import('/@/views/charts/line-chart.vue'),
      name: 'LineChartDemo',
      meta: {
        title: 'lineChart',
        noCache: true
      }
    },
    {
      path: 'mixed-chart',
      component: () => import('/@/views/charts/mixed-chart.vue'),
      name: 'MixedChartDemo',
      meta: {
        title: 'mixedChart',
        noCache: true
      }
    }
  ]
}

export default chartsRouter
