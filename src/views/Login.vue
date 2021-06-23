<template>
  <div class="login-container">
    <el-form ref="loginFormRef"
             class="login-form"
             :rules="loginRules"
             :model="loginForm">
      <div class="title">
        <h2>後台系統</h2>
      </div>
      <el-form-item prop="email">
        <el-input type="email"
                  placeholder="請輸入信箱"
                  prefix-icon="el-icon-user"
                  v-model="loginForm.email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  placeholder="請輸入密碼"
                  prefix-icon="el-icon-lock"
                  v-model="loginForm.password"
                  show-password></el-input>
      </el-form-item>
      <el-button type="primary"
                 class="loginBtn"
                 :disabled="isDisabled"
                 @click="onSubmit">Login</el-button>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
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
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const loginFormRef = ref();
    const isDisabled = ref(true);
    const loginForm = reactive({
      email: 'rainbow_wu@cht.com.tw',
      password: '`1QAZ2wsx',
    });

    const loginRules = {
      email: [
        { required: true, message: '請輸入信箱', trigger: 'blur' },
        { type: 'email', message: '請輸入信箱格式', trigger: ['blur', 'change'] },
      ],
      password: [{ required: true, message: '請輸入密碼', trigger: 'blur' }],
    };

    const formValidate = () => {
      loginFormRef.value.validate((valid: boolean) => (isDisabled.value = !valid));
    };

    onMounted(() => {
      formValidate();
    });

    watch(loginForm, () => formValidate(), { deep: true });

    const onSubmit = async () => {
      if (isDisabled.value) {
        return;
      } else {
        store.dispatch('handLogin', { data: loginForm });
      }
    };

    return {
      loginFormRef,
      loginForm,
      loginRules,
      isDisabled,
      onSubmit,
    };
  },
});
</script>
