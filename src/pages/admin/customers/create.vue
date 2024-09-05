<template>
   <va-card  class="card px-[5%] py-[2%]">
    <div class="">
          <label for="password">{{ $t("customer_name") }} </label>
          <InputText required v-model="customer.name" type="text" class="mt-3 w-full mb-3"/>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

    </div>

    <div class="">
          <label for="password">{{ $t("customer_phone") }} </label>
          <div class="flex">
            <InputText v-model="number" inputId="withoutgrouping" class="mt-3 w-full mb-3" :useGrouping="false" />
            <Button @click="add_phones" class="create m-auto w-24 mx-2" icon="pi pi-plus" ></Button>
          </div>
          <div v-if="customer.phones.length >=1" class="flex flex-wrap border-2 ">
           <p class="m-4 font-bold" v-for="phone,index in customer.phones" ><span class="font-semibold text-[green]">{{ index+1 }} - </span>{{ phone.number }}  </p>
           <Button @click="delte_phones" class=" bg-[red] m-auto w-24 mx-2" icon="pi pi-minus" style="background-color: red !important;"></Button>
          </div>

          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div>
        <div class="">
          <label for="password">{{ $t("customer_adress") }} </label>
          <InputText v-model="customer.location" class="mt-3 w-full mb-3"  />
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

       </div>
       <div class="">
          <label for="password">{{ $t("longitude") }} </label>
          <InputText readonly v-model="customer.longitude"  class="mt-3 w-full mb-3"  />
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

       </div>
       <div class="">
          <label for="password">{{ $t("latitude") }} </label>
          <div class="flex">
            <InputText readonly v-model="customer.longitude"  class="mt-3 w-full mb-3"  />
            <Button @click="add_adress" class="create m-auto w-24 mx-2" icon="pi pi-plus" ></Button>

          </div>
          <div class="mt-1 mb-5 text-red-500" v-if="error?.name">{{ error.name[0] }}</div>

       </div>
       <div v-for="addres,index in customer.addresses">
        <div class="flex">
          <p class="my-auto"><span class="font-bold">{{ index+1 }} -</span>   <span class="font-bold">{{ $t("customer_adress") }} : </span><span>{{ addres.location }}</span></p>
          <Button @click="delete_address(index)" class=" bg-[red] m-auto w-24 mx-2" icon="pi pi-minus" style="background-color: red !important;"></Button>

        </div>

       </div>


      </div>
     <div>
      <GoogleMap api-key="AIzaSyDZnJeq94aaneiA3QWUZdWYV9uKDEjxjas" @click="handleMapClick"
                   style="width: 100%; height: 500px"
                   :center="{ lat: 		parseFloat(location.latitude), lng: parseFloat(location.longitude)} " :zoom="14">
          <Marker
              :options="{ position: { lat: parseFloat(location.latitude)		, lng: parseFloat(location.longitude) } }"/>
          <Circle :options="circle"/>

        </GoogleMap>
     </div>
    </div>
    <Button @click="create" class="create m-auto w-full my-3" :label='$t("submit")' ></Button>
   </va-card>
</template>
<script>
import axios from "axios";
import InputNumber from "primevue/inputnumber";
import {GoogleMap, Marker, Circle} from "vue3-google-map";
import {useToast} from 'primevue/usetoast'
export default {
 components:{GoogleMap,Marker,Circle},

  data() {
    return {
      customer:{
        latitude:'',
        longitude:'',
        phones:[],
        addresses:[]
      },
      location :{name: '', latitude: 30.047, longitude: 31.25, distance: 1000},
      error: {},
      maxDate: new Date(),
      number:'',

      // Add other validation rules for the title field
    };



  },
  computed: {
    circle() {

      return {
        center: { lat: this.customer.latitude, lng: this.customer.longitude },
        radius: parseInt(this.customer.distance),
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35
      };
    }
  },
  methods: {

    add_phones(){
      this.customer.phones.push({ number:this.number });

    },
    delte_phones(){
      this.customer.phones.length--
    },


    handleMapClick(event) {
      const clickedLatLng = event.latLng; // LatLng object representing the clicked coordinates
      const lat = clickedLatLng.lat();
      const lng = clickedLatLng.lng();
      this.customer.latitude = lat.toString();;
      this.customer.longitude = lng.toString();;

      // Do something with the latitude and longitude values
    },

    add_adress(){
      if(this.customer.location &&this.customer.latitude&& this.customer.longitude){
        this.customer.addresses.push({ location: this.customer.location ,lat:this.customer.latitude,long:this.customer.longitude});

      }

    },
    delete_address(index){
      this.customer.addresses.splice(index, 1);
    },
    create(){
     axios.post("api/customers",this.customer)
          .then((response) => {

          })
          .catch((error) => {
            this.error = el.response.data.errors
          });
    }

  },
  mounted() {

  },
};
</script>
