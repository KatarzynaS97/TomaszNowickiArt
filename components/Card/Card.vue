<template>
  <Card
      :dt="props.dt"
      :pt="props.pt"
      :pt-options="props.ptOptions"
      :unstyled="props.unstyled"
  >
    <template #header>
      <slot name="header" />
    </template>

    <template #title>
      <slot name="title" />
    </template>

    <template #content>
      <slot name="content" />
    </template>
  </Card>
</template>
<script setup lang="ts">
import { CardInterface } from 'types'

const props = defineProps<CardInterface>()
</script>
