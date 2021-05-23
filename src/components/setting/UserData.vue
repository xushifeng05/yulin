<template>
  <div id="UserData">
<!--    上面nav部分-->
    <div id="UserDataNav">
      <UserDataNav></UserDataNav>
    </div>
<!--    头像框-->
    <div id="userImage">
      <div style="width: 178px;height: 178px;margin: auto;border: 1px dashed #d9d9d9;border-radius: 6px;text-align: center">
        <UserImage></UserImage>
      </div>
    </div>
<!--    单元格组-->
    <div id="UserDataCellGroup" style="margin-top: 2rem">
      <!--    四个单元格条-->
      <div>
        <div class="van-hairline--top-bottom">
          <van-cell>
            <template #title>
              <span class="@text-color span-space">账号:</span><span style="color: #7F7F7F;margin-left: 1rem">{{ user.Number }}</span>
            </template>
          </van-cell>
        </div>
        <div class="van-hairline--top-bottom">
          <van-cell is-link @click="dialogFormVisible = true">
            <template #title>
              <span class="@text-color span-space">昵称:</span><span style="color: #7F7F7F; margin-left: 1rem">{{ user.Name }}</span>
            </template>
          </van-cell>
        </div>
        <div class="van-hairline--top-bottom">
          <van-cell is-link @click="show = true">
            <template #title>
              <span class="@text-color span-space">性别:</span><span style="color: #7F7F7F; margin-left: 1rem">{{ user.sex }}</span>
            </template>
          </van-cell>
        </div>
        <div class="van-hairline--top-bottom">
          <van-cell @click="dialogVisible=true" is-link>
            <template #title>
              <span class="@text-color span-space">个性签名:</span><span style="color: #7F7F7F; margin-left: 1rem">{{ user.autograph }}</span>
            </template>
          </van-cell>
        </div>
        <div class="van-hairline--top-bottom">
          <van-cell>
            <template #title>
              <span class="@text-color span-space">服务时长:</span><span style="color: #7F7F7F;margin-left: 1rem">{{ user.Time }} 小时</span>
            </template>
          </van-cell>
        </div>
      </div>
    </div>
  </div>
  <!--    下方弹出窗部分-->
  <div>
    <van-action-sheet
            v-model:show="show"
            :actions="actions"
            cancel-text="取消"
            @select="select"
            close-on-click-action
            @cancel="onCancel"
    />
  </div>
<!--  修改呢称弹窗-->
  <div style="width: 100%">
    <el-dialog title="修改呢称" v-model="dialogFormVisible" width="90%">
      <el-form :model="user">
        <el-form-item>
          <el-input v-model="user.Name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="ModifyName()">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
<!--  修改个性签名弹窗-->
  <div style="width: 100%">
    <el-dialog title="修改个性签名" v-model="dialogVisible" width="90%">
      <el-form :model="user">
        <el-form-item>
          <el-input v-model="user.autograph" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="ModifyAutograph()">确 定</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
  import UserDataNav from "../../views/setting/UserDataNav";
  import UserImage from "../../views/setting/UserImage";
  import UserDataCellGroup from "../../views/setting/UserDataCellGroup";

  import { Toast , Cell, CellGroup ,ActionSheet} from 'vant';
  import { ref } from 'vue'
  import { Dialog } from 'vant';

  export default {
    name: "UserData",
    setup() {
      const show = ref(false);
      const actions = [
        { name: '选项一' },
        { name: '选项二' },
        { name: '选项三' },
      ];
      const onCancel = () => Toast('取消');

      return {
        show,
        actions,
        onCancel,
      };
    },
    data(){
      return{
        user:{
          Number:"",
          Name:"",
          sex:"",
          autograph: "编辑个性签名，展示你的态度",
          Time:0,
        },
        show: false,
        actions: [{ name: '男' }, { name: '女' }],
        dialogVisible:false,
        dialogFormVisible:false,
      }
    },
    mounted() {
      this.user.Name = this.$store.state.user.username;
      this.user.Number = this.$store.state.user.userNumber;
      this.user.sex = this.$store.state.user.userSex;
    },
    components:{
      UserDataCellGroup,
      UserDataNav,
      UserImage,

      [Cell.name]:Cell,
      [CellGroup.name]:CellGroup,
      [ActionSheet.name]:ActionSheet,
      [Dialog.name]:Dialog,
    },
    methods:{
      onCancel() {
        Toast('取消');
      },
      select(item){
        this.user.sex = item.name;
        this.$store.commit('setSex', item.name);
      },
      ModifyName(){
        this.dialogFormVisible = false;
        // this.$store.state.user.username = this.name;
        this.$store.commit('setName',this.user.Name)
      },
      ModifyAutograph(){
        this.dialogFormVisible = false;
      },
    },
  }
</script>

<style scoped>
  .span-space{
    display:inline-block;
    width: 4.5rem
  }
</style>
