<template>
  <div class="u-marginBottom40 js-collectionStream">
    <div class="streamItem streamItem--section js-streamItem">
      <div class="u-clearfix u-maxWidth1000 u-marginAuto">
        <div class="row u-marginTop30 u-marginBottom20 u-sm-marginLeft20 u-sm-marginRight20 u-xs-marginTop0 u-xs-marginRight0 u-xs-marginLeft0">

          <div v-for="post in blogs" :key="post.bID" class="postArticle postArticle--short is-withAccentColors">
            <div class="u-paddingBottom25 u-paddingTop20 js-trackedPost u-borderBottomLight">
              <div class="u-clearfix u-marginBottom15 u-paddingTop5">
                <div class="postMetaInline u-floatLeft">
                  <div class="u-flexCenter">
                    <div class="postMetaInline-avatar u-flex0">
                      <a class="link u-baseColor--link avatar" href="https://medium.com/@DamianDulisz" dir="auto">
                        <div class="u-relative u-inlineBlock u-flex0">
                          <img src="https://cdn-images-1.medium.com/fit/c/72/72/0*YQEw5aOuOSMPf70K.jpg" class="avatar-image u-size36x36 u-xs-size32x32" alt="Go to the profile of Damian Dulisz">
                          <div class="avatar-halo u-absolute u-textColorGreenNormal svgIcon" style="width: calc(100% + 10px); height: calc(100% + 10px); top:-5px; left:-5px">
                            <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"></svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div class="postMetaInline postMetaInline-authorLockup ui-captionStrong u-flex1 u-noWrapWithEllipsis">
                      <nuxt-link class="" :to="`/blog/${post.bID}`">
                        {{post.bsubmitter}}
                      </nuxt-link>
                      <div class="ui-caption u-fontSize12 u-baseColor--textNormal u-textColorNormal js-postMetaInlineSupplemental">
                        <nuxt-link class="link link--darken"  :to="`/blog/${post.bID}`">
                          <time datetime="2018-08-15T17:52:49.897Z">{{post.bCreateTime}}</time>
                        </nuxt-link>
                        <span class="middotDivider u-fontSize12"></span><span class="readingTime" title="7 min read"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <nuxt-link class=""  :to="`/blog/${post.bID}`">
                <div class="u-maxWidth700 u-margin0 postArticle-content js-postField">
                  <section class="section section--body section--first section--last">
                    <div class="section-divider">
                      <hr class="section-divider">
                    </div><div class="section-content">
                    <div class="section-inner sectionLayout--insetColumn">
                      <h3 name="4852" id="4852" class="graf graf--h3 graf-after--figure graf--title">{{post.btitle}}</h3>
                      <p name="5a51" id="5a51" class="graf graf--p graf-after--h3 graf--trailing">
                        {{post.bRemark}}
                      </p>
                    </div>
                  </div>
                  </section>
                </div>
              </nuxt-link>
              <div class="postArticle-readMore">
                <a class="button button--smaller button--chromeless u-baseColor--buttonNormal" href="https://medium.com/the-vue-point/the-first-vue-js-sprint-summary-10c260bf642a?source=collection_home---6------0---------------------">Read more…</a>
              </div>
              <div class="u-clearfix u-paddingTop10">
                <div class="u-floatLeft">
                  <div class="multirecommend js-actionMultirecommend u-flexCenter">
                    <div class="u-relative u-foreground"></div>
                    <span class="u-textAlignCenter u-relative u-background js-actionMultirecommendCount u-marginLeft5">
                                        <button class="button button--chromeless u-baseColor--buttonNormal js-multirecommendCountButton u-disablePointerEvents">
                                            {{post.btraffic}} readers
                                        </button>
                                    </span>
                  </div>
                </div>
                <div class="buttonSet u-floatRight">
                  <a class="button button--chromeless u-baseColor--buttonNormal" href="https://medium.com/the-vue-point/the-first-vue-js-sprint-summary-10c260bf642a?source=collection_home---6------0---------------------#--responses">4 responses</a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Vue from "vue";
  export default {
    layout: "blog",
    async asyncData (ctx) {
      let blogs = [];
      try {
        console.log(2)

        const blogData = await Vue.http.get("Blog?page=1&bcategory=%E6%8A%80%E6%9C%AF%E5%8D%9A%E6%96%87");
        console.log(1)
        console.log(blogData);

        blogs = blogData;

        return {
          blogs: blogs,
        };
      } catch (e) {
        //ctx.error({ statusCode: 500, message: "出错啦" });
      }
    },
    data () {
      return {};
    },
    head () {
      return {
        title:"首页",
        meta: [
          {
            name: "description",
            content: "老张的哲学是个人博客，利用NUXT.js的服务端渲染方案"
          }
        ]
      };
    },
    mounted () {},
    filters: {
      timeFormat: function (time) {
        if (!time) return "";
        return time;
      }
    },
    methods: {},
    components: {
    }
  };
</script>

<style lang="css">
  @import "../static/vue-blog-sq.css";
</style>

