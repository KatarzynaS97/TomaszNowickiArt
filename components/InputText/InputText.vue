<template>
  <InputText
      :v-model="props.value"
      :default-value="props.defaultValue"
      :name="props.name"
      :size="props.size"
      :invalid="props.invalid"
      :variant="props.variant"
      :fluid="props.fluid"
      :form-control="props.formControl"
      :dt="props.dt"
      :pt="props.pt"
      :pt-options="props.ptOptions"
      :unstyled="props.unstyled"
  />
</template>
<script setup lang="ts">
import { InputTextInterface } from 'types'

const props = defineProps<InputTextInterface>()
</script>
