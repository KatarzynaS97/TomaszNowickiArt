<template>
  <Menubar
    :model="props.model"
    :breakpoint="props.breakpoint"
    :button-props="props.buttonProps"
    :aria-label="props.ariaLabel"
    :aria-labelledby="props.ariaLabelledby"
    :dt="props.dt"
    :pt="props.pt"
    :pt-options="props.ptOptions"
    :unstyled="props.unstyled"
  />
</template>

<script setup lang="ts">
import { MenubarInterface } from "types";

const props = defineProps<MenubarInterface>();
</script>
