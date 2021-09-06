<template>
  <el-form-item :label="labelName"
                :prop="propName">
    <el-col :span="11">
      <DatePickerTaiwan v-model="value[0]"
                        :config="datepickerSetting" />
    </el-col>
    <el-col class="line"
            :span="2"> - </el-col>
    <el-col :span="11">
      <DatePickerTaiwan v-model="value[1]"
                        :config="datepickerSetting" />
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
import DatePickerTaiwan from '@/components/DatePickerTaiwan';
import { ComponentSetting } from '@/components/DatePickerTaiwan/interface';
import { settingDefault } from '@/components/DatePickerTaiwan/const';

export default defineComponent({
  components: {
    DatePickerTaiwan,
  },
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
    config: {
      type: Object as () => ComponentSetting,
      default: settingDefault,
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
      datepickerSetting: { ...props.config, type: props.prop },
      value,
    };
  },
});
</script>