<template>
  <el-form-item :label="labelName"
                :prop="propName">
    <el-col :span="11">
      <el-input v-model="value[0]"
                :type="propName"
                placeholder="請選擇"></el-input>
    </el-col>
    <el-col class="line"
            :span="2"> - </el-col>
    <el-col :span="11">
      <el-input v-model="value[1]"
                :type="propName"
                placeholder="請選擇"></el-input>
    </el-col>
  </el-form-item>
</template>

<style lang="scss" scoped>
@import '@/style/variable.scss';

.line {
  min-width: 8.3333333333%;
  text-align: center;
}
</style>

<script lang="ts">
import { defineComponent, watchEffect, ref } from 'vue';

export default defineComponent({
  props: {
    prop: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Array,
      required: true,
    },
  },
  setup(props, context) {
    const value = ref(props.modelValue);

    watchEffect(() => {
      context.emit('update:modelValue', value);
    });

    return {
      propName: props.prop,
      labelName: props.label,
      value,
    };
  },
});
</script>