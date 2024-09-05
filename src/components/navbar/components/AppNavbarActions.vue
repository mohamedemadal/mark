<template>
  <div class="app-navbar-actions">

    <LocaleSelect id="local-switcher"></LocaleSelect>
    <div class="relative">

      <p class="absolute top-0 right-0 font-bold text-[white] text-base bg-[red] px-2 rounded-full">{{ x }}</p>
      <svg width="35px" height="38px" viewBox="0 0 1024 1024" fill="#ffffff" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="46.08"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M538.4 1017.6h-6.4c-80-4-112.8-72-118.4-107.2-2.4-14.4 7.2-28 21.6-29.6h4.8c12.8 0 23.2 8.8 25.6 21.6 0.8 6.4 12.8 60.8 69.6 64h4.8c53.6 0 66.4-61.6 66.4-64.8 2.4-12 12.8-20.8 25.6-20.8 1.6 0 3.2 0 5.6 0.8 6.4 1.6 12.8 5.6 16.8 11.2s5.6 12.8 4 19.2c-8.8 36-43.2 105.6-120 105.6z m-453.6-144c-24 0-43.2-7.2-55.2-20.8-10.4-12-13.6-28-12.8-38.4V784c-3.2-18.4 4-61.6 84-136 78.4-72.8 127.2-271.2 127.2-413.6C228.8 69.6 461.6 48.8 471.2 48h4.8V28C476 16 485.6 6.4 497.6 6.4h21.6c12 0 21.6 9.6 21.6 21.6V48h9.6c10.4 0.8 244.8 20 244.8 185.6 0 140.8 52.8 340.8 132 413.6 80 74.4 80 115.2 79.2 138.4v27.2c0.8 14.4-0.8 28-8.8 38.4-11.2 14.4-28.8 22.4-53.6 22.4H84.8z m-15.2-55.2c0.8 0.8 5.6 3.2 15.2 3.2h868.8l1.6-44.8v-2.4c0-5.6-4.8-32.8-64-87.2-92-86.4-148.8-302.4-148.8-452.8 0-115.2-192.8-133.6-194.4-133.6h-74.4c-20 2.4-192.8 23.2-192.8 133.6 0 132-44.8 360-143.2 452-60.8 56-67.2 84.8-68 90.4l0.8 1.6-0.8 40z" fill=""></path></g></svg></div>

     <settings-dropdown class="app-navbar-actions__item" />
    <language-dropdown style="width: 100% !important;text-align: justify !important;padding-right: 15px;font-size: 17px !important; " class="app-navbar-actions__item" />
    <profile-dropdown class="app-navbar-actions__item app-navbar-actions__item--profile">
      <span>Admin</span>

    </profile-dropdown>
  </div>
</template>

<script setup lang="ts">
import { onMounted,ref, computed } from 'vue'
import axios from "axios";
  import LanguageDropdown from './dropdowns/LanguageDropdown.vue'
  import ProfileDropdown from './dropdowns/ProfileDropdown.vue'
  import NotificationDropdown from './dropdowns/NotificationDropdown.vue'
  import MessageDropdown from './dropdowns/MessageDropdown.vue'
  import ColorDropdown from './dropdowns/ColorDropdown.vue'
  import * as PusherPushNotifications from "@pusher/push-notifications-web";
  import LocaleSelect from '../../LocaleSelect.vue'
  const x =ref(0)
  onMounted(() => {


axios.get(`api/GetUnreadNotifications`).then((res) => {
  console.log(res.data.data.length)
    x.value=res.data.data.length
})


})
  withDefaults(
    defineProps<{
      userName?: string
      isTopBar?: boolean
    }>(),
    {
      userName: '',
      isTopBar: false,
    },
  )

  defineEmits<{
    (e: 'update:isTopBar', isTopBar: boolean): void
  }>()

  // const isTopBarProxy = computed({
  //   get() {
  //     return props.isTopBar
  //   },
  //
  //   set(isTopBar: boolean) {
  //     emit('update:isTopBar', isTopBar)
  //   },
  // })


  // const beamsClient = new PusherPushNotifications.Client({
  //   instanceId: '140343aa-f173-4a2d-940a-7724c7c12be1',
  // });
  //
  // beamsClient.start()
  //   .then(() => beamsClient.addDeviceInterest('hello'))
  //   .then(() => console.log('Successfully registered and subscribed!'))
  //   .catch(console.error);
</script>

<style lang="scss">
  .app-navbar-actions {
    display: flex;
    align-items: center;

    .va-dropdown__anchor {
      color: var(--va-primary);
      fill: var(--va-primary);
    }

    &__item {
      padding: 0;
      margin-left: 1.25rem;
      margin-right: 1.25rem;

      svg {
        height: 24px;
      }

      &:last-of-type {
        margin-right: 0;
      }

      &--profile {
        display: flex;
        justify-content: center;
        margin: auto 0 auto 1.25rem;
      }

      .va-dropdown-content {
        background-color: var(--va-white);
      }

      @media screen and (max-width: 640px) {
        margin-right: 0;

        &:first-of-type {
          margin-left: 0;
        }

        &--profile {
          position: absolute;
          right: 0.75rem;
          top: 1.25rem;
          height: fit-content;
          margin: auto;
        }
      }
    }
  }
</style>
