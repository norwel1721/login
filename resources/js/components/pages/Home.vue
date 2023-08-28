<script setup>
import { useCounterStore } from '../../mainStore'
const store = useCounterStore()
// console.log(store)

const { increment } = store
const users = window.user

// console.log(users)
</script>

<template>
  <v-container fluid>
    <v-alert
      color="orange"
      theme="dark"
      border
    >
      <h1>User Info</h1>
    </v-alert>
    <!-- <h3>Count: {{store.count}}</h3>
    <v-btn @click="increment()">
      +
    </v-btn> -->
    <v-table>
        <thead>
          <tr>
            <th>ID Number</th>
            <th>{{ users.id }}</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>{{ users.name }}</th>
          </tr>
          <tr>
            <th>Birthday</th>
            <th>{{ users.birthday }}</th>
          </tr>
          <tr>
            <th>Email</th>
            <th>{{ users.email }}</th>
          </tr>
        </thead>
    </v-table>
  </v-container>
</template>