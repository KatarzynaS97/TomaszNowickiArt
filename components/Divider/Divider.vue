<template>
     <Divider
    :align="props.align"
    :layout="props.layout"
    :type="props.type"
    :dt="props.dt"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
  />
</template>

<script setup lang="ts">
import { DividerInterface } from "types";

const props = defineProps<DividerInterface>()
</script>