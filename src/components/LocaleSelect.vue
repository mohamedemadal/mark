<script setup>
import { computed } from "vue";
import i18n from "../plugins/i18n";

import { useAppLangStore } from "../stores/AppLangStore";

const appLang = useAppLangStore();

const localeBtn = computed({
  get() {
    if (appLang.appLang == "en") return "عربي";
    else return "english";
  },
  set(val) {
    appLang.appLang = val;
  },
});

const changeLocale = () => {
  i18n.global.locale.value == "ar" ? executeArCode() : executeEnCode();
};

const executeArCode = () => {
  document.body.dir = "ltr";
  let k = document.getElementsByClassName("switcher");
  console.log(k);
  k.dir = "ltr";

  i18n.global.locale.value = "en";
  window.location.reload();
  appLang.setAppLang(i18n.global.locale.value);
  appLang.setAppRtl(false);

};

const executeEnCode = () => {
  document.body.dir = "rtl";
  let k = document.getElementsByClassName("switcher");
  console.log(k);
  k.dir = "rtl";
  i18n.global.locale.value = "ar";
  window.location.reload();
  appLang.setAppLang(i18n.global.locale.value);
  appLang.setAppRtl(true);

};
</script>

<template>
  <button style="width: 90px !important; text-align: center !important; background-color: red !important;font-weight: bold;font-size: larger;" class="rounded-xl py-3 mx-4" @click="changeLocale">
    {{ localeBtn }}

  </button>
</template>

<style scoped>
:deep(.v-input__control) {
  max-width: 60px;
}
</style>
