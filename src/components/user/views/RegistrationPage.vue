<template>
  <Page>
    <ActionBar title="Registro" />
    <ScrollView>
      <StackLayout class="home-panel">
        <Label textWrap="true" text="Complete los campos para el registro"
               class="h2 text-center" />
        <Img src="https://www.revistacambio.com.mx/wp-content/uploads/2020/03/76479dd91dc55c2768ddccfc30a4fbf5.png"
             stretch="none"
             class="-center"/>
        <TextField v-model="emailValue" hint="Ingrese su email" keyboardType="email"/>
        <TextField v-model="passwordValue" hint="Ingrese su contraseña" secure="true"/>
        <!--Add your page content here-->
        <Button text="REGISTRAME" @tap="onButtonTap" fontWeight="bold" class="button"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  methods: {
    onButtonTap() {
      alert({
        title: 'Registro',
        message: 'Su registro fue exitoso!',
        okButtonText: 'VOLVER'
      }).then(() => {
        console.log('Alert dialog closed');
      });
    },
  },

  data() {
    return {
      emailValue: "",
      passwordValue:""
    };
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