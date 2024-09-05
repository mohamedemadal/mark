<script setup>
import {useToast} from 'primevue/usetoast'
import { FilterMatchMode } from 'primevue/api'
import { ref, onMounted, onBeforeMount } from 'vue'
import axios from "axios";
const countries = ref([])
const toast = useToast()
const item_id =ref(null)
const loading = ref(true)
const delete_id=ref('')
const user = ref({})
const roles =ref('')

const error = ref('')
const users = ref(null)
const productDialog = ref(false)
const deleteDialog = ref(false)
const deleteProductsDialog = ref(false)
const product = ref({})
const selectedProducts = ref(null)
const dt = ref(null)
const filters = ref({})


const user_typs = ref([
    { name: 'مستخدم  ', code: 'user' },
    { name: 'عميل', code: 'customer' },

]);
const exportCSV = () => {
  dt.value.exportCSV()
}


const delet =(id)=>{

  delete_id.value=id
  deleteProductsDialog.value=true


}
const deleteSelectedProducts = () => {

    axios.delete(`/api/users/${delete_id.value}`).then((res)=>{
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
  axios.get("/api/users").then((res)=>{
    loading.value= false
    users.value= res.data.data

  });
  axios.get("/api/roles").then((res)=>{

    roles.value= res.data.data

  });
}
onMounted(() => {
  // productService.getProducts().then((data) => (products.value = data));

  fetchData()

})

const openNew = () => {
  user.value = ref({})
  error.value = ref('')
  product.value = {}

  productDialog.value = true
}
const updateuser=()=>{

  axios
    .put(`/api/users/${item_id.value}`,user.value)
    .then((res) => {
      console.log(res.data)
      fetchData()


      deleteDialog.value=!(deleteDialog.value)
      toast.add({severity: 'success', summary: 'Successful', detail: 'price Created', life: 3000})

    })
    .catch((el)=>{
      error.value = el.response.data.errors
    })
}
const create =()=>{


  axios
    .post('/api/users',user.value)
    .then((res) => {
      console.log(res.data)
      fetchData()


      productDialog.value=!(productDialog.value)
      toast.add({severity: 'success', summary: 'Successful', detail: 'price Created', life: 3000})
      user.value = ref({})
    })
    .catch((el)=>{
      error.value = el.response.data.errors
    })
}



const confirmDelete = (id) => {
  item_id.value=id
  error.value=ref('')
  axios.get(`/api/users/${item_id.value}`).then((res) => {
    console.log(res)
    user.value.name=res.data.data.name
    user.value.email=res.data.data.email
    user.value.type=res.data.data.type
    user.value.role=res.data.data.roles[0].id

  })
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
              <h5 class="m-0 my-auto px-2">{{ $t("users") }} </h5>
              <span class="block mt-2 md:mt-0 p-input-icon-left">
                <i class="pi pi-search"/>
                <InputText v-model="filters['global'].value" :placeholder='$t("Search")'/>
              </span>
            </div>
          </template>
          <Column selection-mode="multiple" header-style="width: 3rem"></Column>
          <Column field="name" :header='$t("user_name")' :sortable="true" header-style="width:14%; min-width:14rem;">
            <template #body="slotProps">
              {{ slotProps.data.name }}
            </template>
          </Column>
          <Column field="email" :header='$t("Email")' :sortable="true" header-style="width:16%; min-width:14rem;">
            <template #body="slotProps">
              {{ slotProps.data.email }}
            </template>
          </Column>
          <Column field="type" :header='$t("Select_user_type")' :sortable="true" header-style="width:14%; min-width:10rem;">
            <template #body="slotProps">
              {{ slotProps.data.type }}
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
        <Dialog
          v-model:visible="productDialog"
          :style="{ width: '450px' }"
          :header='$t("create_user")'
          :modal="true"
          class="p-fluid"
        >


          <div class="field mb-5">
            <label for="first">{{ $t("user_name") }} </label>
            <div class="flex w-full">
              <InputText class="mt-3 w-full" id="first" v-model="user.name" required="true" autofocus />
            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>
          </div>

          <div class="field mb-5">
            <label for="first"> {{ $t("Email") }}</label>
            <div class="flex">
              <InputText class="mt-3 w-full" id="first" v-model="user.email" required="true" autofocus />
            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.email">{{ error.email[0] }}</div>
          </div>
          <div class="field mb-5">
            <label for="first">{{ $t("Select_user_type") }} </label>
            <div class="flex">
              <Dropdown v-model="user.type" :options="user_typs" optionLabel="name"  option-value="code" :placeholder='$t("Select_user_type")' class="mt-3  w-full " />

            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.type">{{ error.type[0] }}</div>
          </div>
          <div class="card  justify-content-center mb-5">
            <p for="first">{{ $t("roles") }} </p>

            <Dropdown v-model="user.role"  filter option-value="id"  :options="roles" optionLabel="name" :placeholder='$t("roles")'
              class="w-full md:w-20rem mt-3 " />
           </div>
           <div class="mt-1 mb-5 text-red-500" v-if="error?.role">{{ error.roles[0] }}</div>




          <div class="w-full "> <Button   :label='$t("create_user")' class="w-full m-auto" @click="create"/></div>
        </Dialog>
        <Dialog v-model:visible="deleteDialog" :style="{ width: '450px' }" :header='$t("update")' :modal="true">
          <div class="field mb-5">
            <label for="first">{{ $t("user_name") }} </label>
            <div class="flex w-full">
              <InputText class="mt-3 w-full" id="first" v-model="user.name" required="true" autofocus />
            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>
          </div>

          <div class="field mb-5">
            <label for="first"> {{ $t("Email") }}</label>
            <div class="flex">
              <InputText class="mt-3 w-full" id="first" v-model="user.email" required="true" autofocus />
            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.email">{{ error.email[0] }}</div>
          </div>
          <div class="field mb-5">
            <label for="first">{{ $t("Select_user_type") }} </label>
            <div class="flex">
              <Dropdown v-model="user.type" :options="user_typs" optionLabel="name"  option-value="code" :placeholder='$t("Select_user_type")' class="mt-3  w-full " />

            </div>
            <div class="mt-1 mb-5 text-red-500" v-if="error?.type">{{ error.type[0] }}</div>
          </div>
          <div class="card  justify-content-center mb-5">
            <p for="first">{{ $t("roles") }} </p>

            <Dropdown v-model="user.role"  filter option-value="id"  :options="roles" optionLabel="name" :placeholder='$t("roles")'
              class="w-full md:w-20rem mt-3 " />
           </div>
           <div class="mt-1 mb-5 text-red-500" v-if="error?.role">{{ error.roles[0] }}</div>
          <div class="w-full pr-12"> <Button label="update Price"  class="w-full m-auto" @click="updateuser"/></div>
        </Dialog>
      </va-card>
    </div>
  </div>

</template>
<style scoped lang="scss"></style>
