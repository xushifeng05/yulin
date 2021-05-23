<template>
  <div>
    <van-cell is-link title="基础用法" @click="show = true" />
    <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
  //注册vant组件的方法
  import { ActionSheet } from 'vant';
  import { ref } from 'vue';
  import { Toast } from 'vant';
  import { Cell, CellGroup } from 'vant';

  export default {
    name: "testVant",
    //注册组件的方式
    components:{
      [ActionSheet.name]:ActionSheet,
      [ref.name]:ref,
      [Toast.name]:Toast,
      [Cell.name]:Cell,
      [CellGroup.name]:CellGroup,
    },
    setup() {
      const show = ref(false);
      const actions = [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' },
      ];
      const onSelect = (item) => {
        // 默认情况下点击选项时不会自动收起
        // 可以通过 close-on-click-action 属性开启自动收起
        show.value = false;
        Toast(item.name);
      };

      return {
        show,
        actions,
        onSelect,
      };
    },
  }
</script>

<style scoped>

</style>
