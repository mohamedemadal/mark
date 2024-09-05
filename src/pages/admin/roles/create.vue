<script setup>
import {FilterMatchMode} from 'primevue/api'
import {ref, onMounted, onBeforeMount} from 'vue'
// import ProductService from '@/service/ProductService';
import {useToast} from 'primevue/usetoast'
import axios from "axios";
const toast = useToast()
const loading = ref(true)
const role = ref({
  name:'',
  permissions:[]
})
const error = ref('')
const permissions = ref([])
const roles = ref([])
const updateDialog=ref(false)
const productDialog = ref(false)
const deleteDialog = ref(false)
const deleteProductsDialog = ref(false)
const product = ref({})
const selectedProducts = ref(null)
const dt = ref(null)
const filters = ref({})
const submitted = ref(false)

const delete_id =ref(Number)


// const productService = new ProductService();

onBeforeMount(() => {
  initFilters()
})

 const fetchData= ()=>{


  axios.get("/api/roles").then((res)=>{
    loading.value= false
    roles.value= res.data.data

  });
  axios.get(`/api/roles/get/permissions?lang=${localStorage.getItem('appLang')}`,).then((res)=>{
    loading.value= false


    permissions.value= res.data.data

  });
}

onMounted(() => {

  // productService.getProducts().then((data) => (products.value = data));
fetchData()

})


const openNew = () => {
  role.value=''
  product.value = {}
  submitted.value = false
  productDialog.value = true
}

const update =()=>{

  axios.put(`/api/roles/${delete_id.value}`,role.value).then((res)=>{
 updateDialog.value=!(updateDialog.value)
 fetchData()

  });
}


const create_role = () => {

  axios
    .post('api/roles',role.value)
    .then((res) => {
      fetchData()
      productDialog.value=!(productDialog.value)

      toast.add({severity: 'success', summary: 'Successful', detail: 'role create', life: 3000})
    })
    .catch((el)=>{
      error.value = el.response.data.errors
    })
}


const edit = (id) => {
  delete_id.value=id
  updateDialog.value = true
  axios.get(`/api/roles/${id}`).then((res)=>{
    loading.value= false

    role.value.name=res.data.data.name

   for(let i=0 ;i <res.data.data.permissions.length;i++){

    role.value.permissions.push(res.data.data.permissions[i].pivot.permission_id)
   }








  });

}

const confirmDelete = (id) => {
  delete_id.value=id
  deleteProductsDialog.value=true

}




const exportCSV = () => {
  dt.value.exportCSV()
}


const deleteSelectedProducts = () => {

axios.delete(`api/roles/${delete_id.value}`)
fetchData()
deleteProductsDialog.value=false
toast.add({severity: 'success', summary: 'Successful', detail: 'Roles Deleted', life: 3000})
}

const initFilters = () => {
  filters.value = {
    global: {value: null, matchMode: FilterMatchMode.CONTAINS},
  }
}
</script>

<template>
  <div class="grid">
    <div class="col-12">
      <va-card class="card">
        <Toolbar class="mb-4">
          <template #start>
            <div class="my-2">
              <Button :label='$t("new")' icon="pi pi-plus" class="new mr-2" @click="openNew"/>
<!--              <Button-->
<!--                label="Delete"-->
<!--                icon="pi pi-trash"-->
<!--                class="p-button-danger"-->
<!--                :disabled="!selectedProducts || !selectedProducts.length"-->
<!--                @click="confirmDeleteSelected"-->
<!--              />-->
            </div>
          </template>

          <template #end>
<!--            <FileUpload-->
<!--              mode="basic"-->
<!--              accept="image/*"-->
<!--              :max-file-size="1000000"-->
<!--              label="Import"-->
<!--              choose-label="Import"-->
<!--              class="mr-2 inline-block"-->
<!--            />-->
            <Button :label='$t("Export")' icon="pi pi-upload" class="new" @click="exportCSV($event)"/>
          </template>
        </Toolbar>

        <Toast/>


        <DataTable
          ref="dt"
          v-model:selection="selectedProducts"
          :value="roles"
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
              <h5 class="m-0">{{ $t("roles") }}</h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search"/>
                <InputText v-model="filters['global'].value" :placeholder='$t("Search")'/>
              </span>
            </div>
          </template>

          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <Column field="id" :header='$t("id")' :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.id }}
            </template>
          </Column>

          <Column field="name"  :header='$t("role_name")' :sortable="true" header-style="width:14%; min-width:10rem;">
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
              <Button
                icon="pi pi-pencil"
                class="p-button-rounded p-button-success mr-2"
                @click="edit(slotProps.data.id)"
              />
              <Button
                icon="pi pi-trash"
                class="delete mt-2"
                @click="confirmDelete(slotProps.data.id)"
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

        <Dialog v-model:visible="productDialog" :style="{ width: '450px' }" :header='$t("Create_roles")' :modal="true"  class="p-fluid" >

          <div class="field mb-5">
            <label for="last">{{ $t("role_name") }} </label>
            <InputText class="mt-3 w-full" id="first" v-model="role.name" required="true"   :placeholder='$t("role_name")'/>

          </div>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>
          <div class="card flex justify-content-center">
            <MultiSelect v-model="role.permissions"  filter option-value="id"  :options="permissions" optionLabel="name" :placeholder='$t("permissions")'
              class="w-full md:w-20rem" />
           </div>
           <div class="mt-1 mb-5 text-red-500" v-if="error?.permissions">{{ error.permissions[0] }}</div>



          <template #footer>
            <Button :label='$t("Confirm")'  class="w-full m-auto" @click="create_role"/>


          </template>
        </Dialog>

        <Dialog v-model:visible="updateDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">


          <div class="field mb-5">
            <label for="last">{{ $t("role_name") }} </label>
            <InputText class="mt-3 w-full" id="first" v-model="role.name" required="true"   :placeholder='$t("role_name")'/>

          </div>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>
          <div class="card flex justify-content-center">
            <MultiSelect v-model="role.permissions"  filter option-value="id"  :options="permissions" optionLabel="name" :placeholder='$t("permissions")'
              class="w-full md:w-20rem" />
           </div>
           <div class="mt-1 mb-5 text-red-500" v-if="error?.permissions">{{ error.permissions[0] }}</div>




           <template #footer>
            <Button :label='$t("Confirm")'  class="w-full m-auto" @click="update"/>


          </template>


        </Dialog>


      </va-card>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

