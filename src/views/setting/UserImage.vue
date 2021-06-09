<template>
  <div id="UserImage">
    <el-upload
            class="avatar-uploader el-upload"
            action="#"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            :http-request="upload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>

  export default {
    name: "UserImage",
    data() {
      return {
        imageUrl:"",
        userId:"",
      };
    },
    mounted() {
      this.imageUrl = this.$store.state.user.userImg;
      this.userID = this.$store.state.user.userNumber;
      console.log(this.userId)
    },
    methods: {
      //传送文件用qs后端接收不到，无奈用formData
      upload(param){
        const file = param.file;
        const formData = new FormData();
        formData.append('id',this.userID);
        formData.append('img',file);
        this.$axios.post('http://localhost:8081/updateImg',formData).then(res=>{
          this.$store.commit('setImg',res.data.data);
          this.imageUrl = this.$store.state.user.userImg;
        })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    /*position: relative;*/
    overflow: hidden;
    margin-left: auto;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
