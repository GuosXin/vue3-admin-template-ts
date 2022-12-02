<template>
    <el-tabs v-model="currentTab" id="tabs-bar" type="card" @tab-click="tabClick" @tab-remove="tabRemove">
        <el-tab-pane
            v-for="item in tabsStore.tabsList"
            :key="item.path"
            :label="item.title"
            :name="item.path"
            :closable="item.close"
        >
            <template #label>
                <span class="custom-tabs-label">
                    <el-icon v-if="item.icon"><component :is="item.icon"/></el-icon>
                    <span>{{ item.title }}</span>
                </span>
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
    import { ref, watch } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useTabsStore } from '@/stores/tabs'
    import type { TabsPaneContext, TabPaneName } from 'element-plus'


    let route = useRoute()
    let router = useRouter()
    let tabsStore = useTabsStore()
    let currentTab = ref(route.path)
    
    // 监听route变化
    watch(
        () => route.path, 
        () => {
            currentTab.value = route.path
            tabsStore.addTabs({
                path: route.path,
                title: route.meta.title,
                icon: route.meta.icon,
                close: !route.meta.isAffix
            })
        },
        {
            immediate: true
        }
    )

    const tabClick = (tabItem: TabsPaneContext) => {
        let path = tabItem.props.name as string
        router.push(path)
    }

    const tabRemove = (name: TabPaneName) => {
        tabsStore.removeTabs(name)
    }

</script>

<style>
    /* 覆盖el-tabs样式 */
    #tabs-bar .el-tabs__header{
        margin: 0;
        border-bottom: none;
    }
    #tabs-bar .el-tabs__item{
        color: #ccc;
        border: none;
    }
    #tabs-bar .el-tabs__nav .is-active{
        color: var(--el-color-primary);
        border-bottom: 2px solid var(--el-color-primary);
    }
    #tabs-bar .el-tabs__nav{
        border: none;
    }
    #tabs-bar .el-tabs__nav-scroll{
        margin: 0 5px;
    }
    #tabs-bar .el-tabs__item .is-icon-close svg{
        margin-top: 0;
    }
    #tabs-bar .el-tabs__item .is-icon-close{
        margin-top: 2px;
    }

    /* 自定义样式 */
    #tabs-bar .custom-tabs-label .el-icon{
        vertical-align: middle;
    }
    #tabs-bar .custom-tabs-label span{
        vertical-align: middle;
        margin-left: 4px;
    }
</style>