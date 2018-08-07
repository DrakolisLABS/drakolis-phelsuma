<template>
  <v-system-bar dark app class='drag' v-if="isMac">
    <v-spacer/>
  </v-system-bar>
</template>

<script>
import {getOS, PLATFORM} from '../../internal/platform'

export default {
  data: () => ({
      isMac: getOS() === PLATFORM.MACOS
  })
}
</script>
