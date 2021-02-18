<template>
  <div class="login-container">
    <el-form ref="loginFormRef"
             class="login-form"
             :rules="loginRules"
             :model="loginForm">
      <div class="title">
        <h2>後台系統</h2>
      </div>
      <el-form-item prop="name">
        <el-input placeholder="請輸入帳號"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.name"></el-input>
      </el-form-item>
      <el-form-item prop="pwd">
        <el-input placeholder="請輸入密碼"
                  prefix-icon="el-icon-lock"
                  v-model="loginForm.pwd"
                  show-password></el-input>
      </el-form-item>
      <el-button type="primary"
                 class="loginBtn"
                 :loading="loading"
                 :disabled="isDisabled"
                 @click="onSubmit">Login</el-button>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
}
.title {
  margin-bottom: 30px;
  h2 {
    font-size: 26px;
    color: #eee;
    font-weight: bold;
    text-align: center;
  }
}
.login-form {
  width: 450px;
  margin: 0 auto;
  padding-top: 160px;
}
.loginBtn {
  width: 100%;
}
</style>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watch } from 'vue';

export default defineComponent({
  setup() {
    const loading = ref(false);
    const loginFormRef = ref();
    const isDisabled = ref(true);
    const loginForm = reactive({
      name: 'rainbow',
      pwd: '1qaz2wsx',
    });

    const loginRules = {
      name: [
        { required: true, message: '請輸入帳號', trigger: 'blur' },
        { min: 3, max: 15, message: '長度在3-15之間', trigger: 'blur' },
      ],
      pwd: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
    };

    const formValidate = () => {
      loginFormRef.value.validate(
        (valid: boolean) => (isDisabled.value = !valid)
      );
    };

    onMounted(() => {
      formValidate();
    });

    watch(loginForm, () => formValidate(), { deep: true });

    const onSubmit = async () => {
      if (isDisabled.value) {
        return;
      } else {
        loading.value = true;
        console.log('loginForm', loginForm);
      }
    };

    return {
      loginFormRef,
      loginForm,
      loginRules,
      loading,
      isDisabled,
      onSubmit,
    };
  },
});
</script>
