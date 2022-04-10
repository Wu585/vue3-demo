<script setup lang="ts">
import {ref} from 'vue';
import {Button, Form, Field, CellGroup} from 'vant';
import axios from 'axios';

type Form = {
  username: string,
  password: string
}

const username = ref('123');
const password = ref('');
console.log(username.value);
const onSubmit = (form: Form) => {
  console.log('submit', form);
  axios.post('api/v1/sessions', form);
};
</script>

<template>
  <button>+1</button>
  <Form @submit="onSubmit">
    <CellGroup inset>
      <Field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <Field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </CellGroup>
    <div style="margin: 16px;">
      <Button round block type="primary" native-type="submit">
        提交
      </Button>
    </div>
  </Form>
</template>
