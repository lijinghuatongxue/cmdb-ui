<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="账号">
        <el-input v-model="form.name" placeholder="请输入您的账号" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="请输入您的密码" style="width: 300px"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
        password: ''
        }
      }
    },
    methods: {
      onSubmit() {
        alert('submit!');
      }
    }
  }
</script>

<style scoped>

</style>
