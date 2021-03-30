<template>
  <Page>
    <ActionBar title="Inicio"/>
    <ScrollView>
      <StackLayout class="home-panel">
        <Label textWrap="true" text="Hola!!"
               class="h2 text-center"/>
        <Button text="Tomar foto" @tap="onButtonTapForCamera" fontWeight="bold" class="button"/>
        <Button text="gps" @tap="onButtonTapForGPS" fontWeight="bold" class="button"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>
<script>
//import {mapState} from "vuex"
import {requestPermissions, takePicture} from "nativescript-camera";
import {enableLocationRequest, getCurrentLocation} from "nativescript-geolocation";
import {Accuracy} from "@nativescript/core/ui/enums";
import gql from "graphql-tag";

export default {
  /*computed: {
    ...mapState(["username"])
  },*/

  methods:{
    onButtonTapForCamera(){
      requestPermissions()
      .then(() => {
        takePicture()
      })
    },
    onButtonTapForGPS(){
      enableLocationRequest()
      .then(() => {
        getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
      })
    }
  },
  apollo: {
    person: gql
        ` query {
                person($id:"6009a8c44a129c5b6b854c9b"){
                    person(id: $id)
                    name
                    lastname
                }
          }
     `
  }
}
</script>
