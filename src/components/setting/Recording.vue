<template>
  <div id="Recording">
<!--    吸顶导航-->
    <div id="nav">
      <RecordingNav></RecordingNav>
    </div>
<!--    任务卡片-->
    <div id="card" style="margin-top: 2rem;width: 100%;">
        <div>
          <RecordingCard></RecordingCard>
        </div>
    </div>
    <div id="up">
      <Up></Up>
    </div>
  </div>
</template>

<script>
  import RecordingNav from "../../views/setting/RecordingNav";
  import RecordingCard from "../../views/setting/RecordingCard";
  import Up from "../../views/setting/Up";

  export default {
    name: "Recording",
    components:{
      RecordingCard,
      RecordingNav,
      RecordingNav,
      Up,
    },
  }
</script>

<style scoped>
</style>
