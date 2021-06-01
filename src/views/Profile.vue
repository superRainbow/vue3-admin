<template>
  <div>
    <el-form :model="form"
             :rules="rules"
             ref="formRef"
             label-width="100px">
      <el-form-item label="頭像"
                    prop="avatar">
        <el-upload class="avatar-uploader"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :show-file-list="false"
                   :on-success="handleAvatarSuccess"
                   :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl"
               :src="form.avatar"
               class="avatar">
          <i v-else
             class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="名稱"
                    prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   :disabled="isDisabled"
                   @click="submitForm()">更新</el-button>
        <el-button @click="resetForm()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
@import '@/style/variable.scss';

.avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: $avatar-size;
    height: $avatar-size;
    line-height: $avatar-size;
    text-align: center;
  }
  .avatar {
    width: $avatar-size;
    height: $avatar-size;
    display: block;
  }
}
</style>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watch } from 'vue';
export default defineComponent({
  setup() {
    const formRef = ref();
    const form = reactive({
      name: '',
      avatar: '',
    });
    const isDisabled = ref();
    const imageUrl = ref();
    const rules = {
      name: [
        { required: true, message: '請輸入帳號', trigger: 'blur' },
        { min: 3, max: 15, message: '長度在3-15之間', trigger: 'blur' },
      ],
    };

    const formValidate = () => {
      formRef.value.validate((valid: boolean) => (isDisabled.value = !valid));
    };

    onMounted(() => {
      formValidate();
    });

    watch(form, () => formValidate(), { deep: true });

    const handleAvatarSuccess = (res: Response, file: File) => {
      imageUrl.value = URL.createObjectURL(file);
      form.avatar = imageUrl.value;
    };
    const beforeAvatarUpload = (file: File) => {
      console.log('file', file);

      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
    };

    const submitForm = () => {
      return;
    };
    const resetForm = () => {
      return;
    };

    return {
      form,
      formRef,
      rules,
      imageUrl,
      beforeAvatarUpload,
      handleAvatarSuccess,
      isDisabled,
      submitForm,
      resetForm,
    };
  },
});
</script>