<template>
  <Textarea
      :model-value="props.modelValue"
      :default-value="props.defaultValue"
      :name="props.name"
      :auto-resize="props.autoResize"
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
import { TextareaInterface } from 'types'

const props = defineProps<TextareaInterface>()
</script>