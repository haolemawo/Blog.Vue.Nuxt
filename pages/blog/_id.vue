<template>
  <div class="post-page">
    <h1 class="title">{{data.btitle}}</h1>
    <p class="createTime">{{data.bCreateTime | timeFormat}}</p>

    <div  v-html="data.bcontent"  ></div>

  </div>
</template>

<script>
  import Vue from "vue";
  export default {
    layout: "blog",
    validate ({ params }) {
      // 校验文章id是否为数字
      return /^\d+$/.test(params.id);

    },
    async asyncData ({ params, error }) {
      // 获取文章详情
      let data = {};
      try {
        data = await Vue.http.get(`blog/${params.id}`);
        return {
          data: data
        };
      } catch (e) {
        //error({ statusCode: 404, message: "出错啦" });
      }
    },
    fetch ({ store, redirect  }) {
      if (!(store.state.token&&store.state.token.length>=128)) {
        return redirect('/login')
      }

    },
    data () {
      return {
        comments: []
      };
    },
    head () {
      return {
        title: `${this.data.btitle}`,
        meta: [
          {
            name: "description",
            content: this.data.btitle
          }
        ]
      };
    },
    filters: {
      timeFormat: function (time) {
        if (!time) return "";
        return time;
      }
    },
    mounted () {},
    components: {
    }
  };
</script>

<style lang="css">
  @import "../../static/vue-blog-sq.css";
</style>
