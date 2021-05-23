<template>
  <div>
    <div id="nav">
      <CertificateNav></CertificateNav>
    </div>
    <div style="width: 100%;height: 300px;">
      <img src="../../assets/img/cer.jpg " alt="" style="width: 100%;height: 100%;">
    </div>
  </div>


</template>

<script>
  import CertificateNav from "../../views/setting/CertificateNav";

  export default {
    name: "Certificate",

    components:{
      CertificateNav,
    },
    data() {
      return {

      }
    },
  }
</script>
<style scoped>

</style>
