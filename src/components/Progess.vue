<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<template>
  <h1> 登陆页</h1>
</template>

<script>
export default {
  name: "progess",
  methods: {
    format(percentage) {
      return percentage === 100 ? '满' : `${percentage}%`;
    }
  }
};
</script>
