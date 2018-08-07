<template>
  <v-footer app fixed>
    <span>{{OS}}</span>
  </v-footer>
</template>

<script>
import {getOSFullName} from '../../internal/platform'

export default {
  data: () => ({
      OS: getOSFullName()
  })
}
</script>
