<template>
  <div>
    <v-icon class='mr-1'>{{icon}}</v-icon>{{data.name}}
  </div>
</template>

<script>

export default {
  data: () => ({
  }),
  computed: {
    icon: function () {
      if(this.data.isSupported) {
        return 'photo'
      }
      if(this.data.isFolder) {
        if(this.data.isOpen) {
          return 'folder-open'
        }
        return 'folder'
      }
    }
  },
  props: {
    data: Object
  }
}
</script>
