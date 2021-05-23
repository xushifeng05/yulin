<template>
  <div id="setting">
<!--    吸顶导航-->
    <div id="nav">
      <SettingNav></SettingNav>
    </div>
<!--    资料(头像与呢称)-->
    <div id="CharacterCard" style="margin-top: 0.5rem">
      <CharacterCard></CharacterCard>
    </div>
<!--    单元格组-->
    <div id="CellGroup" style="margin-top: 1em">
      <cell-group></cell-group>
    </div>
<!--    退出登入按钮-->
    <div id="exit" style="margin-top: 10em">
      <Exit></Exit>
    </div>
  </div>
</template>

<script>
  import SettingNav from "../../views/setting/SettingNav";
  import CharacterCard from "../../views/setting/CharacterCard";
  import CellGroup from "../../views/setting/CellGroup"
  import Exit from "../../views/setting/Exit";

  import { Tabbar, TabbarItem} from 'vant';

  export default {
    name: "setting",
    components:{
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem,
      Exit,
      SettingNav,
      CharacterCard,
      CellGroup,
    },
    data(){
      return{
        active:2,
      }
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
