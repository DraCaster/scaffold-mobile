<template>
  <Page>
    <ActionBar title="Iniciar sesion" />
    <ScrollView>
      <StackLayout class="home-panel" orientation="vertical">
        <Label textWrap="true" text="Bienvenido!"
               class="h2 text-center" />
        <Img src="https://www.revistacambio.com.mx/wp-content/uploads/2020/03/76479dd91dc55c2768ddccfc30a4fbf5.png"
             stretch="none"
             horizontalAlignment="center"/>
        <TextField v-model="emailValue" hint="Ingrese su email" keyboardType="email"/>
        <TextField v-model="passwordValue" hint="Ingrese su contraseña" secure="true"/>
        <Button text="INICIAR SESION" @tap="onButtonTap" fontWeight="bold" class="button"/>
        <Button text="REGISTRAME" @tap="onButtonTapRegistration"  fontWeight="bold" class="button"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import {mapMutations} from "vuex"
import RegistrationPage from "./user/views/RegistrationPage";
import HomePage from "./user/views/HomePage";

export default {
  data() {
    return {
      emailValue: "",
      passwordValue:"",
    };
  },
  methods: {
    ...mapMutations(["setUsername"]),
    onButtonTap() {
      if(this.emailValue !== "" && this.passwordValue !== ""){
        console.log('antes del seteo')
        console.log(this.$store)
        //this.$store.commit('setUsername', this.emailValue)
       // this.setUsername(this.emailValue)
        this.$navigateTo(HomePage)
      }else{
        alert({
          title: 'Inicio de sesion',
          message: 'Te faltan completar campos',
          okButtonText: 'Me olvide :('
        }).then(() => {
          console.log('Alert dialog closed');
        });
      }
    },
    onButtonTapRegistration(){
      this.$navigateTo(RegistrationPage);
    }
  }
};
</script>

<style scoped>
.home-panel {
  vertical-align: center;
  font-size: 20;
  margin: 15;
}

.button{
  background-color: burlywood;
  color: azure;
}
</style>