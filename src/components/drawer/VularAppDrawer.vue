<template>
    <div class="drawer-content" :class="{light: inputValue.light}">
      <v-toolbar v-if="inputValue.showLogo"  class="flex-0" 
        :dark="inputValue.logo.dark"
        :light="inputValue.logo.light"
        :color="inputValue.logo.color"
        :src = "inputValue.logo.src"
        :flat = "inputValue.logo.flat"
        :style = "inputValue.logo.style"
        >
        <img :src="logo.src" style="height:36px;" :alt="logo.alt" />
        <v-toolbar-title class="ml-0 pl-3">
          <span class="hidden-sm-and-down">{{logo.title}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon class="hidden-xs-only" 
          v-if="!inputValue.mini"
          @click.stop="inputValue.mini = !inputValue.mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-toolbar>

      <v-skeleton-loader
        type="list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar, list-item-avatar"
        v-if="loading" 
      >
      </v-skeleton-loader>
      <v-list class="drawer-list"
        v-else
      >
      <component     
        v-for="schema in items"
        :key="schema.id"
        :is="schema.name" 
        :schema="schema"
        :drawer="inputValue"
      >
      </component>
    </v-list>

    </div>
</template>
<script>
import VularMenuItem from "./VularMenuItem"
import VularMenuItemGroup from "./VularMenuItemGroup"
import VularSubheader from "./VularSubheader"
export default {
  name: 'vular-app-drawer',
  components: {
    VularMenuItem,
    VularMenuItemGroup,
    VularSubheader,
  },
  props: {
    value:{default:()=>{return {}}},
    logo:{default:()=>{return {}}},
    dark:{default:false},
  },
  data: function () {
    return{
      loading:false,
      items:[
        {
          id:"1",
          name:"vular-menu-item",
          prependIcon:'mdi-speedometer',
          title:this.$t('drawer.dashboard'),
          active:true,
          to:{name:'dashboard'},
          /*action:{
            name:"openPage",
            api:"/api/view",
            view:'\\Water\\Vular\\View\\Dashboard',
          }*/
        },
        {
          id:"3",
          name:"vular-menu-item",
          prependIcon: 'mdi-image-auto-adjust',
          title:this.$t('drawer.medias'),
          to:{name:'medias'},
          /*action:{
            name:"openPage",
            api:"/api/view",
            view:'\\Water\\Vular\\View\\Medias',
          }*/
        },
        {
          id:"4",
          name:"vular-menu-item",
          prependIcon: 'mdi-message-text-outline',
          title:this.$t('drawer.leads'),
          badge:{
            title:'6',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          },
          action:{
            name:"openPage",
            api:"/api/view",
            view:'\\Water\\Vular\\View\\Inquires',
          }
        },
        {
          id:"2",
          name:"vular-menu-item",
          prependIcon: 'mdi-currency-usd-circle-outline',
          title:'订单管理',
          action:{
            name:"openPage",
            api:"/api/view",
            view:'\\Water\\Vular\\View\\Orders',
          }
        },
        {
          name:"vular-subheader",
          title:"Vular CMS"
        },
        {
          id:"5",
          name:"vular-menu-item-group",
          prependIcon:'mdi-newspaper-variant-outline',
          //appendIcon: 'home',
          title:this.$t('drawer.posts'),
          active: false,
          children: [
            {
              id:"6",
              name:"vular-menu-item",
              title:this.$t('drawer.post-list'),
              active: true,
              badge:{
                title:'4',
                props:{
                  dark:true,
                  color:'blue',
                  small:false,
                }
              },
              to:{ 
                name: 'module', 
                params: { 
                  pageId: 'water-vular-view-post_list',
                  moduleId:'posts', 
                }
              }
              /*action:{
                name:"openPage",
                api:"/api/view",
                view:'\\Water\\Vular\\View\\PostList',
              }*/
            },
            {
              id:"7",
              name:"vular-menu-item",
              title:'文章分类',
              to:"post-category",
            },
            {
              id:"8",
              name:"vular-menu-item",
              title:'文章属性',
              to:"post-attributes",
            },

          ]          
        },
        {
          id:"9",
          name:"vular-menu-item-group",
          prependIcon:'mdi-shopping-outline',
          //appendIcon: 'home',
          title:'产品管理',
          active: false,
          children: [
            {
              id:"10",
              name:"vular-menu-item",
              title:'产品列表',
              action:{
                name:"openPage",
                api:"/api/view",
                view:'\\Water\\Vular\\View\\ProductList',
              }
            },
            {
              id:"11",
              name:"vular-menu-item",
              title:'产品分类',
              to:"product-category",
            },
            {
              id:"12",
              name:"vular-menu-item",
              title:'产品属性',
            },

          ]          
        },
        {
          id:"13",
          name:"vular-menu-item-group",
          prependIcon:'mdi-semantic-web',
          //appendIcon: 'home',
          title:'页面管理',
          active: false,
          children: [
            {
              name:"vular-menu-item",
              title:'页面列表',
            },
            {
              name:"vular-menu-item",
              title:'页面分类',
            },
            {
              name:"vular-menu-item",
              title:'页面属性',
            },

          ]          
        },
        {
          id:"14",
          name:"vular-subheader",
          title:"外贸管理"
        },
        {
          id:"15",
          name:"vular-menu-item",
          prependIcon: 'mdi-currency-usd-circle-outline',
          title:'订单管理',
          to:"orders",
        },
        {
          id:"16",
          name:"vular-menu-item",
          prependIcon: 'mdi-account-supervisor-outline',
          title:'客户管理',
          to:"orders",
        },
        {
          id:"17",
          name:"vular-menu-item",
          prependIcon: 'mdi-diamond-outline',
          title:'产品管理',
          to:"orders2",
        },
        {
          id:"18",
          name:"vular-menu-item",
          prependIcon: 'mdi-factory',
          title:'供应商管理',
          to:"orders",
        },
        {
          id:"19",
          name:"vular-subheader",
          title:"菜单演示"
        },
        {
          id:"20",
          name:"vular-menu-item",
          prependIcon: 'mdi-ab-testing',
          appendIcon: 'mdi-bug',
          title:'调试',
          chip:{
            title:'New',
            props:{
              dark:true,
              color:'blue',
              'x-small':true,
            }
          }
        },
        {
          id:"21",
          name:"vular-menu-item-group",
          prependIcon:'mdi-blur',
          //appendIcon: 'home',
          title:'菜单测试',
          active: false,
          badge:{
            title:'8',
            props:{
              dark:true,
              color:'red',
              small:false,
            }
          },
          chip:{
            title:'Hot',
            props:{
              dark:true,
              color:'green',
              'x-small':true,
            }
          },
          children: [
            {
              name:"vular-menu-item",
              prependIcon: 'mdi-ab-testing',
              appendIcon: 'mdi-brush',
              title:'调试2',
              chip:{
                title:'New',
                props:{
                  dark:true,
                  color:'blue',
                  'x-small':true,
                }
              }
            },
            {
              name:"vular-menu-item",
              title:'菜单Badge测试',
              badge:{
                title:'4',
                props:{
                  dark:true,
                  color:'blue',
                  small:false,
                }
              },
            },

          ]          
        },
        {
          id:"22",
          name:"vular-menu-item-group",
          prependIcon:'mdi-basket',
          //appendIcon: 'home',
          title:'菜单测试2',
          active: false,
          chip:{
            title:'Hot',
            props:{
              dark:true,
              color:'pink',
              'x-small':true,
            }
          },
          children: [
            {
              id:"23",
              name:"vular-menu-item",
              prependIcon: 'mdi-apple-finder',
              appendIcon: 'mdi-bug',
              title:'调试2',
              chip:{
                title:'New',
                props:{
                  dark:true,
                  color:'blue',
                  'x-small':true,
                }
              }
            },
            {
              id:"24",
              name:"vular-menu-item",
              title:'菜单Badge测试',
              badge:{
                title:'4',
                props:{
                  dark:true,
                  color:'green',
                  small:false,
                }
              },
            },

          ]          
        },
        {
          id:"25",
          name:"vular-subheader",
          title:"系统设置"
        },
        {
          id:"26",
          name:"vular-menu-item",
          prependIcon:'mdi-compare',
          to:"theme-settings",
          title:'主题设置',
            chip:{
              title:'更美',
              props:{
                dark:true,
                color:'red',
                'x-small':true,
              }
            }
        },
      ],
    }    
  },
  
  computed:{
    inputValue: {
      get:function() {
        return this.value;
      },
      set:function(val) {
        this.$emit('input', val);
      },
    },
  },

  methods: {
  },

  created () {
  },

  watch:{
    "value.mini" : function (val){
      if(val && !this.value.expandOnHover){
        this.items.forEach(item=>{
          this.$set(item, 'active', false)
        })
      }
    }
  }

};
</script>

<style>
  .drawer-content ::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }
  .drawer-content ::-webkit-scrollbar-track {
    border-radius: 0;
  }
  .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .theme--dark .drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(255,255,255, 0.2);
    transition: all .2s;
  }
  .theme--dark .drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255, 0.4);
  }
  .light.drawer-content ::-webkit-scrollbar-thumb {
    border-radius: 0;
    background: rgba(0,0,0, 0.2);
    transition: all .2s;
  }

  .light.drawer-content ::-webkit-scrollbar-thumb:hover {
    background: rgba(0,0,0, 0.4);
  }

  .drawer-content ::-webkit-scrollbar-corner{
    background: transparent;
  }

  .drawer-content{
    width: 100%;height: 100%;display: flex;flex-flow: column;
  }

  .drawer-content .v-list-item__title{
    font-size: 0.825rem;
  }

  .drawer-content .v-subheader{
    font-size: 0.825rem;
  }

  .flex-0{
    flex: 0;
  }

  .drawer-list{
    flex: 1;
    overflow-y: auto; 
    overflow-x:hidden;
    margin-right: 2px;
  }

</style>
