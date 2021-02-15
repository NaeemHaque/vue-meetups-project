<template>
    <v-alert type="error" dismissible @input="onClosed"  :value="true">
      {{ text }}
    </v-alert>
</template>

<script>
export default {
  props: ['text'],
  methods: {
    onClosed () {
      this.$emit('dismissed')
    }
  }
}
</script>
