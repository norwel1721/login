

<script setup>
import { reactive, ref, computed } from "vue";
import { vMaska } from "maska";


let show1 = ref(false);
let data = reactive({});

const login = () => {
  axios({ method: "post", url: "login", data: data }).then((res) => {
    if (res.status == 200) {
      location.reload();
    }
  }).catch(err =>{
    alert(err.response.data.message)
  })
};


let regData = reactive({});
const register = () =>{
  axios({
    method: "post", 
    url: "register",
    data: regData
  }).then((res) => {
    location.reload();
  }).catch(err =>{
    // console.log(err)
    alert(err.response.data.message)
  })
}

const tab = ref('')
const options = { mask: '##/##/####' };
const test = computed(() => {});
</script>



<template>
  <v-layout>
    <div>
      <v-card
        outlined
        elevation="3"
        width="600"
        style="
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        "
      >
        <v-container>
          <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">LOGIN</v-tab>
      <v-tab value="two">SIGN UP</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-model="data.email"
                label="Enter Email"
                prepend-icon="mdi-at"
                :rules="[
                  (v) =>
                  !v ||
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'E-mail must be valid',
                  (v) => !!v || 'Field is required'
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">

              <v-text-field
                v-model="data.password"
                prepend-icon="mdi-lock-outline"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Enter Password"
                @click:append="show1 = !show1"
                @keypress.enter="login()"
                :rules="[
                  (v) => !!v || 'Field is required',
                  (v) =>
                    (v || '').length >= 8 ||
                    'Must contain atlest 8 characters.',
                ]"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn block color="pink" @click="login()">
                LOGIN
                <v-icon> mdi-login-variant </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>

        <v-window-item value="two">
          <v-row>
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-model="regData.name"
                label="Name"
                prepend-icon="mdi-account"
                :rules="[(v) => !!v || 'Field is required']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-maska:[options]
                v-model="regData.birthday"
                label="Birthday"
                placeholder="dd/mm/yyyy"
                prepend-icon="mdi-account"
                :rules="[(v) => !!v || 'Field is required']"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="pb-0">
              <v-text-field
                v-model="regData.email"
                label="Email"
                placeholder="johndoe@gmail.com"
                prepend-icon="mdi-at"
                :rules="[
                  (v) =>
                  !v ||
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'E-mail must be valid',
                  (v) => !!v || 'Field is required'
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field
                v-model="regData.password"
                prepend-icon="mdi-lock-outline"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                @click:append="show1 = !show1"
                :rules="[
                  (v) => !!v || 'Field is required',
                  (v) =>
                    (v || '').length >= 8 ||
                    'Must contain atlest 8 characters.',
                ]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
              <v-text-field
                v-model="regData.password_confirmation"
                prepend-icon="mdi-lock-outline"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Confirm Password"
                @click:append="show1 = !show1"
                @keypress.enter="register()"
                :rules="[(v) => regData.password_confirmation === regData.password || 'Password must match']"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn block color="pink" @click="register()">
                REGISTER
                <!-- <v-icon> mdi-login-variant </v-icon> -->
              </v-btn>
            </v-col>
          </v-row>
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>

        </v-container>
      </v-card>
    </div>
  </v-layout>
</template>


