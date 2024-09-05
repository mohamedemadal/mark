
<script>
import { FilterMatchMode } from 'primevue/api';
import axios from 'axios';
import { useAppLangStore } from "../../../stores/AppLangStore";

export default {
  data() {
    return {
      langStore: useAppLangStore(),
      loading: true,
      users: null,
      selectedProducts: null,
      dt: null,
      filters: {},

    };
  },
  computed: {
    computedAppLang() {
      return this.appLang;
    }
  },
  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    exportCSV() {
      if (this.dt) {
        this.dt.exportCSV();
      }
    },
    fetchData() {
      axios.get(`/api/roles/get/permissions?lang=${localStorage.getItem('appLang')}`)
        .then((res) => {
          this.loading = false;
          this.users = res.data.data;
        });
    },
    handleLangChange(newLang) {
      if (newLang === 'en') {
        // Handle English locale
      } else {
        // Handle Arabic locale
      }
    }
  },

  beforeMount() {
    this.initFilters();
  },
  mounted() {
    this.fetchData();
  }
};
</script>
<template>
  <div class="grid">
    <div class="col-12">
      <va-card class="card">
        <Toolbar class="mb-4">
          <template #end>
            <div class="my-2">
              <Button label="Export" icon="pi pi-upload" class="new" @click="exportCSV($event)"/>
              <!-- <Button label="New" icon="pi pi-plus" class="new mr-2" @click="openNew"/> -->
              <!--              <Button-->
              <!--                label="Delete"-->
              <!--                icon="pi pi-trash"-->
              <!--                class="p-button-danger"-->
              <!--                :disabled="!selectedProducts || !selectedProducts.length"-->
              <!--                @click="confirmDeleteSelected"-->
              <!--              />-->
            </div>
          </template>
        </Toolbar>
        <Toast/>
        <DataTable
          ref="dt"
          v-model:selection="selectedProducts"
          :value="users"
          :loading="loading"
          data-key="id"
          :paginator="true"
          :rows="10"
          :filters="filters"
          paginator-template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
          :rows-per-page-options="[5, 10, 25]"
          current-page-report-template="Showing {first} to {last} of {totalRecords} products"
          responsive-layout="scroll"
        >
          <template #header>
            <div class="flex flex-column md:flex-row md:justify-between md:align-items-center">
              <h5 class="m-0">{{ $t("permissions") }} </h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search"/>
                <InputText v-model="filters['global'].value" placeholder="Search..."/>
              </span>
            </div>
          </template>
          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <Column field="id" :header='$t("id")' :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.id }}
            </template>
          </Column>
          <Column field="name" :header='$t("permission_name")'  :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>

          <!--          <Column header="Image" header-style="width:14%; min-width:10rem;">-->
          <!--            <template #body="slotProps">-->
          <!--              <span class="p-column-title">Image</span>-->
          <!--              <img-->
          <!--                :src="'demo/images/product/' + slotProps.data.image"-->
          <!--                :alt="slotProps.data.image"-->
          <!--                class="shadow-2"-->
          <!--                width="100"-->
          <!--              />-->
          <!--            </template>-->
          <!--          </Column>-->
          <Column header-style="min-width:10rem;">
            <template #body="slotProps">

            </template>
          </Column>
        </DataTable>


      </va-card>
    </div>
  </div>

</template>
<style scoped lang="scss"></style>
