<script setup>
import { FilterMatchMode } from 'primevue/api'
import { ref, onMounted, onBeforeMount } from 'vue'
import axios from "axios";
const item_id =ref(null)
const loading = ref(true)
const delete_id=ref('')
import {useRouter} from "vue-router";

const router = useRouter()
const error = ref('')
const users = ref(null)
const deleteDialog = ref(false)
const deleteProductsDialog = ref(false)
const product = ref({})
const selectedProducts = ref(null)
const dt = ref(null)
const filters = ref({})

const exportCSV = () => {
  dt.value.exportCSV()
}


const delet =(id)=>{

  delete_id.value=id
  deleteProductsDialog.value=true


}
const deleteSelectedProducts = () => {

    axios.delete(`/api/customers/${delete_id.value}`).then((res)=>{
    loading.value= false

     fetchData()
      deleteProductsDialog.value=false
  });

}

const initFilters = () => {
  filters.value = {
    global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  }
}
onBeforeMount(() => {
  initFilters()
})



const fetchData= ()=>{
  axios.get("/api/customers").then((res)=>{
    loading.value= false
    users.value= res.data.data

  });

}
onMounted(() => {
  // productService.getProducts().then((data) => (products.value = data));

  fetchData()

})

const openNew = () => {
  router.push({ name: 'customer-create' })
}



const confirmDelete = (id) => {
  item_id.value=id
  error.value=ref('')

  deleteDialog.value = true
}



</script>
<template>
  <div class="grid">
    <div class="col-12">
      <va-card class="card">
        <Toolbar class="mb-4">
          <template #start>
            <div class="my-2 ">
              <Button :label='$t("new")' icon="pi pi-plus" class="new mr-2" @click="openNew"/>


            </div>

          </template>
          <template #end>
            <div class="my-2 ">


              <Button :label='$t("Export")' icon="pi pi-upload" class="new" @click="exportCSV($event)"/>
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
              <h5 class="m-0 my-auto px-2">{{ $t("customers") }} </h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search"/>
                <InputText v-model="filters['global'].value" :placeholder='$t("Search")'/>
              </span>
            </div>
          </template>
          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <Column field="name" :header='$t("customer_name")' :sortable="true" header-style="width:14%; min-width:14rem;">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>
          <Column field="email" :header='$t("customer_adress")' :sortable="true" header-style="width:16%; min-width:14rem;">
            <template #body="slotProps">
              {{ slotProps.data?.addresses[0]?.location }}
            </template>
          </Column>
          <Column field="type" :header='$t("customer_phone")' :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data?.phones[0]?.number }}
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
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success mr-2"
                @click="confirmDelete(slotProps.data.id)"
              />
              <Button
                icon="pi pi-trash"
                class="delete mt-2"
                @click="delet(slotProps.data.id)"
              />

            </template>
          </Column>
        </DataTable>
        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" :header='$t("Confirm")' :modal="true">
          <div class="flex align-items-center justify-content-center">
            <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem"/>
            <span v-if="product">{{ $t("Are_you_sure_you_want_to_delete") }}</span>
          </div>
          <template #footer>
            <Button :label='$t("no")'  icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false"/>
            <Button :label='$t("yes")' icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts"/>
          </template>
        </Dialog>


      </va-card>
    </div>
  </div>

</template>
<style scoped lang="scss"></style>
