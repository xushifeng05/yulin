<template>
  <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
  >

    <van-cell v-for="item in list" :key="item" style="width: 100%">
<!--      <van-card-->
<!--              desc="描述信息"-->
<!--              title="商品标题"-->
<!--      >-->
<!--      </van-card>-->
      <div style="width: 100%;">
        <el-card style="width: 100%;">
          <div>{{ MissionName }}：</div>
          <div style="text-align: center">{{ TaskDetails }}</div>
          <div style="text-align: right">{{ TaskTime }}</div>
        </el-card>
      </div>

    </van-cell>
  </van-list>
</template>

<script>
  import { List , Card , Cell , CellGroup } from 'vant';

  export default {
    name: "RecordingCard",
    components:{
      [List.name]:List,
      [Card.name]:Card,
      [Cell.name]:Cell,
      [CellGroup.name]:CellGroup,
    },
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        MissionName:"任务名称",
        TaskDetails:"任务介绍",
        TaskTime:"2021.04.11",
      };
    },
    methods: {
      onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            this.list.push(i)
          }

          // 加载状态结束
          this.loading = false;

          // 数据全部加载完成
          if (this.list.length >= 40) {
            this.finished = true;
          }
        }, 1000);
      },
    },
  }
</script>

<style scoped>

</style>
