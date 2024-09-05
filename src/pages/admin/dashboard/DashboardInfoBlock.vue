<template>
  <div class="pt-6 grid grid-cols-12 gap-6">
    <div class="col-span-12  flex flex-wrap">
      <div class="w-full pb-6 grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-6">
        <va-card v-for="(info, idx) in infoTiles" :key="idx" class=" mb-8" :color="info.color">
          <va-card-content>
            <h2 class="va-h2 m-0 text-white">{{ info.value }}</h2>
            <p class="text-white">{{  info.text}}</p>
          </va-card-content>
        </va-card>
      </div>


    </div>

  </div>
  <div class="card">
        <Chart type="bar" :data="chartData" :options="chartOptions" class="h-[500px]" />
    </div>
</template>

<script setup lang="ts">
import  Chart  from 'primevue/chart';
 const chartData = ref();
 const chartOptions = ref();
  import { ref,onMounted } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { VaCarousel, VaModal, VaCard, VaCardContent, VaCardTitle, VaButton, VaImage, useColors } from 'vuestic-ui'

  const { t } = useI18n()
  const { colors } = useColors()
  import axios from "axios";
   const userdata =ref([])
  const infoTiles = ref([
    {
      color: 'success',
      value: '0',
      text: 'users',
      icon: '',
    },
    {
      color: '#098071',
      value: '0',
      text: 'Accommodations',
      icon: '',
    },
    {
      color: '#FFACA6',
      value: '0',
      text: 'tourists',
      icon: '',
    },
    {
      color: '#AF9744',
      value: '0',
      text: 'Active driver',
      icon: '',
    },
    {
      color: '#E42222',
      value: '0',
      text: 'pending driver',
      icon: '',
    },
    {
      color: '#B2B2B2',
      value: '0',
      text: 'guides',
      icon: '',
    },
    {
      color: '#E42222',
      value: '0',
      text: 'pending guides',
      icon: '',
    },
    {
      color: '#D6669D',
      value: '0',
      text: 'orders',
      icon: '',
    },
  ])
  const setChartData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {

        labels: ['Tourists', 'Drivers', 'Guides'],
        datasets: [
            {
                label: 'New users registered in the last 6 months ',
                data: [],
                backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                borderWidth: 1
            }
        ]
    };
};
const setChartOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    return {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            legend: {
                labels: {
                    color:  ['#3D9209'],
                    size: 16
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
}

  onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();

  // productService.getProducts().then((data) => (products.value = data));

  axios.get("/api/total").then((res)=>{
    infoTiles.value[0].value=res.data.users
    infoTiles.value[1].value=res.data.accommmoditions
    infoTiles.value[2].value=res.data.tourists
    infoTiles.value[3].value=res.data.driver_approved
    infoTiles.value[4].value=res.data.driver_pending
    infoTiles.value[5].value=res.data.guides_approved
    infoTiles.value[6].value=res.data.guides_pending
    infoTiles.value[7].value=res.data.order_approved

  });
  axios.get("/api/AllUsers").then((res)=>{

     console.log(res.data.data)
    chartData.value.datasets[0].data[0] = res.data.data.tourist
    chartData.value.datasets[0].data[1] = res.data.data.driver
    chartData.value.datasets[0].data[2] = res.data.data.guide

  });

  const modal = ref(false)
  const currentImageIndex = ref(0)
  const images = ref([
    'https://i.imgur.com/qSykGko.jpg',
    'https://i.imgur.com/jYwT08D.png',
    'https://i.imgur.com/9930myH.jpg',
    'https://i.imgur.com/2JxhWD6.jpg',
    'https://i.imgur.com/MpiOWbM.jpg',
  ])






})
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background-primary);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
