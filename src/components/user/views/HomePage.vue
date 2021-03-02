<template>
  <Page>
    <ActionBar title="Inicio"/>
    <ScrollView>
      <StackLayout class="home-panel">
        <Label textWrap="true" text="Holaaa!!"
               class="h2 text-center"/>
        <Img
            src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/09/como-conseguir-pikachu-gorra-pokemon-espada-escudo-2083655.jpg"
            stretch="none"
            horizontalAlignment="center"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
import {mapState} from "vuex"

export default {
  computed: {
    ...mapState(["username"])
  }
}
</script>